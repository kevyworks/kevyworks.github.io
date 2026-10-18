import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const SITE = "https://kevyworks.com";
const DIST = "dist";
const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const today = new Date().toISOString().slice(0, 10);
const urls = walk(DIST)
  .filter((p) => p.endsWith("index.html"))
  .map((p) => "/" + relative(DIST, p).replace(/\\/g, "/").replace(/index\.html$/, ""))
  .sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u === "/" ? "" : u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(DIST, "sitemap.xml"), xml);
console.log(`sitemap.xml: ${urls.length} URLs`);