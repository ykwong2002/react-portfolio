import { useCallback, useEffect, useRef, useState } from "react";
import { useAnimationFrame, useInView, useReducedMotion } from "framer-motion";
import { VAULT_NODES } from "../constants";

const WIDTH = 400;
const HEIGHT = 340;
const RADIUS = 128;
const FOCAL = 3.6;
const COS_TILT = Math.cos(0.2);
const SIN_TILT = Math.sin(0.2);
const SPEED = 0.00024; // radians per ms, about one turn every 26 seconds
const NOTES_PER_HUB = 7;

// Seeded so the graph has the same shape on every load.
const seeded = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

// Hubs are the vault folders: the first sits at the centre, the rest on a
// sphere around it. Each hub gets a cluster of small unlabelled note nodes.
const buildGraph = () => {
  const random = seeded(11);
  const centre = VAULT_NODES[0].id;
  const outer = VAULT_NODES.length - 1;
  const nodes = [];
  const edges = [];

  VAULT_NODES.forEach((hub, i) => {
    if (i === 0) {
      nodes.push({ hub: hub.id, isHub: true, x: 0, y: 0, z: 0 });
      return;
    }
    const lon = ((i - 1) / outer) * Math.PI * 2;
    const lat = (i % 2 ? 1 : -1) * 0.6;
    nodes.push({
      hub: hub.id,
      isHub: true,
      x: Math.cos(lat) * Math.cos(lon) * 0.95,
      y: Math.sin(lat) * 0.95,
      z: Math.cos(lat) * Math.sin(lon) * 0.95,
    });
    edges.push({ from: 0, to: i, hubs: [centre, hub.id] });
  });

  VAULT_NODES.forEach((hub, i) => {
    for (let k = 0; k < NOTES_PER_HUB; k++) {
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const r = 0.3 * (0.45 + 0.55 * random());
      nodes.push({
        hub: hub.id,
        isHub: false,
        x: nodes[i].x + r * Math.sin(phi) * Math.cos(theta),
        y: nodes[i].y + r * Math.cos(phi),
        z: nodes[i].z + r * Math.sin(phi) * Math.sin(theta),
      });
      edges.push({ from: i, to: nodes.length - 1, hubs: [hub.id] });
    }
  });

  return { nodes, edges };
};

const GRAPH = buildGraph();

const VaultGraph = () => {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const edgeRefs = useRef([]);
  const angleRef = useRef(0.6);
  const activeRef = useRef(null);

  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const active = hovered ?? selected;
  const activeNode = VAULT_NODES.find((node) => node.id === active);

  const inView = useInView(containerRef);
  const reduceMotion = useReducedMotion();

  // Positions and depth fading are written straight to the DOM so the spin
  // does not re-render React on every frame.
  const draw = useCallback(() => {
    const cos = Math.cos(angleRef.current);
    const sin = Math.sin(angleRef.current);
    const lit = activeRef.current;

    const points = GRAPH.nodes.map((node) => {
      const x = node.x * cos + node.z * sin;
      const turned = node.z * cos - node.x * sin;
      const y = node.y * COS_TILT - turned * SIN_TILT;
      const z = node.y * SIN_TILT + turned * COS_TILT;
      const scale = FOCAL / (FOCAL - z);
      return {
        x: WIDTH / 2 + x * RADIUS * scale,
        y: HEIGHT / 2 + y * RADIUS * scale,
        scale,
        depth: Math.min(1, Math.max(0, (z + 1.2) / 2.4)),
      };
    });

    GRAPH.nodes.forEach((node, i) => {
      const el = nodeRefs.current[i];
      if (!el) return;
      const point = points[i];
      const base = node.isHub ? 0.55 + 0.45 * point.depth : 0.3 + 0.7 * point.depth;
      const dim = lit && node.hub !== lit ? 0.3 : 1;
      el.setAttribute(
        "transform",
        `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)}) scale(${point.scale.toFixed(3)})`
      );
      el.style.opacity = (base * dim).toFixed(2);
    });

    GRAPH.edges.forEach((edge, i) => {
      const el = edgeRefs.current[i];
      if (!el) return;
      const from = points[edge.from];
      const to = points[edge.to];
      const base = 0.15 + 0.3 * ((from.depth + to.depth) / 2);
      const opacity = lit ? (edge.hubs.includes(lit) ? 0.9 : base * 0.4) : base;
      el.setAttribute("x1", from.x.toFixed(1));
      el.setAttribute("y1", from.y.toFixed(1));
      el.setAttribute("x2", to.x.toFixed(1));
      el.setAttribute("y2", to.y.toFixed(1));
      el.style.opacity = opacity.toFixed(2);
    });
  }, []);

  useEffect(() => {
    activeRef.current = active;
    draw();
  }, [active, draw]);

  useAnimationFrame((_, delta) => {
    if (!inView || reduceMotion || hovered) return;
    angleRef.current += Math.min(delta, 50) * SPEED;
    draw();
  });

  const hoverProps = (id) => ({
    onPointerEnter: () => setHovered(id),
    onPointerLeave: () => setHovered(null),
  });

  return (
    <div ref={containerRef}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mx-auto max-h-[340px] w-full"
        role="img"
        aria-label="Rotating graph of the Second Brain vault, with one hub for each folder"
        onClick={() => setSelected(null)}
      >
        {GRAPH.edges.map((edge, i) => (
          <line
            key={i}
            ref={(el) => {
              edgeRefs.current[i] = el;
            }}
            strokeWidth="1"
            className={active && edge.hubs.includes(active) ? "stroke-emerald-400" : "stroke-neutral-500"}
          />
        ))}

        {GRAPH.nodes.map(
          (node, i) =>
            !node.isHub && (
              <circle
                key={i}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                r="2.6"
                className={node.hub === active ? "fill-emerald-400" : "fill-neutral-500"}
              />
            )
        )}

        {GRAPH.nodes.map(
          (node, i) =>
            node.isHub && (
              <g
                key={node.hub}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="cursor-pointer"
                {...hoverProps(node.hub)}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelected(node.hub);
                }}
              >
                <circle r="20" fill="transparent" />
                {node.hub === active && (
                  <circle r="13" className="fill-emerald-400/10 stroke-emerald-400/60" />
                )}
                <circle
                  r={i === 0 ? 8 : 6}
                  className={node.hub === active ? "fill-emerald-400" : "fill-neutral-200"}
                />
                <text
                  y="-14"
                  textAnchor="middle"
                  className={`select-none font-mono text-[11px] ${
                    node.hub === active ? "fill-emerald-400" : "fill-neutral-300"
                  }`}
                >
                  {node.hub}
                </text>
              </g>
            )
        )}
      </svg>

      <div className="px-5 pb-5">
        <div className="flex flex-wrap gap-1.5">
          {VAULT_NODES.map((node) => (
            <button
              key={node.id}
              type="button"
              aria-pressed={selected === node.id}
              {...hoverProps(node.id)}
              onFocus={() => setSelected(node.id)}
              onClick={() => setSelected(node.id)}
              className={`rounded-md border px-2.5 py-1 font-mono text-xs transition-colors ${
                node.id === active
                  ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-400"
                  : "border-white/10 bg-white/5 text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {node.id}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-3 min-h-[2.75rem] text-sm leading-snug text-neutral-400">
          {activeNode ? (
            <>
              <span className="font-mono text-emerald-400">{activeNode.id}/</span>{" "}
              {activeNode.description}
            </>
          ) : (
            "Hover or tap a node to see what lives there."
          )}
        </p>
      </div>
    </div>
  );
};

export default VaultGraph;
