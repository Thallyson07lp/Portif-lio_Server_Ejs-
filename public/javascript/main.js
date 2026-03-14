// Impotations Gsaps
import { gsap } from "./animations/gsap.js";
import { ScrollTrigger } from "./animations/gsap.js";

// Animations Gsaps
import { entrace } from "./animations/entrace.js";
import {scrollZoom} from "./animations/header/scroll_zoom.js"


addEventListener("load", () => { 

    const header = document.querySelector(".header");
    const header_profile = document.querySelector("#header_profile");
    const nav = document.querySelector("#navigation");

    const about = document.querySelector("#aboutText");
    
    scrollZoom(gsap,header);
    entrace(gsap, header, header_profile, about, nav);
    
})