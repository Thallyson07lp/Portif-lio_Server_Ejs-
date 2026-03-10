import { entrace } from "./animations/header/entrace.js";
import { gsap } from "./animations/gsap.js";
import { ScrollTrigger } from "./animations/gsap.js";

addEventListener("load", () => { 

    const header = document.querySelector(".header");
    const header_profile = document.querySelector("#header_profile");
    const nav = document.querySelector("#navigation");

    entrace(gsap, header, header_profile, nav);
    // animIntor();
})