import { PNG } from "https://taisukef.github.io/PNG/PNG.js";
import { PANCAKE_COLORS } from "../PANCAKE_COLORS.js";

const getIndex = (palette, r, g, b) => {
  for (let i = 0; i < palette.length; i++) {
    const p = palette[i];
    if (p[0] == r && p[1] == g && p[2] == b) return i;
  }
  let min = 255 * 3;
  let res = -1;
  for (let i = 0; i < palette.length; i++) {
    const p = palette[i];
    const d = Math.abs(p[0] - r) + Math.abs(p[1] - g) + Math.abs(p[2] - b);
    if (d < min) {
      min = d;
      res = i;
    }
  }
  console.log(min);
  return res;
};

export const png2txt = (pngbin) => {
  const img = PNG.decode(pngbin);
  //console.log(img);

  const ss = [];
  for (let y = 0; y < 8; y++) {
    const row = [];
    for (let x = 0; x < 8; x++) {
      const idx = (x * 4 + (y * 4) * img.width) * 4;
      const r = img.data[idx];
      const g = img.data[idx + 1];
      const b = img.data[idx + 2];
      const plt = getIndex(PANCAKE_COLORS, r, g, b);
      //console.log(plt, idx, r, g, b);
      row.push(plt.toString(16));
    }
    ss.push(row.join(""));
  }
  //console.log(ss.join("\n"));
  return ss.join("\n");
};
