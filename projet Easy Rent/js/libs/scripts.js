
		$(document).ready(function(){

		 
   setInterval(function(){
         $(".slider ul").animate({marginLeft:-700},1000,function(){
			
            $(this).css({marginLeft:-73}).find("li:last").after($(this).find("li:first"));
         })
      }, 6500);


});