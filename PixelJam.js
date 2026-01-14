
// 3x5 font (printable ASCII 0x20..0x7E)
// 1行 = 3bit (左がMSB)、5行ぶんを [r0,r1,r2,r3,r4] で表現
// 例) "A" = [0b010,0b101,0b111,0b101,0b101] => [2,5,7,5,5]
export const FONT3X5 = [
  /* 0x20 ' ' */ [0,0,0,0,0],
  /* 0x21 '!' */ [2,2,2,0,2],
  /* 0x22 '"' */ [5,5,0,0,0],
  /* 0x23 '#' */ [5,7,5,7,5],
  /* 0x24 '$' */ [2,7,6,3,2],
  /* 0x25 '%' */ [5,1,2,4,5],
  /* 0x26 '&' */ [2,5,2,5,3],
  /* 0x27 ''' */ [2,2,0,0,0],
  /* 0x28 '(' */ [1,2,2,2,1],
  /* 0x29 ')' */ [4,2,2,2,4],
  /* 0x2A '*' */ [0,5,2,5,0],
  /* 0x2B '+' */ [0,2,7,2,0],
  /* 0x2C ',' */ [0,0,0,2,4],
  /* 0x2D '-' */ [0,0,7,0,0],
  /* 0x2E '.' */ [0,0,0,0,2],
  /* 0x2F '/' */ [1,1,2,4,4],

  /* 0x30 '0' */ [7,5,5,5,7],
  /* 0x31 '1' */ [2,6,2,2,7],
  /* 0x32 '2' */ [7,1,7,4,7],
  /* 0x33 '3' */ [7,1,7,1,7],
  /* 0x34 '4' */ [5,5,7,1,1],
  /* 0x35 '5' */ [7,4,7,1,7],
  /* 0x36 '6' */ [7,4,7,5,7],
  /* 0x37 '7' */ [7,1,1,1,1],
  /* 0x38 '8' */ [7,5,7,5,7],
  /* 0x39 '9' */ [7,5,7,1,7],
  /* 0x3A ':' */ [0,2,0,2,0],
  /* 0x3B ';' */ [0,2,0,2,4],
  /* 0x3C '<' */ [1,2,4,2,1],
  /* 0x3D '=' */ [0,7,0,7,0],
  /* 0x3E '>' */ [4,2,1,2,4],
  /* 0x3F '?' */ [7,1,2,0,2],

  /* 0x40 '@' */ [2,5,7,4,3],
  /* 0x41 'A' */ [2,5,7,5,5],
  /* 0x42 'B' */ [6,5,6,5,6],
  /* 0x43 'C' */ [3,4,4,4,3],
  /* 0x44 'D' */ [6,5,5,5,6],
  /* 0x45 'E' */ [7,4,6,4,7],
  /* 0x46 'F' */ [7,4,6,4,4],
  /* 0x47 'G' */ [3,4,5,5,3],
  /* 0x48 'H' */ [5,5,7,5,5],
  /* 0x49 'I' */ [7,2,2,2,7],
  /* 0x4A 'J' */ [1,1,1,5,2],
  /* 0x4B 'K' */ [5,6,4,6,5],
  /* 0x4C 'L' */ [4,4,4,4,7],
  /* 0x4D 'M' */ [5,7,7,5,5],
  /* 0x4E 'N' */ [6,5,5,5,5],
  /* 0x4F 'O' */ [2,5,5,5,2],

  /* 0x50 'P' */ [6,5,6,4,4],
  /* 0x51 'Q' */ [2,5,5,3,1],
  /* 0x52 'R' */ [6,5,6,5,5],
  /* 0x53 'S' */ [3,4,2,1,6],
  /* 0x54 'T' */ [7,2,2,2,2],
  /* 0x55 'U' */ [5,5,5,5,7],
  /* 0x56 'V' */ [5,5,5,2,2],
  /* 0x57 'W' */ [5,5,7,7,5],
  /* 0x58 'X' */ [5,5,2,5,5],
  /* 0x59 'Y' */ [5,5,2,2,2],
  /* 0x5A 'Z' */ [7,1,2,4,7],
  /* 0x5B '[' */ [3,2,2,2,3],
  /* 0x5C '\' */ [4,4,2,1,1],
  /* 0x5D ']' */ [6,2,2,2,6],
  /* 0x5E '^' */ [2,5,0,0,0],
  /* 0x5F '_' */ [0,0,0,0,7],

  /* 0x60 '`' */ [4,2,0,0,0],
  /* 0x61 'a' */ [0,3,1,3,3],
  /* 0x62 'b' */ [4,6,5,5,6],
  /* 0x63 'c' */ [0,3,4,4,3],
  /* 0x64 'd' */ [1,3,5,5,3],
  /* 0x65 'e' */ [0,2,5,6,3],
  /* 0x66 'f' */ [1,2,7,2,2],
  /* 0x67 'g' */ [0,3,5,3,1],
  /* 0x68 'h' */ [4,6,5,5,5],
  /* 0x69 'i' */ [2,0,2,2,7],
  /* 0x6A 'j' */ [1,0,1,5,2],
  /* 0x6B 'k' */ [4,5,6,6,5],
  /* 0x6C 'l' */ [6,2,2,2,7],
  /* 0x6D 'm' */ [0,6,7,5,5],
  /* 0x6E 'n' */ [0,6,5,5,5],
  /* 0x6F 'o' */ [0,2,5,5,2],

  /* 0x70 'p' */ [0,6,5,6,4],
  /* 0x71 'q' */ [0,3,5,3,1],
  /* 0x72 'r' */ [0,3,4,4,4],
  /* 0x73 's' */ [0,3,6,3,6],
  /* 0x74 't' */ [2,7,2,2,1],
  /* 0x75 'u' */ [0,5,5,5,3],
  /* 0x76 'v' */ [0,5,5,2,2],
  /* 0x77 'w' */ [0,5,5,7,5],
  /* 0x78 'x' */ [0,5,2,5,0],
  /* 0x79 'y' */ [0,5,5,3,1],
  /* 0x7A 'z' */ [0,7,1,2,7],
  /* 0x7B '{' */ [1,2,6,2,1],
  /* 0x7C '|' */ [2,2,2,2,2],
  /* 0x7D '}' */ [4,2,3,2,4],
  /* 0x7E '~' */ [0,3,6,0,0],
];

