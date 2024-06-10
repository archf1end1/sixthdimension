function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove", function (dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})

// gsap.from("#page1 h1,#page1 h2", {
//     x: 10,
//     rotate: 10,
//     opacity: 0,
//     delay: 0.3,
//     duration: 0.7
// })

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1", 
        scroller: "#main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

tl.to("#page1 h1",{
    x: -100,
}, "anim")
tl.to("#page1 h2", {
    x: 100,
}, "anim")
tl.to("#page1 video", {
    width: "90%",
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1", 
        scroller: "#main",
        // markers: true,
        start: "top -115%",
        end: "top -120",
        scrub: 3
    }
})

tl2.to("#main", {
    backgroundColor: "#fff"
})

let t1 = gsap.timeline()

t1.from("#loader h3", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})

t1.to("#loader h3", {
    delay: 1,
    opacity: 0,
    y: -20,
    stagger: -0.1,
})

t1.to("#loader", {
    opacity: 0,
})

t1.to("#loader", {
    display: "none"
})