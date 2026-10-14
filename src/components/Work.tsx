import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="py-24 container-x sm:py-32">
      <SectionHeading eyebrow="Selected work" title="Products, platforms & systems." text="A selection of projects that reflect how I approach interfaces, business logic, integrations and real-world delivery." />
      <div className="grid gap-5 mt-12 md:grid-cols-2">
        {projects.map((project, i) => (
          <article key={project.title} className="p-6 transition duration-300 group glass rounded-3xl hover:-translate-y-1 hover:border-white/20">
            <div className="flex items-start justify-between mb-12">
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">{project.category}</span>
              {project.href && <>
                <a href={project.href} target="_blank" rel="noreferrer" className="grid w-10 h-10 transition rounded-full place-items-center bg-white/5 group-hover:bg-white group-hover:text-zinc-950">
                  <ArrowUpRight size={17} />
                </a>
              </>}
            </div>
            <p className="text-xs text-zinc-500">0{i + 1}</p>
            <h3 className="mt-2 text-2xl font-bold sg">{project.title}</h3>
            <p className="max-w-xl mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map(t => <span key={t} className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400">{t}</span>)}
            </div>
            {/* {project.href && <a className="inline-flex mt-6 text-sm font-semibold text-indigo-300 hover:text-indigo-200" href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={14} className="ml-1" /></a>} */}
          </article>
        ))}
      </div>
    </section>
  );
}
