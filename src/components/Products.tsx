import { ExternalLink, Layers3, Sparkles, ShoppingBag, ArrowUpRight } from "lucide-react";
import { products } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Products() {
  return (
    <section id="products" className="border-y border-white/5 bg-white/[.018] py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Product space · Kevyworks" title="A home for things I design, build and ship." text="A dedicated product shelf for templates, UI experiments and reusable digital products — separate from client work." />

        <div className="grid gap-5 mt-12 lg:grid-cols-2">
          {products.map((product, i) => (
            <a key={product.name} href={product.productLink || product.href} target="_blank" rel="noreferrer"
              className={`group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 p-7 transition hover:-translate-y-1 hover:border-white/20`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(3, 7, 18, 1)), url(${product.image})`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            >
              <div className="relative flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <span className="inline-flex border border-white/10 items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                    <Layers3 size={13} /> {product.type}
                  </span>
                  {product.href &&
                    <a href={product.href} rel="noreferrer" target="_blank" title="Preview/Details" className="grid w-10 h-10 transition rounded-full place-items-center bg-white/5 group-hover:bg-white group-hover:text-zinc-950">
                      <Sparkles size={17} className="transition text-zinc-500 group-hover:text-black" />
                    </a>
                  }
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-zinc-500">Product 0{i + 1}</p>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight sg">{product.name}</h3>
                  <p className="max-w-md mt-3 text-sm leading-6 text-zinc-400">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {product.tags.map(tag => <span key={tag} className="rounded-lg border border-white/10 bg-black/10 px-2.5 py-1 text-[11px] text-zinc-400">{tag}</span>)}
                  </div>
                  {product.links && 
                    <div className="flex gap-2">
                    { product.links.map((link, li) => (
                      <a key={li} href={link.href} rel="noreferrer" target="_blank" className="inline-flex items-center gap-2 mt-5 text-xs font-normal text-indigo-300">{link.label} <ArrowUpRight size={15} /></a>
                    ))}
                    </div>
                  }
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="py-3 mt-10 overflow-hidden border rounded-2xl border-white/10 bg-black/20">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[.18em] text-zinc-600">
            {["React", "Tailwind", "Figma to Code", "Laravel", "WordPress", "API Integration", "Responsive UI", "Performance", "React", "Tailwind", "Figma to Code", "Laravel", "WordPress", "API Integration", "Responsive UI", "Performance"].map((x, i) => <span key={i}>✦ {x}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
