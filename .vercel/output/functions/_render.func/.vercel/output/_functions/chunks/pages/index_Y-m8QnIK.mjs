import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_u5EBaFA6.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/martinsazzaroli/Documents/projects/sazzadev/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$ThreeCanvas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThreeCanvas;
  const { width, height, id } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "three-canvas", "three-canvas", { "data-width": width, "data-height": height, "data-id": id, "data-astro-cid-3o7brgki": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<canvas${addAttribute(id, "id")} data-astro-cid-3o7brgki></canvas> ` })}  `;
}, "/Users/martinsazzaroli/Documents/projects/sazzadev/src/components/ThreeCanvas.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-cyrgqtfe": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-cyrgqtfe> <h1 class="text-center" data-astro-cid-cyrgqtfe>ATORUS</h1> ${renderComponent($$result2, "ThreeCanvas", $$ThreeCanvas, { "id": "main-canvas", "data-astro-cid-cyrgqtfe": true })} </main> ` })} `;
}, "/Users/martinsazzaroli/Documents/projects/sazzadev/src/pages/anims/atorus/index.astro", void 0);

const $$file$1 = "/Users/martinsazzaroli/Documents/projects/sazzadev/src/pages/anims/atorus/index.astro";
const $$url$1 = "/anims/atorus";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 class="text-center" data-astro-cid-j7pv25f6>sazza.<span class="text-gradient" data-astro-cid-j7pv25f6>dev</span></h1> ${renderComponent($$result2, "ThreeCanvas", $$ThreeCanvas, { "id": "main-canvas", "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/Users/martinsazzaroli/Documents/projects/sazzadev/src/pages/index.astro", void 0);

const $$file = "/Users/martinsazzaroli/Documents/projects/sazzadev/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
