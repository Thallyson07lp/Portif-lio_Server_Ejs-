export function ScrollProjects(gsap, ScrollTrigger,header){
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector("#conteiner-projects");

    gsap.to("#conteiner-projects", {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: "#projects",
            start: () => `top ${header.offsetHeight}px`,
            end: () => `+=${container.scrollWidth - window.innerWidth}`, // ← sem "top"
            scrub: 2,
            markers: true,   
            pin: true,    
            anticipatePin: 1,
            pinSpacing: true,
        }
    
    })
    

}