import { ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 overflow-hidden sm:pt-40">
      <div className="grid-bg absolute inset-x-0 top-0 h-[720px]" />
      <div className="absolute -translate-x-1/2 rounded-full left-1/2 top-32 h-72 w-72 bg-indigo-500/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 pb-24 lg:grid-cols-[1.15fr_.85fr] lg:pb-32">
        <div>
          <div className="flex items-center gap-2 mb-6 eyebrow">
            <Sparkles size={14} /> Full-Stack Web Developer
          </div>
          <h1 className="sg max-w-5xl text-5xl font-medium leading-[.98] tracking-[-.045em] sm:text-7xl lg:text-[5.6rem] ">
            I build digital products that feel <span className="font-bold text-zinc-500">simple, fast</span> and intentional.
          </h1>
          <p className="max-w-2xl text-base leading-7 mt-7 text-zinc-400 sm:text-lg">
            10+ years of building production web applications — from Figma concepts and responsive interfaces to APIs,
            cloud infrastructure, deployment and ongoing maintenance.
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            <a href="#work" className="btn-primary">Explore my work <ArrowDown size={16} /></a>
            <a href="mailto:kevyworks@gmail.com" className="btn-ghost">Start a project <ArrowUpRight size={16} /></a>
          </div>

          <div className="flex flex-wrap mt-10 text-xs font-medium gap-x-6 gap-y-3 text-zinc-500">
            <span>React / TypeScript</span><span>PHP / Laravel</span><span>REST APIs</span><span>AWS / Vercel</span>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-indigo-500/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-5 shadow-glow">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-indigo-300" />
                <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">developer.profile</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="py-8">
              <p className="font-mono text-xs text-indigo-300">const developer = {"{"}</p>
              <div className="pt-4 pl-4 space-y-4 font-mono text-xs leading-6 text-zinc-400">
                <p><span className="text-violet-300">focus:</span> "Product Engineering",</p>
                <p><span className="text-violet-300">frontend:</span> ["React", "Gatsby", "Tailwind"],</p>
                <p><span className="text-violet-300">backend:</span> ["Laravel", "Node.js", "APIs"],</p>
                <p><span className="text-violet-300">cloud:</span> ["AWS", "DigitalOcean", "Vercel"],</p>
                <p><span className="text-violet-300">approach:</span> "End-to-end ownership"</p>
              </div>
              <p className="pt-4 font-mono text-xs text-indigo-300">{"}"}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 sg">
              <Stat value="10+" label="years" />
              <Stat value="E2E" label="delivery" />
              <Stat value="∞" label="curiosity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl bg-white/[.035] p-3"><div className="text-lg font-bold">{value}</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">{label}</div></div>;
}
