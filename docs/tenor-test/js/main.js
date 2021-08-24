var tl = gsap.timeline();
tl.to("#svg0", {delay: 3, duration: 0.3,x: 340, y:60});
tl.to("#svg0", {duration: 0.3, rotation: -90,x: 1100, y:-500, scale: 
1.3 });

gsap.to(".marge", { ease:
    Expo. easeIn, delay :3, marginRight: 1500});



gsap.from("#hope", {ease:
    Expo. easeIn, delay: 1, duration: 3, opacity: 0});


gsap.from("#camille", {ease:
    Expo. easeIn, delay: 8, duration: 5, opacity: 0});

gsap.from("#prism3d", { ease:
    Expo. easeIn, duration: 12, opacity: 0});


    gsap.to("#clef", {duration: 0.2 ,x: -700, y: -840});
    gsap.to("#clef", {delay:3, duration: 1 , opacity: 0});

gsap.to(".logo", {duration: 1,opacity: 0.2, x: 120, width:400, top:200});

gsap.to("#hell", {duration: 1, bottom: "200px"});




gsap.from("#digit", {duration: 4, opacity: 0});



gsap.from("#note", {delay: 0.5, duration: 1,  x: 600, ease: "bounce"});
gsap.to("#note", { opacity: 0, delay: 1});

gsap.from("#note2", {duration: 1,  x: 600, delay: 1, ease: "bounce"});
gsap.to("#note2", { opacity: 0, delay: 1.5});

gsap.from("#note3", {duration: 1,  x: 600, delay: 2, ease: "bounce"});
gsap.to("#note3", { opacity: 0, delay: 2.5});

gsap.from("#note4", {duration: 1,  x: 600, delay: 2.4, ease: "bounce"});
gsap.to("#note4", { opacity: 0, delay: 3});

gsap.from("#note5", {duration: 3,  x: 600, y: 50, scale:8, delay: 4, ease: "bounce"});
gsap.to("#note5", { opacity: 0, delay: 5.5});

gsap.from("#note6", {duration: 1,  x: 600, delay: 6, ease: "bounce"});
gsap.to("#note6", { opacity: 0, delay: 6.5});

gsap.from("#note7", {duration: 1,  x: 600, delay: 7, ease: "bounce"});
gsap.to("#note7", { opacity: 0, delay: 7.5});

gsap.from("#note8", {duration: 1,  x: 600, delay: 8, ease: "bounce"});
gsap.to("#note8", { opacity: 0, delay: 8.5});

gsap.from(".bullet", {delay: 4, duration: .2, opacity: 0, x:-80, stagger: 0.2});
gsap.from(".bull", {delay: 4, duration: 1, opacity: 1, r:30, stagger: -1});
