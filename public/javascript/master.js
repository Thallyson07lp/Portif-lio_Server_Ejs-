// Animations Gsaps
import { entrace } from "./animations/entrace.js";
import { scrollZoom } from "./animations/header/scroll_zoom.js";
import { ScrollProjects } from "./animations/main/ScrollProjects.js";

// Impotations Gsaps
import { gsap } from "./gsap.js";
import { ScrollTrigger } from "./gsap.js";

/* ── Const ─────────────────────────────────── */

// Const header... (Reoganizar Name)
const header = document.querySelector("header");
const profile = document.querySelector("#profile");
const nav = document.querySelector("#navigation");

// Const aboutMe...


addEventListener("load", () => {


    // Animações na entrada...
    entrace(gsap, header, profile, nav);

    // Animação Continua 
    scrollZoom(gsap, header, ScrollTrigger);
    ScrollProjects(gsap, ScrollTrigger, header)
})


