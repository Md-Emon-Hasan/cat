
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    nav:false,
    dots:false,
    center:true,
    autoplay:true,
    autoplayTimeout:3000,
    stagePadding:false,
    responsive:{
        600:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
});
