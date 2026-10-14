import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 container-x sm:py-32">
      <SectionHeading eyebrow="Experience" title="A decade of shipping across the stack." text="From early desktop and municipal systems to modern React frontends, Laravel APIs and cloud-hosted products." />
      <div className="divide-y mt-14 divide-white/10 border-y border-white/10">
        {experience.map(item => (
          <article key={item.company} className="grid gap-5 py-8 lg:grid-cols-[190px_1fr]">
            <div className="text-xs font-medium tracking-wider uppercase text-zinc-500">{item.period}</div>
            <div>
              <h3 className="text-xl font-bold sg">{item.role}</h3>
              <p className="mt-1 text-sm text-indigo-300">{item.company} <span className="text-zinc-600">·</span> {item.location}</p>
              <ul className="grid gap-2 mt-5 text-sm leading-6 text-zinc-400">
                {item.bullets.map(b => <li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />{b}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
