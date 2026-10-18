import { Helmet } from "react-helmet-async";

const SITE = "https://kevyworks.com"      // replace with your CNAME domain
const DEFAULT_OG = `${SITE}/og-def.png`;  // 1200×630

type Props = {
  title: string; // aim for 60 characters or fewer
  description: string; // aim for 155 characters or fewer
  path?: string; // "/" for the home page
  image?: string;
  noindex?: boolean;
  type?: "website" | "article" | "product";
  jsonLd?: object | object[];
};

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
  noindex = false,
  type = "website",
  jsonLd,
}: Props) {
  const url = `${SITE}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Kevyworks" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export const homeLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kevinralph Tenorio",
    jobTitle: "Full-Stack Web Developer",
    url: SITE,
    sameAs: ["https://github.com/kevyworks", "https://www.linkedin.com/in/kevyworks"],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kevyworks",
    url: SITE,
    description: "Figma-to-website conversion and web templates built with React and Tailwind.",
    areaServed: ["PH", "Worldwide"],
    serviceType: ["Figma to website conversion", "Web template development"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kevyworks",
    description: "React Tailwind Template, Vite React portfolio template, Landing Page Template Tailwind",
    areaServed: ["PH", "Worldwide"],
    serviceType: ["Landing Pages", "React Templates", "Customizable Website Templates"]
  }
];