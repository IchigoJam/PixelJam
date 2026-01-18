# PixelJam.js

PixelJam.js は、コンパクトなJS用ミニゲームライブラリです

## sample

```html
<script type="module">
import { pj } from "https://js.sabae.cc/pj.js";

for (let i = 0;; i++) {
  pj.cls(i % 16);
  pj.print(i, 10, 10);
  await pj.wait(10);
}
</script>
```

## reference

### functions

- cls(color = 0) // 画面クリア
- pset(x, y, color = 1) // 点描画
- rectfill(x0, y0, w, h, color = 1) // 矩形描画
- line(x0, y0, x1, y1, color = 1) // 線描画
- colorrcfill(cx, cy, r, color = 1) // 円描画
- print(s, x, y, color = 1) // 文字描画
- stamp(hex, x, y, w = 8, transparentColor = 0) // スタンプ描画 0-Fで色指定
- btn(n = 4) // ボタンが押下チェック 0..6 = ←→↑↓ space Z X

### color number

- 0:黒、1:白、2:赤、3:ピンク、4:橙、5:黄、6:薄茶、7:茶、8:薄緑、9:緑、10:薄青、11:青、12:紺、13:青紫、14:赤紫、15:灰 (from CC BY [PanCake](http://pancake.shizentai.jp/))
