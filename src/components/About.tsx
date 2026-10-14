import { Check, Mail, MapPin, Award } from "lucide-react";
import { awards, skills } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 bg-white/[.018] py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="About" title="Engineering with a product mindset." text="I enjoy the space between design and engineering: turning a visual idea into a maintainable interface, connecting it to useful systems, then making the whole thing reliable in production." />
          <div className="mt-8 space-y-3 text-sm text-zinc-400">
            <p className="flex gap-3"><MapPin size={17} className="text-indigo-300" /> Philippines · Remote / Contract</p>
            <p className="flex gap-3"><Mail size={17} className="text-indigo-300" /> kevyworks@gmail.com</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold">Core toolkit</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map(skill => <span key={skill} className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-2 text-xs text-zinc-300">{skill}</span>)}
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="flex items-center gap-2 font-semibold"><Award size={17} className="text-indigo-300" /> Recognition & development</div>
            <div className="mt-5 space-y-3">
              {awards.map(a => <div key={a} className="flex gap-3 text-sm text-zinc-400"><Check size={16} className="mt-0.5 shrink-0 text-emerald-400" />{a}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
