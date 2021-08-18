console.log("gsapWorks");
gsap.to(".logo", {duration: 1,opacity: 0.2, x: 120, width:400, top:200});

gsap.to("#hell", {duration: 1, bottom: "200px"});

gsap.from("#digit", {duration: 4, opacity: 0});



gsap.from("#note", {duration: 1,  x: 600, ease: "bounce"});
gsap.to("#note", { opacity: 0, delay: 0.5});

gsap.from("#note2", {duration: 1,  x: 600, delay: 1, ease: "bounce"});
gsap.to("#note2", { opacity: 0, delay: 1.5});

gsap.from("#note3", {duration: 1,  x: 600, delay: 2, ease: "bounce"});
gsap.to("#note3", { opacity: 0, delay: 2.5});

gsap.from("#note4", {duration: 1,  x: 600, delay: 3, ease: "bounce"});
gsap.to("#note4", { opacity: 0, delay: 3.5});

gsap.from("#note5", {duration: 1,  x: 600, delay: 5, ease: "bounce"});
gsap.to("#note5", { opacity: 0, delay: 5.5});

gsap.from("#note6", {duration: 1,  x: 600, delay: 6, ease: "bounce"});
gsap.to("#note6", { opacity: 0, delay: 6.5});

gsap.from("#note7", {duration: 1,  x: 600, delay: 7, ease: "bounce"});
gsap.to("#note7", { opacity: 0, delay: 7.5});

gsap.from("#note8", {duration: 1,  x: 600, delay: 8, ease: "bounce"});
gsap.to("#note8", { opacity: 0, delay: 8.5});

gsap.from(".bullet", {duration: .3, opacity: 0, x:-80, stagger: 0.4});