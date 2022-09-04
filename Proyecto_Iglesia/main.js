window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle('down',window.scrollY > 0);

    var logo = document.querySelector(".brand img");
    if(window.scrollY > 0){
        logo.setAttribute('src', './imagenes/logo.png');
    }else{
        logo.setAttribute('src', './imagenes/logo_gris.png');
    }
});

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
})
closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
})


var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerview: 1,
    spaceBetween: 10,

    breakpoints: {
        620: {
            slidesPerview:1,
            spaceBetween: 20,
        },
        680: {
            slidesPerview:2,
            spaceBetween: 40,
        },
        920: {
            slidesPerview:3,
            spaceBetween: 40,
        },
        1240: {
            slidesPerview:4,
            spaceBetween: 50,
        },
    }
});
