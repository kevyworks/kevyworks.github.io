import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Work", "#work"],
  ["Products", "#products"],
  ["Experience", "#experience"],
  ["About", "#about"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pt-4 container-x">
        <nav className="flex items-center justify-between px-4 py-3 shadow-2xl glass rounded-2xl shadow-black/20">
          <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
	          <img src="assets/logo.png" className="grid object-contain w-8 h-8 p-1 bg-white rounded-full place-items-center" />
            <span className="hidden text-sm font-semibold sg sm:block">Kevinralph Tenorio</span>
          </a>

          <div className="items-center hidden gap-7 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-sm transition text-zinc-400 hover:text-white">{label}</a>
            ))}
            <a href="mailto:kevyworks@gmail.com" className="btn-ghost py-2.5">
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="p-2 border rounded-xl border-white/10 md:hidden"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {open && (
          <div className="p-3 mt-2 glass rounded-2xl md:hidden">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm rounded-xl text-zinc-300 hover:bg-white/5 hover:text-white">
                {label}
              </a>
            ))}
            <a href="mailto:kevyworks@gmail.com" className="w-full mt-2 btn-primary">Let’s talk</a>
          </div>
        )}
      </div>
    </header>
  );
}
