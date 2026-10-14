export default function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl sg">{title}</h2>
      {text && <p className="mt-4 leading-7 text-zinc-400">{text}</p>}
    </div>
  );
}
