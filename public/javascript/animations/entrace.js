export function entrace(gsap, header, header_profile, about, nav) {

  const tl = gsap.timeline({ invalidateOnRefresh: true });

  tl.set(header_profile, {
    x: () => {
      const headerRect = header.getBoundingClientRect();
      const profileRect = header_profile.getBoundingClientRect();
      // centro do header (só largura importa)
      const headerCenter = headerRect.width / 2;
      // posição do profile dentro do header + metade da largura
      const profileCenter = header_profile.offsetLeft + profileRect.width / 2;
      // quanto precisa mover
      const centerX = headerCenter - profileCenter;

      return centerX;
    }
  })
    .set(nav, { opacity: 0, x: -100 })
    .set(about, { y: 160 })

    .to([nav, header_profile], { x: 0, opacity: 1, duration: .8 })
  tl
    .to(about, { y: 0, duration: 1.8 }, "<")
    .to(":root", {
      "--mask": "0%",
      duration: 2
    }, "<");
}
