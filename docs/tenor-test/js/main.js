console.log("gsap works very well");


var tl = gsap.timeline();
tl.to("#svg0", {delay: 3, duration: 0.3,x: 340, y:60});
tl.to("#svg0", {duration: 0.3, rotation: -90,x: 850, y:-200, scale: 
0.9});

// var pri = gsap.timeline();

gsap.to("#prismlogo", { ease:Expo. easeIn, duration:2, opacity: 1});
gsap.from("#prismlogo", {delay: 1.5, duration:2, rotateX: "random(-100,100)", rotateY: "random(-100,200)", rotateZ: "random(-200,100)"});


gsap.to("#cnrslogo", { ease:Expo. easeIn, duration: 1,  opacity: 1});
gsap.to("#amulogo", { ease:Expo. easeIn, delay :0.3, duration: 1,  opacity: 1});
gsap.to("#inciamlogo", { ease:Expo. easeIn, delay :0.6, duration: 1,  opacity: 1});
gsap.to("#gmemlogo", { ease:Expo. easeIn, delay :0.9, duration: 1,  opacity: 1});

// background vid main  
gsap.to("#rrrdiv", { ease:Expo. easeIn, delay :5, duration: 3, opacity: 1});


 gsap.from("#ent", {ease:
    Expo. easeIn, duration: 1, opacity: 0});



 gsap.from("#trailerframe", {ease:
    Expo. easeIn, delay: 1, duration: 2, opacity: 0});


    



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





gsap.from(".bullet", {duration: 0.3, opacity: 0, x: -200, stagger: -0.06});
gsap.from(".bull", {delay: 4, duration: 1, opacity: 1, r:30, stagger: -1});
