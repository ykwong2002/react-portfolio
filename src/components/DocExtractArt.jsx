// Illustration for the capstone card. Everything on the invoice is made up.
const FIELDS = [
  { path: "M176 86 C 250 86, 250 96, 312 96", end: 96 },
  { path: "M130 114 C 240 114, 250 118, 312 118", end: 118 },
  { path: "M206 230 C 264 230, 264 140, 312 140", end: 140 },
];

const RECORD = [
  { key: "vendor", value: '"Acme Tooling"' },
  { key: "date", value: '"2026-09-14"' },
  { key: "total", value: "1240.50" },
  { key: "currency", value: '"SGD"' },
];

const DocExtractArt = () => {
  return (
    <svg
      viewBox="0 0 560 300"
      className="w-full"
      role="img"
      aria-label="Fields on a scanned invoice being extracted into a validated structured record"
    >
      {/* Scanned invoice */}
      <g transform="translate(36 28)">
        <rect width="180" height="244" rx="8" className="fill-neutral-100" />
        <text x="16" y="32" className="fill-neutral-900 font-sans text-[13px] font-bold">
          INVOICE
        </text>
        <rect x="118" y="20" width="46" height="14" rx="3" className="fill-neutral-300" />

        <rect x="10" y="48" width="130" height="20" rx="4" className="fill-emerald-400/25 stroke-emerald-500" strokeDasharray="4 3" />
        <text x="16" y="62" className="fill-neutral-800 font-sans text-[10px]">
          Acme Tooling Pte Ltd
        </text>

        <rect x="10" y="76" width="84" height="20" rx="4" className="fill-emerald-400/25 stroke-emerald-500" strokeDasharray="4 3" />
        <text x="16" y="90" className="fill-neutral-800 font-sans text-[10px]">
          14 Sep 2026
        </text>

        {[116, 132, 148, 164].map((y) => (
          <g key={y}>
            <rect x="16" y={y} width="92" height="5" rx="2.5" className="fill-neutral-300" />
            <rect x="130" y={y} width="34" height="5" rx="2.5" className="fill-neutral-300" />
          </g>
        ))}
        <rect x="16" y="180" width="148" height="1" className="fill-neutral-300" />

        <rect x="10" y="192" width="160" height="20" rx="4" className="fill-emerald-400/25 stroke-emerald-500" strokeDasharray="4 3" />
        <text x="16" y="206" className="fill-neutral-900 font-sans text-[10px] font-bold">
          TOTAL
        </text>
        <text x="164" y="206" textAnchor="end" className="fill-neutral-900 font-sans text-[10px] font-bold">
          SGD 1,240.50
        </text>

        <rect y="12" width="180" height="2" className="fill-emerald-400 motion-safe:animate-scan" />
      </g>
      <text x="126" y="291" textAnchor="middle" className="fill-neutral-500 font-mono text-[10px]">
        scan / PDF
      </text>

      {/* Extraction */}
      <text x="262" y="68" textAnchor="middle" className="fill-neutral-400 font-mono text-[10px]">
        VLM extract
      </text>
      {FIELDS.map((field) => (
        <g key={field.end}>
          <path
            d={field.path}
            fill="none"
            strokeWidth="1.5"
            strokeDasharray="6 3"
            className="stroke-emerald-400 motion-safe:animate-dash"
          />
          <circle cx="314" cy={field.end} r="3" className="fill-emerald-400" />
        </g>
      ))}

      {/* Structured record */}
      <rect x="318" y="48" width="214" height="134" rx="10" className="fill-neutral-950 stroke-white/15" />
      <text x="334" y="70" className="fill-neutral-500 font-mono text-[10px]">
        record.json
      </text>
      {RECORD.map((line, i) => (
        <text key={line.key} x="334" y={100 + i * 22} className="font-mono text-[11px]">
          <tspan className="fill-neutral-400">{line.key}: </tspan>
          <tspan className="fill-emerald-300">{line.value}</tspan>
        </text>
      ))}

      <rect x="318" y="194" width="118" height="26" rx="13" className="fill-emerald-400/10 stroke-emerald-400/40" />
      <text x="377" y="211" textAnchor="middle" className="fill-emerald-400 font-mono text-[10.5px]">
        ✓ schema valid
      </text>
      <rect x="318" y="228" width="170" height="26" rx="13" className="fill-white/5 stroke-white/15" />
      <text x="403" y="245" textAnchor="middle" className="fill-neutral-300 font-mono text-[10.5px]">
        → routed for approval
      </text>
    </svg>
  );
};

export default DocExtractArt;
