export function navbar(gsap, header, profile, nav) {

  const tl = gsap.timeline({ invalidateOnRefresh: true });

  tl.set(profile, {
    x: () => {
      const headerRect = header.getBoundingClientRect();
      const profileRect = profile.getBoundingClientRect();
      // centro do header (só largura importa)
      const headerCenter = headerRect.width / 2;
      // posição do profile dentro do header + metade da largura
      const profileCenter = profile.offsetLeft + profileRect.width / 2;
      // quanto precisa mover
      const centerX = headerCenter - profileCenter;

      return centerX;
    }
  })
    .set(nav, { opacity: 0, x: -100 })

    .to([nav, profile], { x: 0, opacity: 1, duration: .8 })
}
