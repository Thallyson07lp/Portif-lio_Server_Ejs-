export function scrollZoom(gsap, header, ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  /* HEADER ZOOM */
  gsap.to(header, {
    scale: 0.78,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=150",
      scrub: true
    }
  });

  /* ── THEME: PROJECTS = PRETO / BRANCO ───────── */
  ScrollTrigger.create({
    trigger: "#projects",
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      gsap.to("body", {
        backgroundColor: "#fff",
        color: "#000",
        duration: 0.4
      });
    },

    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor:"#fff" ,
        color:"#000" ,
        duration: 0.4
      });
    }
  });

  /* ── THEME: CONTACTS = BRANCO / PRETO ───────── */
  ScrollTrigger.create({
    trigger: "#contacts",
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      gsap.to("body", {
        backgroundColor: "#000",
        color: "#fff",
        duration: 0.4
      });
    },

    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor: "#000",
        color: "#fff",
        duration: 0.4
      });
    }
  });
}