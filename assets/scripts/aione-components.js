$(document).ready(function() {


	/*****************************************************
	/*  Aione Slider
	/*****************************************************/
	try{
        var DataJson = $('.slider').data();
        console.log("Slider Json Data");
        console.log(DataJson);
        //$(".aione-slider").owlCarousel(DataJson);
        
		$(".slider").owlCarousel({
			
		    items:1,
		    loop:true,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true,
		    nav:true,
		    autoHeight:true,
		    //animateOut: 'slideOutDown',
    		//animateIn: 'flipInX',
		    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		
		
	}catch(e){

	}
	try{
		$(".aione-carousel").owlCarousel({
			
		    items:3,
		    loop:true,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true,
		    nav:true,
		    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
	}catch(e){

	}

	
	
});