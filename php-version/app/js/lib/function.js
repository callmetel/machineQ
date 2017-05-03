jQuery(document).ready(function($) {


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.Windows() || isMobile.Android() || isMobile.Opera() ){
	$(".cta").addClass('android');
}
// Get IE or Edge browser version
var version = detectIE();


function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
  	$('html').addClass('ie10');
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

var altEase = Sine.easeInOut; 
var	altEaseOut = Sine.easeOut;
	

	//Ease the scrolling on all page links
		
		$(window).resize(function(){
			if ($(window).width() >= 768){
				  $(function() {
				    $('a[href*=#]:not([href=#])').on('click', (function() { //get the 'a' anchor with a # but not ones with only a #
				        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) { //is the location of the pathname & hostname = to this pathname & hostname?
				          var target = $(this.hash); //get the link; section id
				          target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); //is the target length = to target? if not slice the target length down to 1
				          if (target.length) {
				            $('html,body').animate({
				              scrollTop: target.offset().top
				            }, 1000);
				            return false;
				          }
				        }
				    }));
				});
			}
		});

	// Nav Toggle Animation 

	// Page Navigation

	//Initial Scroll Function for sectios 1-7
			
			TweenMax.set(['#section-2, #section-3, #section-4, #section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});
			TweenMax.set('#comcast-logo', {alpha:0});
			TweenMax.set('.bg', {alpha:.5});

			var speed = .85;

			function checkSlideUp(){

				if($('#section-1').hasClass('is-current-section') ){
				
					setTimeout(function(){
						$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
					}, 860);

				} else if($('#section-2').hasClass('is-current-section')){

					TweenMax.to('#section-2', speed, {y: '100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-1', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					TweenMax.to('#comcast-logo', .5, {alpha:0});
					TweenMax.to('.bg', .5, {alpha:.5});

					setTimeout(function(){
						$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
					}, 860);
						
				} else if($('#section-3').hasClass('is-current-section')){

					TweenMax.to('#section-3', speed, {y: '100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-2', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
						
				} else if($('#section-4').hasClass('is-current-section')){

					TweenMax.to('#section-4', speed, {y: '100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-3', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
				
				} else if($('#section-5').hasClass('is-current-section')){

					TweenMax.to('#section-5', speed, {y: '100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-4', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
				
				} else if($('#section-6').hasClass('is-current-section')){


					TweenMax.to('#section-6', speed, {y: '100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-5', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
				
				} else if($('#section-7').hasClass('is-current-section')){


					TweenMax.to('#section-7', speed, {y: '100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					$('#c1').removeClass('fadein-1');
					$('#c2').removeClass('fadein-2');
					$('#c3').removeClass('fadein-3');
					$('#c4').removeClass('fadein-4');
					$('#c5').removeClass('fadein-5');
					$('#map-title').removeClass('fadein');


					setTimeout(function(){
						$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
				
				}

			}

			function checkSlideDown(){

				if($('#section-1').hasClass('is-current-section') ){
				
					TweenMax.to('#section-1', speed, {y: '-100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-2', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					TweenMax.to('#comcast-logo', .5, {alpha:1});
					TweenMax.to('.bg', .5, {alpha:.15});
					
					setTimeout(function(){
						$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);

				} else if($('#section-2').hasClass('is-current-section')){

					TweenMax.to('#section-2', speed, {y: '-100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-3', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
						
				} else if($('#section-3').hasClass('is-current-section')){

					TweenMax.to('#section-3', speed, {y: '-100%', alpha:0, ease:altEaseOut});
					TweenMax.to('#section-4', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						
						$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
						
				} else if($('#section-4').hasClass('is-current-section')){

					TweenMax.to('#section-4', speed, {y: '-100%', alpha:0,  ease:altEaseOut});
					TweenMax.to('#section-5', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
				
				} else if($('#section-5').hasClass('is-current-section')){

					
					TweenMax.to('#section-5', speed, {y: '-100%', alpha:0,  ease:altEaseOut});
					TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
				
				} else if($('#section-6').hasClass('is-current-section')){
					$('#section-7').scrollTop(0);
					TweenMax.to('#section-6', speed, {y: '-100%', alpha:0,  ease:altEaseOut});
					TweenMax.to('#section-7', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
					$('#c1').addClass('fadein-1');
					$('#c2').addClass('fadein-2');
					$('#c3').addClass('fadein-3');
					$('#c4').addClass('fadein-4');
					$('#c5').addClass('fadein-5');
					$('#map-title').addClass('fadein');

					setTimeout(function(){
						$('#section-7').scrollTop(0);
						$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-8').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
					}, 860);
				
				} else if($('#section-7').hasClass('is-current-section')){

				} 

			}

			var status = 0;

			// Stop Scroll / Key Backup

			
				if ($(window).width() <= 1024){

					$('#section-4 h1.title').html('FIT FOR YOUR<br />WORKFLOW');
	
					//For Mobile Devices
					//
					var ts;
					$('body').bind('touchstart', function (event){
					   ts = event.originalEvent.touches[0].clientY;
					});

					$('body').bind('touchmove', function (event){
					   var te = event.originalEvent.changedTouches[0].clientY;
					   if (status === 0  && $('#menu').hasClass('nav-is-inactive') ) {
						   if(ts > te+5){
						   	  status = 1;
						      checkSlideDown();
						      setTimeout(function(){
								status=0;
							  },850);
						   }else if(ts < te-5){
						   	  status = 1;
						      checkSlideUp();
						      setTimeout(function(){
								status=0;
							  },850);
						   }
					    } else if (status > 0){
							//do nothing
							console.log('waiting');
						}
					});


					$('#menu li:eq(0)').bind('touchend', function(event){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-1', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-2, #section-3, #section-4, #section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:0});
						TweenMax.to('.bg', .5, {alpha:.5});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');
						setTimeout(function(){
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#nav-trigger, #burger, .nav-logo, nav .close').bind('touchend', function(e){
						$('#menu, nav .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');
					});

					$('.filter-button, .close-filter-button').bind('touchend', function(e){
						$('.close-filter-button, .filter-button, .cd-tab-filter-wrapper').toggleClass('filter-is-inactive');
						$('#filter-lightbox').toggleClass('filter-bg-inactive');
					});

					$('#menu li:eq(1)').bind('touchend', function(event){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-2', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set('#section-1', {y:'-100%', alpha:0});
						TweenMax.set(['#section-3, #section-4, #section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');
						setTimeout(function(){
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(2)').bind('touchend', function(event){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-3', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-4, #section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');
						setTimeout(function(){
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(3)').bind('touchend', function(event){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-4', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(4)').bind('touchend', function(event){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-5', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein'); 

						setTimeout(function(){
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(5)').bind('touchend', function(event){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-7', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5, #section-6'], {y:'-100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').addClass('fadein-1');
						$('#c2').addClass('fadein-2');
						$('#c3').addClass('fadein-3');
						$('#c4').addClass('fadein-4');
						$('#c5').addClass('fadein-5');
						$('#map-title').addClass('fadein');

						setTimeout(function(){
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						}, 860); 
					});

					$('#down, #home-down').bind('touchend', function(event){

						TweenMax.to('#section-2', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set('#section-1', {y:'-100%', alpha:0});
						TweenMax.set(['#section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#case-down, #use-case-down').bind('touchend', function(event){

						TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5'], {y:'-100%', alpha:0});
						TweenMax.set('#section-7', {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-2 .cta').bind('touchend', function(event){

						TweenMax.to('#section-3', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-3 .cta').bind('touchend', function(event){

						TweenMax.to('#section-4', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-4 .cta').bind('touchend', function(event){

						TweenMax.to('#section-5', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-5 .cta').bind('touchend', function(event){

						TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-6 .cta').bind('touchend', function(event){

						TweenMax.to('#section-7', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5, #section-6'], {y:'-100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						}, 860); 
					});

					$('#section-7 .cta').bind('touchend', function(event){

						TweenMax.to('#section-1', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:0});
						TweenMax.to('.bg', .5, {alpha:.5});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						}, 860); 
					});

				} else if ($(window).width() >= 1025){
	
					function move(){


						$('body').bind('mousewheel keydown', function(e) {

								if (status === 0 && $('#menu').hasClass('nav-is-inactive') ) {
									
									if(e.originalEvent.wheelDelta / 120 > 0 || e.keyCode === 38  || e.keyCode === 37 || $('body').hasClass('swiped-left') ) {

										status = 1;
										checkSlideUp();

										setTimeout(function(){
											// alert('times up!');
											status=0;
										},2000);

									} else if(e.originalEvent.wheelDelta / 120 < 0 || e.keyCode === 40  || e.keyCode === 39 ){

										status=1;
										checkSlideDown();
										setTimeout(function(){
											// alert('times up!');
											status=0;
										},2000);

									} else {

									}

								} else if (status > 0){
									//do nothing
									console.log('waiting');
								}

						});

					}
					requestAnimationFrame(move);

					$('#nav-trigger, #burger, .nav-logo, nav .close').click(function(){
						$('#menu, nav .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');
					});

					$('#menu li:eq(0)').click(function(){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-1', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-2, #section-3, #section-4, #section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:0});
						TweenMax.to('.bg', .5, {alpha:.5});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(1)').click(function(){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-2', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set('#section-1', {y:'-100%', alpha:0});
						TweenMax.set(['#section-3, #section-4, #section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(2)').click(function(){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-3', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-4, #section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(3)').click(function(){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-4', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-5, #section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						setTimeout(function(){
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(4)').click(function(){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-5', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-6, #section-7, #section-8'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#menu li:eq(5)').click(function(){
						$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
						$('.slide-info').toggleClass('is-hidden');

						TweenMax.to('#section-7', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5, #section-6'], {y:'-100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').addClass('fadein-1');
						$('#c2').addClass('fadein-2');
						$('#c3').addClass('fadein-3');
						$('#c4').addClass('fadein-4');
						$('#c5').addClass('fadein-5');
						$('#map-title').addClass('fadein');

						setTimeout(function(){
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						}, 860); 
					});

					$('#down, #home-down').click(function(){

						TweenMax.to('#section-2', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set('#section-1', {y:'-100%', alpha:0});
						TweenMax.set(['#section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#case-down, #use-case-down').click(function(){

						TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5'], {y:'-100%', alpha:0});
						TweenMax.set('#section-7', {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-2 .cta').click(function(){

						TweenMax.to('#section-3', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-3 .cta').click(function(){

						TweenMax.to('#section-4', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-4 .cta').click(function(){

						TweenMax.to('#section-5', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-4').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-5 .cta').click(function(){

						TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5'], {y:'-100%', alpha:0});
						TweenMax.set(['#section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						setTimeout(function(){
							$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 860); 
					});

					$('#section-6 .cta').click(function(){

						TweenMax.to('#section-7', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5, #section-6'], {y:'-100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:1});
						TweenMax.to('.bg', .5, {alpha:.15});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').addClass('fadein-1');
						$('#c2').addClass('fadein-2');
						$('#c3').addClass('fadein-3');
						$('#c4').addClass('fadein-4');
						$('#c5').addClass('fadein-5');
						$('#map-title').addClass('fadein');

						setTimeout(function(){
							$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						}, 860); 
					});

					$('#section-7 .cta').click(function(){

						TweenMax.to('#section-1', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
						TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

						TweenMax.to('#comcast-logo', .5, {alpha:0});
						TweenMax.to('.bg', .5, {alpha:.5});
						$('.section').removeClass('is-current-section is-next-section is-previous-section');
						$('#c1').removeClass('fadein-1');
						$('#c2').removeClass('fadein-2');
						$('#c3').removeClass('fadein-3');
						$('#c4').removeClass('fadein-4');
						$('#c5').removeClass('fadein-5');
						$('#map-title').removeClass('fadein');

						setTimeout(function(){
							$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						}, 860); 
					});

				}
					
		

	// Use Cases on Hover
	
		$('#geofencing, #location').hover(function(e){
			$(this).addClass('is-hovering');
		}, function(e){
			$(this).removeClass('is-hovering');
		}); 

		$('#backup').hover(function(e){
			$(this).addClass('is-hovering');
		}, function(e){
			$(this).removeClass('is-hovering');
		}); 

		$('#temperature, #spatial, #vibration, #pressure, #flow, #weight, #altitude, #moisture, #luminosity, #acoustics').hover(function(e){
			$(this).addClass('is-hovering');
		}, function(e){
			$(this).removeClass('is-hovering');
		}); 

		$('#utility, #parking').hover(function(e){
			$(this).addClass('is-hovering');
		}, function(e){
			$(this).removeClass('is-hovering');
		}); 

		$('#highvalue, #predictive').hover(function(e){
			$(this).addClass('is-hovering');
		}, function(e){
			$(this).removeClass('is-hovering');
		}); 
	

		// MixItUp Filters Start HERE
	
		//open/close lateral filter
		$('.cd-filter-trigger').on('click', function(){
			triggerFilter(true);
		});
		$('.cd-filter .cd-close').on('click', function(){
			triggerFilter(false);

		});

		function triggerFilter($bool) {
			var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
			elementsToTrigger.each(function(){
				$(this).toggleClass('filter-is-visible', $bool);
			});
		}

		//mobile version - detect click event on filters tab
		var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
			filter_tab_placeholder_default_value = 'Select',
			filter_tab_placeholder_text = filter_tab_placeholder.text();
		
		$('.cd-tab-filter li').on('click', function(event){

			//detect which tab filter item was selected
			var selected_filter = $(event.target).data('type');
				
			//check if user has clicked the placeholder item
			if( $(event.target).is(filter_tab_placeholder) ) {
				(filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
				$('.cd-tab-filter').toggleClass('is-open');

			//check if user has clicked a filter already selected 
			} else if( filter_tab_placeholder.data('type') == selected_filter ) {
				filter_tab_placeholder.text($(event.target).text());
				$('.cd-tab-filter').removeClass('is-open');	

			} else {
				//close the dropdown and change placeholder text/data-type value
				$('.cd-tab-filter').removeClass('is-open');
				filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
				filter_tab_placeholder_text = $(event.target).text();
				
				//add class selected to the selected filter item
				$('.cd-tab-filter .selected').removeClass('selected');
				$(event.target).addClass('selected');

				$('.option-1').addClass('selected');
				$('.option-2').addClass('selected');
				$('.option-3').addClass('selected');
				$('.option-4').addClass('selected');
				$('.option-5').addClass('selected');
				
				
			}
			$('.close-filter-button, .filter-button, .cd-tab-filter-wrapper').toggleClass('filter-is-inactive');
			$('#filter-lightbox').toggleClass('filter-bg-inactive');
			setTimeout(function(){
				if( $('#filter-0 a').hasClass('selected') ){
					$('.option-1, .option-2, .option-3, .option-4, .option-5').removeClass('selected');
				}
			}, 500);
		});
		

			//fix lateral filter and gallery on scrolling
			// $(window).on('scroll', function(){
			// 	(!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
			// });

			// function fixGallery() {
			// 	var offsetTop = $('.cd-main-content').offset().top,
			// 		scrollTop = $(window).scrollTop();
			// 	( scrollTop >= offsetTop ) ? $('.cd-main-content').addClass('is-fixed') : $('.cd-main-content').removeClass('is-fixed');
			// }

			/************************************
				MitItUp filter settings
				More details: 
				https://mixitup.kunkalabs.com/
				or:
				http://codepen.io/patrickkunka/
			*************************************/

			buttonFilter.init();
			$('.cd-gallery ul').mixItUp({
			    controls: {
			    	enable: false
			    },
			    callbacks: {
			    	onMixStart: function(){
			    		$('.cd-fail-message').fadeOut(200);
			    	},
			      	onMixFail: function(){
			      		$('.cd-fail-message').fadeIn(200);
			    	}
			    }
			});

			//search filtering
			//credits http://codepen.io/edprats/pen/pzAdg
			var inputText;
			var $matching = $();

			var delay = (function(){
				var timer = 0;
				return function(callback, ms){
					clearTimeout (timer);
				    timer = setTimeout(callback, ms);
				};
			})();

			$(".cd-filter-content input[type='search']").keyup(function(){
			  	// Delay function invoked to make sure user stopped typing
			  	delay(function(){
			    	inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
			   		// Check to see if input field is empty
			    	if ((inputText.length) > 0) {            
			      		$('.mix').each(function() {
				        	var $this = $(this);
				        
				        	// add item to be filtered out if input text matches items inside the title   
				        	if($this.attr('class').toLowerCase().match(inputText)) {
				          		$matching = $matching.add(this);
				        	} else {
				          		// removes any previously matched item
				          		
				        	}
			      		});
			      		$('.cd-gallery ul').mixItUp('filter', $matching);
			    	} else {
			      		// resets the filter to show all item if input is empty
			      		$('.cd-gallery ul').mixItUp('filter', 'all');
			    	}
			  	}, 200 );
			});
		});

	/*****************************************************
		MixItUp - Define a single object literal 
		to contain all filter custom functionality
	*****************************************************/
	var buttonFilter = {
	  	// Declare any variables we will need as properties of the object
	  	$filters: null,
	  	groups: [],
	  	outputArray: [],
	  	outputString: '',
	  
	  	// The "init" method will run on document ready and cache any jQuery objects we will need.
	  	init: function(){
	    	var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
	    
	    	self.$filters = $('.cd-main-content');
	    	self.$container = $('.cd-gallery ul');
	    
		    self.$filters.find('.cd-filters').each(function(){
		      	var $this = $(this);
		      
			    self.groups.push({
			        $inputs: $this.find('.filter'),
			        active: '',
			        tracker: false
			    });
		    });
		    
		    self.bindHandlers();
	  	},
	  
	  	// The "bindHandlers" method will listen for whenever a button is clicked. 
	  	bindHandlers: function(){
	    	var self = this;

	    	self.$filters.on('click', 'a', function(e){
		      	self.parseFilters();
	    	});
		    self.$filters.on('change', function(){
		      self.parseFilters();           
		    });
	  	},
	  
	  	parseFilters: function(){
		    var self = this;
		 
		    // loop through each filter group and grap the active filter from each one.
		    for(var i = 0, group; group = self.groups[i]; i++){
		    	group.active = [];
		    	group.$inputs.each(function(){
		    		var $this = $(this);
		    		if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
		    			if($this.is(':checked') ) {
		    				group.active.push($this.attr('data-filter'));
		    			}
		    		} else if($this.is('select')){
		    			group.active.push($this.val());
		    		} else if( $this.find('.selected').length > 0 ) {
		    			group.active.push($this.attr('data-filter'));
		    		}
		    	});
		    }
		    self.concatenate();
	  	},
	  
	  	concatenate: function(){
	    	var self = this;
	    
	    	self.outputString = ''; // Reset output string
	    
		    for(var i = 0, group; group = self.groups[i]; i++){
		      	self.outputString += group.active;
		    }
	    
		    // If the output string is empty, show all rather than none:    
		    !self.outputString.length && (self.outputString = 'all'); 
		
	    	// Send the output string to MixItUp via the 'filter' method:    
			if(self.$container.mixItUp('isLoaded')){
		    	self.$container.mixItUp('filter', self.outputString);
			}
	  	}
	};































	