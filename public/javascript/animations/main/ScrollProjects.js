export function ScrollProjects(gsap, ScrollTrigger, header) {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector("#conteiner-projects");

    // Cria uma timeline para controlar tudo junto
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: () => {
                const navbar = header.getBoundingClientRect().bottom;
                return `top top+=${navbar}`;
            },
            end: () => `+=${container.scrollWidth - window.innerWidth}`,
            scrub: 2,           // quanto mais alto, mais "suave/lento"
            pin: true,
            anticipatePin: 1,
            pinSpacing: true,
        }
    });

    // 1. Animação horizontal dos projetos (igual você já tinha)
    tl.to("#conteiner-projects", {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none"
    });

}