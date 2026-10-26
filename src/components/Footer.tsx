import { ArrowUpRight, Github, Linkedin, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container-x py-14">
      <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-7 sm:p-10">
        <p className="eyebrow">Have a project in mind?</p>
        <div className="flex flex-col justify-between gap-8 mt-4 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sg sm:text-5xl">Let’s turn the next idea into something real.</h2>
            <a href="mailto:kevyworks@gmail.com" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-indigo-300">kevyworks@gmail.com <ArrowUpRight size={15} /></a>
          </div>
          <div className="flex gap-2">
            <a aria-label="LinkedIn" className="p-3 btn-ghost" href="https://linkedin.com/in/kevyworks" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
            <a aria-label="GitHub" className="p-3 btn-ghost" href="https://github.com/kevyworks" target="_blank" rel="noreferrer"><Github size={17} /></a>
            <a aria-label="Store" className="p-3 btn-ghost" href="https://www.teepublic.com/user/kevyworks" target="_blank" rel="noreferrer"><ShoppingBag size={17} /></a>
            <a className="btn-primary" href="https://kevyworks.com" target="_blank" rel="noreferrer">Kevyworks <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 text-xs pt-7 text-zinc-600 sm:flex-row">
        <span>© {new Date().getFullYear()} Kevinralph Tenorio / Kevyworks</span>
        <span>Built with React + Tailwind CSS</span>
      </div>
    </footer>
  );
}
