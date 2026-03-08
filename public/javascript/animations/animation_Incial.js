import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const header = document.querySelector(".header");

export default entrace() {
    gsap.to(".header",{ height: "50vh"});

}