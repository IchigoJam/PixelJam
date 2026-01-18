import { font3x5 } from "./font3x5.js";
import { PANCAKE_COLORS } from "./PANCAKE_COLORS.js";

const c = document.createElement("canvas");
document.body.appendChild(c);
document.body.style = "margin: 0; text-align: center; background-color: black; overflow: hidden; user-select: none;";
c.style = "width: 100vmin; height: 100vmin; display; image-rendering: pixelated;"

const src = document.createElement("div");
src.textContent = "ℹ️";
src.style = "position: absolute; font-size: 3vmin; bottom: 3px; right: 5px;";
document.body.appendChild(src);
src.onclick = () => open("https://github.com/IchigoJam/PixelJam/", "_blank");

const W = 128;
const H = 128;
c.width = W;
c.height = H;
const g = c.getContext("2d");
g.imageSmoothingEnabled = false;
const img = g.createImageData(W, H);
const pix = img.data;
const pal = PANCAKE_COLORS;

const keys = Object.create(null);
let t0 = 0;
let frame = 0;
addEventListener("keydown", e => keys[e.code] = 1);
addEventListener("keyup", e => keys[e.code] = 0);
addEventListener("touchstart", e => {
  keys["Space"] = 1;
  e.preventDefault();
}, { passive: false });
addEventListener("touchend", e => {
  keys["Space"] = 0;
});
addEventListener("pointerdown", (e) => {
  keys["Space"] = 1;
  e.preventDefault();
}, { passive: false });
addEventListener("pointerup", (e) => {
  keys["Space"] = 0;
});

addEventListener("contextmenu", (e) => e.preventDefault());

export function cls(ci = 0) {
  const [r, g, b] = pal[ci & 15];
  for (let i = 0; i < pix.length; i+=4) {
    pix[i] = r;
    pix[i + 1] = g;
    pix[i + 2] = b;
    pix[i + 3] = 255;
  }
}
export function pset(x, y, ci = 7) {
  x |= 0;
  y |= 0;
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = (y * W + x) * 4;
  const [r, g, b] = pal[ci & 15];
  pix[i] = r;
  pix[i + 1] = g;
  pix[i + 2] = b;
  pix[i + 3] = 255;
}
export function rectfill(x0, y0, w, h, ci = 7) {
  x0 |= 0;
  y0 |= 0;
  w |= 0;
  h |= 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      pset(x0 + x, y0 + y, ci);
    }
  }
}
export function line(x0, y0, x1, y1, ci = 7) {
  x0 |= 0;
  y0 |= 0;
  x1 |= 0;
  y1 |= 0;
  const dx = Math.abs(x1 - x0)
  const sx = x0 < x1 ? 1 : -1;
  const dy = -Math.abs(y1 - y0);
  const sy = y0 < y1 ? 1 : -1;
  let err = dx + dy;
  for (;;) {
    pset(x0, y0, ci);
    if (x0 === x1 && y0 === y1) break;
    let e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x0 += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y0 += sy
    }
  }
}
export function circfill(cx, cy, r, ci = 7) {
  cx |= 0;
  cy |= 0;
  r |= 0;
  for (let y = -r; y <= r; y++) {
    for (let x = -r; x <= r; x++) {
      if (x * x + y * y <= r * r) pset(cx + x, cy + y, ci);
    }
  }
}
export function print(s, x, y, ci = 7) {
  x |= 0;
  y |= 0;
  s = new String(s).toUpperCase();
  for (const ch of s) {
    const rows = font3x5(ch);
    for (let yy = 0; yy < 5; yy++) {
      const bits = rows[yy];
      for (let xx = 0; xx < 3; xx++) {
        if (bits & (1 << (2 - xx))) pset(x + xx, y + yy, ci);
      }
    }
    x += 4;
  }
}
export function btn(i = 4) { // 0..5 = ←→↑↓ space Z X
  const btns = [
    keys.ArrowLeft,
    keys.ArrowRight,
    keys.ArrowUp,
    keys.ArrowDown,
    keys.Space,
    keys.KeyZ,
    keys.KeyX
  ];
  return !!btns[i];
}
function flip() {
  g.putImageData(img, 0, 0);
  g.drawImage(c, 0, 0, W, H);
};

export function stamp(hex, x, y, w = 8, transparentIndex = 0) {
  x |= 0;
  y |= 0;
  w |= 0;
  let i = 0;
  const HEX = "0123456789ABCDEF";
  for (const c of hex) {
    if (HEX.indexOf(c.toUpperCase()) == -1) continue;
    const ci = parseInt(c, 16);
    if (ci != transparentIndex) {
      pset(x + i % w, y + Math.floor(i / w), ci);
    }
    i++;
  }
}

export const spr = stamp;

cls();

export const wait = async (nframe = 1) => {
  flip();
  return new Promise(resolve => {
    setTimeout(resolve, nframe * (1000 / 60));
    /*
    if (nframe == 1) {
      requestAnimationFrame(resolve);
    } else {
      setTimeout(resolve, nframe * (1000 / 60));
    }
    */
  });
};

let tic = null;
export const setLoop = (_tic) => {
  requestAnimationFrame(loop);
  tic = _tic;
};

function loop(t) {
  const dt = (t - t0) / 1000;
  t0 = t;
  if (tic) tic(dt, frame);
  flip(); 
  frame++;
  requestAnimationFrame(loop);
};
