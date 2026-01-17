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
