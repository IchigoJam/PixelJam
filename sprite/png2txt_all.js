import { png2txt } from "./png2txt.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const list = [];
const data = await CSV.fetchJSON("./sprites1.csv");
for (const item of data) {
  const fn = "img/" + item.fn;
  const transparent = item.fn[item.fn.lastIndexOf(".") - 1];
  const bin = await Deno.readFile(fn);
  const txt = png2txt(bin);
  const name = item.fn.substring(0, item.fn.lastIndexOf(".", item.fn.length - 5));
  list.push({ no: item.no, no_hex: item.no_hex, name, transparent, txt });
  //console.log(txt);
}
console.log(list);
await Deno.writeTextFile("./sprites.csv", CSV.stringify(list));

