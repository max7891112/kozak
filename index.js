new Swiper('.image-slider', {

    loop:true,

    navigation: {
        nextEl: '.swiper-button-next-modern',
        prevEl: '.swiper-button-prev-modern'
    },

    pagination: {
        el: '.swiper-paginations',
        //буллеты
        clickable: true
    },
});