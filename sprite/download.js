import { fetchOrLoad, HTMLParser, CSV, nextTag, prevTag, table2json, table2csv, sleep } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";

const url = "http://pancake.shizentai.jp/";
const html = await fetchOrLoad(url);

const dom = HTMLParser.parse(html);
const imgs = dom.querySelectorAll("div#sprite li img");
console.log(imgs, imgs.length);

const base = "http://pancake.shizentai.jp/";

const list = [];
let idx = 0;
for (const img of imgs) {
  const path = img.getAttribute("src");
  const urlimg = new URL(path, base).toString();
  const bin = await (await fetch(urlimg)).bytes();
  const fn = (idx).toString(16).padStart(2, "0");// + ".png";
  const name = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
  await Deno.writeFile("img/" + name + ".png", bin);
  console.log(name, fn);
  list.push({ no: idx, no_hex: fn, fn: name + ".png" });
  idx++;
}
await Deno.writeTextFile("sprites1.csv", CSV.stringify(list));
