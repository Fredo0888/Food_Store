$('.close').click(function () {
    $('.notification').slideUp(500);
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    navigation:true,
    navigationText: [ '', ' ' ],

    responsive:{
        0:{
            items:1
        },

        1000:{
            items:5
        }
    }
});