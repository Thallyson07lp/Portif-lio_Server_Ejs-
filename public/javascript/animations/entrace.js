/* ── Function_Entrace{ FE-Name_Fuction } ──────────── */
import { navbar } from "./header/FE-navbar.js"
import { wrapLines } from "./main/FE-aboutLine.js"


export function entrace(gsap, header, header_profile, nav) {

navbar(gsap, header, header_profile, nav);

// chama em todos os .text, não só no primeiro...
let delayGlobal = 0;

document.querySelectorAll('.text').forEach(el => {
  wrapLines(el, delayGlobal);
  delayGlobal += el.querySelectorAll('span').length * 0.10;
});

}
