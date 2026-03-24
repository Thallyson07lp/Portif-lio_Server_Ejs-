export function ScrollProjects(gsap, ScrollTrigger, header) {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector("#conteiner-projects");

    // Define a variável CSS com a altura do header
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight * 0.78}px`);

    // Cria uma timeline para controlar tudo junto
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: () => `top top`,
            end: () => `+=${container.scrollWidth - window.innerWidth}`,
            scrub: 2,           // quanto mais alto, mais "suave/lento"
            pin: true,
            anticipatePin: 1,
            pinSpacing: true,
            markers: true,      // tire depois de testar
        }
    });

    // 1. Animação horizontal dos projetos (igual você já tinha)
    tl.to("#conteiner-projects", {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none"
    });

}