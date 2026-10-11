import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import logo from "../assets/logo.png";
import resume from "../assets/Wong_Yeow_Kang_Resume.pdf";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" aria-label="Back to top" className="flex items-center">
          <img className="w-12" src={logo} alt="WYK logo" />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-neutral-400 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-emerald-400/40 px-3 py-1.5 font-mono text-sm text-emerald-400 transition-colors hover:bg-emerald-400/10"
          >
            resume <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-lg border border-white/10 p-2 text-lg text-neutral-300 md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 px-4 py-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-mono text-sm text-neutral-300 hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