// 便利関数
export function glyph3x5(ch) {
  const code = ch.charCodeAt(0);
  if (code < 0x20 || code > 0x7e) return FONT3X5[0]; // space
  return FONT3X5[code - 0x20];
}

/* PICO-8風ミニエンジン(だいたい100行) */
const W = 128;
const H = 128;
const S = 4;
const c = document.getElementById("c");
c.width = W * S;
c.height = H * S;
const g = c.getContext("2d");
g.imageSmoothingEnabled = false;
const pal = ["#000000","#1D2B53","#7E2553","#008751","#AB5236","#5F574F","#C2C3C7","#FFF1E8",
           "#FF004D","#FFA300","#FFEC27","#00E436","#29ADFF","#83769C","#FF77A8","#FFCCAA"];
const img = g.createImageData(W,H);
const pix = img.data;
const keys = Object.create(null);
let t0 = 0;
let frame = 0;
addEventListener("keydown", e => keys[e.code] = 1);
addEventListener("keyup", e => keys[e.code] = 0);

export function cls(ci=0){ const [r,g,b]=hex(pal[ci&15]); for(let i=0;i<pix.length;i+=4){pix[i]=r;pix[i+1]=g;pix[i+2]=b;pix[i+3]=255;} }
export function pset(x,y,ci=7){ x|=0;y|=0; if(x<0||y<0||x>=W||y>=H) return; const i=(y*W+x)*4; const [r,g,b]=hex(pal[ci&15]); pix[i]=r;pix[i+1]=g;pix[i+2]=b;pix[i+3]=255; }
export function rectfill(x0,y0,x1,y1,ci=7){ x0|=0;y0|=0;x1|=0;y1|=0; if(x0>x1)[x0,x1]=[x1,x0]; if(y0>y1)[y0,y1]=[y1,y0];
  for(let y=y0;y<=y1;y++) for(let x=x0;x<=x1;x++) pset(x,y,ci);
}
export function line(x0,y0,x1,y1,ci=7){ x0|=0;y0|=0;x1|=0;y1|=0; let dx=Math.abs(x1-x0),sx=x0<x1?1:-1, dy=-Math.abs(y1-y0),sy=y0<y1?1:-1, err=dx+dy;
  for(;;){ pset(x0,y0,ci); if(x0===x1&&y0===y1) break; let e2=2*err; if(e2>=dy){err+=dy;x0+=sx} if(e2<=dx){err+=dx;y0+=sy} }
}
export function circfill(cx,cy,r,ci=7){ cx|=0;cy|=0;r|=0; for(let y=-r;y<=r;y++) for(let x=-r;x<=r;x++) if(x*x+y*y<=r*r) pset(cx+x,cy+y,ci); }
export function print(s,x,y,ci = 7) {
  x |= 0;
  y |= 0;
  s = new String(s).toUpperCase();
  for (const ch of s) {
    const rows = glyph3x5(ch) || f[" "];
    for (let yy = 0; yy < 5; yy++) {
      const bits = rows[yy];
      for (let xx = 0; xx < 3; xx++) {
        if (bits & (1 << (2 - xx))) pset(x + xx, y + yy, ci);
      }
    }
    x += 4;
  }
}
export function btn(i){ // 0..5 = ←→↑↓ Z X
  return !!([keys.ArrowLeft,keys.ArrowRight,keys.ArrowUp,keys.ArrowDown,keys.KeyZ,keys.KeyX][i]);
}
export function hex(h){ const n=parseInt(h.slice(1),16); return [(n>>16)&255,(n>>8)&255,n&255]; }
export function flip(){ g.putImageData(img,0,0); g.drawImage(c,0,0,W,H,0,0,W*S,H*S); }

let tic = null;
export const start = (_tic) => {
  tic = _tic;
}

function loop(t) {
  const dt = (t - t0) / 1000;
  t0 = t;
  if (tic) tic(dt);
  flip(); 
  frame++;
  requestAnimationFrame(loop);
};
cls();
requestAnimationFrame(loop);

