export function scrollZoom(gsap, header) {
  gsap.to(header, {
    scale: 0.78,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=150",
      scrub: true
    }
  })
};