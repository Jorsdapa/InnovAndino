var slider = new Swiper(".swiper-container", {
       slidesPerView: 'auto',
       spaceBetween: 150,
       centeredSlides: true,
       mousewheel: true
     })
     
     slider.on('slideChange', function () {
       TweenMax.to('.slide-text span', .2, {
         y: '-100px',
       })
       TweenMax.to('.slide-number span', .2, {
         x: '-100px',
       })
       TweenMax.to('.swiper-slide-active', .5, {
         scale: .85
       })
     })
     
     slider.on('slideChangeTransitionEnd', function () {
     
       TweenMax.to('.slide-text span', .2, {
         y: 0,
         delay: .5
       })
       TweenMax.to('.slide-text span', 0, {
         y: '100px',
       })
     
       TweenMax.to('.slide-number span', .2, {
         x: 0,
         delay: .7
       })
       TweenMax.to('.slide-number span', 0, {
         x: '100px',
       })
     
       TweenMax.to('.swiper-slide-active', .5, {
         scale: 1,
         ease: Power4.easeOut,
       })
     
       TweenMax.to('.swiper-slide-active .slide-text', 0, {
         autoAlpha: 1
       })
       TweenMax.to('.swiper-slide-active .slide-number', 0, {
         autoAlpha: 1
       })
     
       TweenMax.to('.swiper-slide-next .slide-text', 0, {
         autoAlpha: 0
       })
       TweenMax.to('.swiper-slide-prev .slide-text', 0, {
         autoAlpha: 0
       })
     
       TweenMax.to('.swiper-slide-next .slide-number', 0, {
         autoAlpha: 0
       })
       TweenMax.to('.swiper-slide-prev .slide-number', 0, {
         autoAlpha: 0
       })
     })
     
     TweenMax.to('.swiper-slide-next .slide-text', 0, {
       autoAlpha: 0
     })
     TweenMax.to('.swiper-slide-prev .slide-text', 0, {
       autoAlpha: 0
     })
     
     TweenMax.to('.swiper-slide-next .slide-number', 0, {
       autoAlpha: 0
     })
     TweenMax.to('.swiper-slide-prev .slide-number', 0, {
       autoAlpha: 0
     })
     
     TweenMax.to('.swiper-slide', 0, {
       scale: .85,
     })
     
     TweenMax.to('.swiper-slide-active', 0, {
       scale: 1,
     })


     var scene = document.getElementById('scene');
     var parallax = new Parallax(scene);
 
     TweenMax.from(".logo", 1, {
       opacity: 0,
       x: -20,
       ease: Expo.easeInOut
     })
 
     TweenMax.staggerFrom(".menu-links ul li", 1, {
       opacity: 0,
       x: -20,
       ease: Power3.easeInOut
     }, 0.08)
 
     TweenMax.from(".search", 1, {
       delay: .5,
       opacity: 0,
       x: -20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".account", 1, {
       delay: .6,
       opacity: 0,
       x: -20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".cart", 1, {
       delay: .7,
       opacity: 0,
       x: -20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".juice", 1, {
       delay: 2,
       opacity: 0,
       y: -800,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".leaves .layer:nth-child(1)", 2, {
       delay: 2,
       opacity: 0,
       y: -800,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".leaves .layer:nth-child(2)", 2, {
       delay: 2.1,
       opacity: 0,
       y: -800,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".leaves .layer:nth-child(3)", 2, {
       delay: 2.2,
       opacity: 0,
       y: -800,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".leaves .layer:nth-child(4)", 2, {
       delay: 2.3,
       opacity: 0,
       y: -800,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".leaves .layer:nth-child(5)", 2, {
       delay: 2.5,
       opacity: 0,
       y: -800,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".title", 1, {
       delay: 1,
       opacity: 0,
       y: 20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".tagline", 1, {
       delay: 1.3,
       opacity: 0,
       y: 20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".pages", 1, {
       delay: 1.3,
       opacity: 0,
       y: 20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".more", 1, {
       delay: 1.4,
       opacity: 0,
       y: 20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".desc", 1, {
       delay: 1.4,
       opacity: 0,
       y: 20,
       ease: Expo.easeInOut
     })
 
     TweenMax.from(".arrows", 1, {
       delay: 2,
       opacity: 0,
       ease: Expo.easeInOut
     })
     
     