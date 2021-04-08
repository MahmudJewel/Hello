$(document).ready(function (){
	/*$('.nav_right a[href*="#"]').on('click',function (){
	$('html, body').animate( keyframes:{
		scrollTop: $($(this).attr('href')).offset().top - 100
		}, options:2000);
	});*/


	$('#up').on('click',function (){
	$('html+ body').animate(keyframes:{
		scrollTop: 0
		} options:2000);
	});

	/*AOS.init();
  	AOS.init({
  		easing: 'easing',
  		duration: 1000,
  	});*/

});


console.loge("Hello")


