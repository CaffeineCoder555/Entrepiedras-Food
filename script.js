var hero = gsap.timeline();


hero

.from("#nav", {
    opacity:0,
    y:-20,
    duration:1,
})

.from(".nb",{
    opacity:0,
    y:-20,
    stagger:0.3
})

.from("#nav-premier", {
    opacity:0,
    x:20,
})

.from(".center .pop-up",{
    opacity:0,
    scale: 0.5,
    duration:0.5
})

.from("#text-3",{
    opacity:0,
    y:50,
    duration:1
})
