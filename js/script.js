

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Top rated freelancer", "WordPress expert", "Full stack web developer", "Talented Programmer"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Top rated freelancer", "WordPress expert", "Full stack web developer", "Talented Programmer"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });


$('.terms-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class:'fa-solid fa-arrow-left'></i>",
        "<i class:'fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        
    }
})

