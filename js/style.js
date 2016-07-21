

$(document).ready(function(){
	var boxHome = $(".boxHome").height();
	var boxAbout = $(".boxAbout").height();
	var boxPerformers = $(".boxPerformers").height();
	var boxFundamentors = $(".boxFundamentors").height();
	var boxWork = $(".boxWork").height();
	var boxTestimonials = $(".boxTestimonials").height();
	var boxClients = $(".boxClients").height();
	var boxTeam = $(".boxTeam").height();
	var boxContact = $(".boxContact").height();

	$(document).load().scrollTop(0);

// ------------------------------------------------------------------------------//
//					FOR DIV TRANSITION STARTS									//
//-----------------------------------------------------------------------------//

	$(window).scroll(function () {
    if ($(window).scrollTop() >= boxHome){
        $(".boxAbout .objAnim").addClass("showMe");
    }
    if ($(window).scrollTop() >= boxHome + boxAbout + boxPerformers){
        $(".boxFundamentors .objAnim").addClass("showMe");
    }

    if ($(window).scrollTop() >= boxHome + boxAbout + boxPerformers + boxFundamentors){
        $(".boxWork .objAnim").addClass("showMe");
    }

    if($(window).scrollTop() == 0){
    	$(".objAnim").removeClass("showMe");
    }

// ------------------------------------------------------------------------------//
//					FOR DIV TRANSITION ENDS										//
//-----------------------------------------------------------------------------//



// ------------------------------------------------------------------------------//
//					FOR NAV BAR BGCOLOR CHANGE TRANSITION STARTS				//
//-----------------------------------------------------------------------------//

    if(($(window).scrollTop() >= boxHome + boxAbout + boxPerformers + 300)){
    	$(".mainNav").css("background-color","#FAAF40");
    	$("header .customContainer").css("background-color","#FAAF40");
    	
    }


    if(($(window).scrollTop() >= boxHome + boxAbout + boxPerformers + boxFundamentors + 400)){
    	$(".mainNav").css("background-color","#49325B");
    	$(".mainNav").css("transition","background-color 0.2s ease");
    	$("header .customContainer").css("background-color","#49325B");
    	$("header .customContainer").css("transition","background-color 0.2s ease");
    	
    }
    if(($(window).scrollTop() > boxHome + boxAbout + boxPerformers + boxFundamentors + boxWork + 500)){
    	$(".mainNav").css("background-color","#FF7559");
    	$(".mainNav").css("transition","background-color 0.2s ease");
    	$("header .customContainer").css("background-color","#FF7559");
    	$("header .customContainer").css("transition","background-color 0.2s ease");
    	
    }

    if(($(window).scrollTop() < boxHome + boxAbout + boxPerformers + 300)){
    	$(".mainNav").css("background-color","#FF6666");
    	$(".mainNav").css("transition","background-color 0.2s ease");
    	$("header .customContainer").css("background-color","#FF6666");
    	$("header .customContainer").css("transition","background-color 0.2s ease");
    	
    }

// ------------------------------------------------------------------------------//
//					FOR NAV BAR BGCOLOR CHANGE TRANSITION ENDS					//
//-----------------------------------------------------------------------------//
});

});
