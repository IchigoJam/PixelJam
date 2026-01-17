import { png2txt } from "./png2txt.js";

const fn = Deno.args[0];
const bin = await Deno.readFile(fn);
console.log(png2txt(bin));
