jQuery(document).ready(function($) {
	

	//Detach Case Studies
	



	//The variables below are given to each slide movement depending on the screen size


			if (window.matchMedia("(max-device-width: 667px)").matches){
				
				document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

				var  
					 altEase = Linear.easeNone,
					 altEaseOut = Linear.easeNone;



			} else if (window.matchMedia("(max-width: 980px)").matches){
				
				document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

				var  
					 altEase = Linear.easeNone,
					 altEaseOut = Linear.easeNone;



			} else if (window.matchMedia("(max-width: 1024px)").matches){


				document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

				var  
					 altEase = Linear.easeNone,
					 altEaseOut = Linear.easeNone;


			} else if ($(window).width() >= 1025 && $(window).width() <= 1279){
	
				var  
					 altEase = Sine.easeInOut,
					 altEaseOut = Sine.easeOut;

			} else if ($(window).width() >= 1280 && $(window).width() <= 1366){
	
				var  
					 altEase = Sine.easeInOut,
					 altEaseOut = Sine.easeOut;

				


			}
			else if ($(window).width() >= 1367 && $(window).width() <= 1599){
	
				var  
					 altEase = Sine.easeInOut,
					 altEaseOut = Sine.easeOut;

				// Use Case Click Functions
		
					var weightCase = $('#weight-case').detach();
					
					$('.mix').click(function(){
						var pageContent = $('.page-content').detach();
						$('.cases-container').append(weightCase);
						$('body').unbind();
						$('body').css({
							overflowX: 'auto',
							width: '1070vw'
						});
						$('body').bind();  

						$('.case-close').click(function(){
							$('#weight-case').detach();
							$('.main').append(pageContent);
							$('body').css({
							overflow: 'hidden',
							width: '100vw'
						});
							requestAnimationFrame(move);
						});

						// jQuery.scrollSpeed(20, 20);
						//Scrollmagic Starts HERE

						  // Init ScrollMagic Controller
						  var scrollMagicController = new ScrollMagic.Controller({vertical: false});
						  
						  // Create Animation for 0.5s
						  var tween = TweenMax.fromTo('.mainline1', 0.5, {drawSVG:'60%'}, {drawSVG:'100%'} );
						  
						  // Create the Scene and trigger when visible
						  var scene = new ScrollMagic.Scene({
						    triggerElement: '#trigger1',
						    duration: 800,
						    offset: 150 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween);


						var tween1a = TweenMax.fromTo('.mainline1a', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );

						 var scene1a = new ScrollMagic.Scene({
						    triggerElement: '#trigger1a',
						    duration: 1500,
						    offset: -100 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween1a);

						 var scene1aa = new ScrollMagic.Scene({
						   triggerElement: '#target-1',
						   duration:500,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						 var scene1ab = new ScrollMagic.Scene({
						   triggerElement: '#target-1',
						   duration:500,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-1');

						 var tween1b = TweenMax.fromTo('.mainline1b', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						 var scene1b = new ScrollMagic.Scene({
						    triggerElement: '#target-1',
						    duration: 1500,
						    offset: 1100 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween1b);

						 var tween2 = TweenMax.fromTo('.mainline2', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );

						 var scene2 = new ScrollMagic.Scene({
						    triggerElement: '#target-2',
						    duration: 1000,
						    offset: 0 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2);

						 var tween2a = TweenMax.fromTo('.mainline2a', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						 var scene2a = new ScrollMagic.Scene({
						    triggerElement: '#target-2',
						    duration: 600,
						    offset: 500 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2a);


						 var tween2b = TweenMax.fromTo('.mainline2b', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						 var scene2b = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 500,
						    offset: -600 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2b);

						var scene2aa = new ScrollMagic.Scene({
						   triggerElement: '#target-2',
						   duration:500,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						 var scene2ab = new ScrollMagic.Scene({
						   triggerElement: '#target-2',
						   duration:500,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-2');

						 var tween2c = TweenMax.fromTo('.mainline2c', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						 var scene2c = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 500,
						    offset: -100 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2c);

						 var tween3 = TweenMax.fromTo('.mainline3', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 97%"} );
						  
						 var scene3 = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 800,
						    offset: -100 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween3);

						var tween3a = TweenMax.fromTo('.mainline3a', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );
						  
						var scene3a = new ScrollMagic.Scene({
						   triggerElement: '#target-3',
						   duration: 700,
						   offset: 300 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween3a);


						var tween3b = TweenMax.fromTo('.mainline3b', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} ); 
						  
						 var scene3b = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 1300,
						    offset: 620 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween3b);

						var scene3ba = new ScrollMagic.Scene({
						   triggerElement: '#target-3',
						   duration:500,
						   offset: 620 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						 var scene3bb = new ScrollMagic.Scene({
						   triggerElement: '#target-3',
						   duration:500,
						   offset: 620 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-3');

						var tween3c = TweenMax.fromTo('.mainline3c', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						var scene3c = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 800,
						   offset: -1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween3c);

						var tween3d = TweenMax.fromTo('.mainline3d', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						var scene3d = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 900,
						   offset: -300 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween3d);

						 var scene3da = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 200,
						   offset: -1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-4');

						var tween4 = TweenMax.fromTo('.mainline4', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );
						  
						var scene4 = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 1000,
						   offset: 0 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween4);

						 var scene4aa = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 500,
						   offset: 800 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-4');

						 var scene4ab = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 3600,
						   offset: 1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						var tween4a = TweenMax.fromTo('.mainline4a', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );
						  
						var scene4a = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 700,
						   offset: 400 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween4a);

						var tween5 = TweenMax.fromTo('.mainline5', 5, {y:0}, {y:'-100%'} );
						  
						var scene5 = new ScrollMagic.Scene({
						   triggerElement: '#target-5',
						   duration: 3500,
						   offset: 0 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween5);

						 var scene5aa = new ScrollMagic.Scene({
						   triggerElement: '#target-5',
						   duration: 250,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-5');

						 var scene5ab = new ScrollMagic.Scene({
						   triggerElement: '#target-6',
						   duration: 200,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-6');

						var tween6 = TweenMax.fromTo('.mainline6', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						var scene6 = new ScrollMagic.Scene({
						   triggerElement: '#target-6',
						   duration: 600,
						   offset: 800 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween6);

						var tween6a = TweenMax.fromTo('.mainline6a', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						var scene6a = new ScrollMagic.Scene({
						   triggerElement: '#target-6',
						   duration: 1100,
						   offset: 1400 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween6a);

						var timeline7 = new TimelineMax();

						timeline7.add( TweenMax.fromTo('.mainline7', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7a', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7b', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7c', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7d', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7e', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7f', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7g', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7h', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );

						var scene7 = new ScrollMagic.Scene({
						   triggerElement: '#target-7',
						   duration: 1100,
						   offset: 0 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(timeline7);

						var timeline8 = new TimelineMax();

						timeline8.add( TweenMax.fromTo('.mainline8', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8a', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8b', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8c', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8d', .5, {y:0}, {y:'-100%'}) );

						 var scene7a = new ScrollMagic.Scene({
						   triggerElement: '#target-7',
						   duration:1165,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(timeline8)
						 .setPin('.svg-container');

						 var scene7b = new ScrollMagic.Scene({
						   triggerElement: '#target-7',
						   duration:1165,
						   offset: 600 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-7');
						 
						 scrollMagicController.addScene([
						  scene,
						  scene1a,
						  scene1aa,
						  scene1ab,
						  scene1b,
						  scene2,
						  scene2a,
						  scene2aa,
						  scene2ab,
						  scene2b,
						  scene2c,
						  scene3,
						  scene3a,
						  scene3b,
						  scene3ba,
						  scene3bb,
						  scene3c,
						  scene3d,
						  scene3da,
						  scene4,
						  scene4aa,
						  scene4ab,
						  scene4a,
						  // scene4b,
						  scene5aa, 
						  scene5, 
						  scene5ab, 
						  scene6,
						  scene6a,
						  scene7,
						  scene7a,
						  scene7b
						]);

					});

			} else if(window.matchMedia("(min-width: 1600px)").matches){
			
				var  
					 altEase = Sine.easeInOut, 
					 altEaseOut = Sine.easeOut;

				// Use Case Click Functions
		
					var weightCase = $('#weight-case').detach();
					
					$('.mix').click(function(){
						var pageContent = $('.page-content').detach();
						$('.cases-container').append(weightCase);
						$('body').unbind();
						$('body').css({
							overflowX: 'auto',
							width: '900vw'
						});
						$('body').bind();

						$('.case-close').click(function(){
							$('#weight-case').detach();
							$('.main').append(pageContent);
							$('body').css({
							overflow: 'hidden',
							width: '100vw'
						});
							requestAnimationFrame(move);
						});

						// jQuery.scrollSpeed(20, 20);
						//Scrollmagic Starts HERE

						  // Init ScrollMagic Controller
						  var scrollMagicController = new ScrollMagic.Controller({vertical: false});
						  
						  // Create Animation for 0.5s
						  var tween = TweenMax.fromTo('.mainline1', 0.5, {drawSVG:'60%'}, {drawSVG:'100%'} );
						  
						  // Create the Scene and trigger when visible
						  var scene = new ScrollMagic.Scene({
						    triggerElement: '#trigger1',
						    duration: 1500,
						    offset: 150 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween);


						var tween1a = TweenMax.fromTo('.mainline1a', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );

						 var scene1a = new ScrollMagic.Scene({
						    triggerElement: '#trigger1a',
						    duration: 1500,
						    offset: 150 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween1a);

						 var scene1aa = new ScrollMagic.Scene({
						   triggerElement: '#target-1',
						   duration:500,
						   offset: 1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						 var scene1ab = new ScrollMagic.Scene({
						   triggerElement: '#target-1',
						   duration:500,
						   offset: 1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-1');

						 var tween1b = TweenMax.fromTo('.mainline1b', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						 var scene1b = new ScrollMagic.Scene({
						    triggerElement: '#target-1',
						    duration: 2500,
						    offset: 1000 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween1b);

						 var tween2 = TweenMax.fromTo('.mainline2', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );

						 var scene2 = new ScrollMagic.Scene({
						    triggerElement: '#target-2',
						    duration: 1900,
						    offset: -500 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2);

						 var tween2a = TweenMax.fromTo('.mainline2a', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						 var scene2a = new ScrollMagic.Scene({
						    triggerElement: '#target-2',
						    duration: 600,
						    offset: 500 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2a);


						 var tween2b = TweenMax.fromTo('.mainline2b', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						 var scene2b = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 800,
						    offset: -1200 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2b);

						var scene2aa = new ScrollMagic.Scene({
						   triggerElement: '#target-2',
						   duration:500,
						   offset: 1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						 var scene2ab = new ScrollMagic.Scene({
						   triggerElement: '#target-2',
						   duration:500,
						   offset: 1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-2');

						 var tween2c = TweenMax.fromTo('.mainline2c', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						 var scene2c = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 600,
						    offset: -400 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween2c);

						 var tween3 = TweenMax.fromTo('.mainline3', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 97%"} );
						  
						 var scene3 = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 700,
						    offset: -60 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween3);

						var tween3a = TweenMax.fromTo('.mainline3a', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );
						  
						var scene3a = new ScrollMagic.Scene({
						   triggerElement: '#target-3',
						   duration: 400,
						   offset: 300 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween3a);


						var tween3b = TweenMax.fromTo('.mainline3b', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						 var scene3b = new ScrollMagic.Scene({
						    triggerElement: '#target-3',
						    duration: 1100,
						    offset: 420 /* offset the trigger 150px below #scene's top */
						  })
						  .setTween(tween3b);

						var scene3ba = new ScrollMagic.Scene({
						   triggerElement: '#target-3',
						   duration:500,
						   offset: 950 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						 var scene3bb = new ScrollMagic.Scene({
						   triggerElement: '#target-3',
						   duration:500,
						   offset: 950 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-3');

						var tween3c = TweenMax.fromTo('.mainline3c', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );

						var scene3c = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 800,
						   offset: -1800 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween3c);

						var tween3d = TweenMax.fromTo('.mainline3d', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						var scene3d = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 900,
						   offset: -1000 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween3d);

						var tween4 = TweenMax.fromTo('.mainline4', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );
						  
						var scene4 = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 1000,
						   offset: 0 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween4);

						var tween4a = TweenMax.fromTo('.mainline4a', 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );
						  
						var scene4a = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration: 700,
						   offset: 400 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween4a);

						var scene4b = new ScrollMagic.Scene({
						   triggerElement: '#target-4',
						   duration:5100,
						   offset: 1100 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.svg-container');

						var tween5 = TweenMax.fromTo('.mainline5', 5, {y:0}, {y:'-100%'} );
						  
						var scene5 = new ScrollMagic.Scene({
						   triggerElement: '#target-5',
						   duration: 6300,
						   offset: -500 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween5);

						var tween6 = TweenMax.fromTo('.mainline6', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						var scene6 = new ScrollMagic.Scene({
						   triggerElement: '#target-6',
						   duration: 600,
						   offset: 800 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween6);

						var tween6a = TweenMax.fromTo('.mainline6a', 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"} );
						  
						var scene6a = new ScrollMagic.Scene({
						   triggerElement: '#target-6',
						   duration: 1100,
						   offset: 1400 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(tween6a);

						var timeline7 = new TimelineMax();

						timeline7.add( TweenMax.fromTo('.mainline7', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7a', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7b', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7c', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7d', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7e', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7f', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7g', .5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%'}) );
						timeline7.add( TweenMax.fromTo('.mainline7h', .5, {drawSVG:'100% 100%'}, {drawSVG:'0% 100%'}) );

						var scene7 = new ScrollMagic.Scene({
						   triggerElement: '#target-7',
						   duration: 1100,
						   offset: 0 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(timeline7);

						var timeline8 = new TimelineMax();

						timeline8.add( TweenMax.fromTo('.mainline8', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8a', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8b', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8c', .5, {y:0}, {y:'-100%'}) );
						timeline8.add( TweenMax.fromTo('.mainline8d', .5, {y:0}, {y:'-100%'}) );

						 var scene7a = new ScrollMagic.Scene({
						   triggerElement: '#target-7',
						   duration:1165,
						   offset: 1100 /* offset the trigger 150px below #scene's top */
						 })
						 .setTween(timeline8)
						 .setPin('.svg-container');

						 var scene7b = new ScrollMagic.Scene({
						   triggerElement: '#target-7',
						   duration:1165,
						   offset: 1100 /* offset the trigger 150px below #scene's top */
						 })
						 .setPin('.text-7');
						 
						 scrollMagicController.addScene([
						  scene,
						  scene1a,
						  scene1aa,
						  scene1ab,
						  scene1b,
						  scene2,
						  scene2a,
						  scene2aa,
						  scene2ab,
						  scene2b,
						  scene2c,
						  scene3,
						  scene3a,
						  scene3b,
						  scene3ba,
						  scene3bb,
						  scene3c,
						  scene3d,
						  scene4,
						  scene4a,
						  scene4b,
						  scene5, 
						  scene6,
						  scene6a,
						  scene7,
						  scene7a,
						  scene7b
						]);

					});
			}
	

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
		
		$('#nav-trigger, #burger, .nav-logo, nav .close').click(function(){
			$('#menu, nav .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');
		});
	
	// Page Navigation
	
		$('#menu li:eq(0)').click(function(){
			$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');

			TweenMax.to('#section-1', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
			TweenMax.set(['#section-2, #section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:0});
			TweenMax.to('.bg', .5, {alpha:.5});
			$('.section').removeClass('is-current-section is-next-section is-previous-section');
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
			TweenMax.set(['#section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:1});
			TweenMax.to('.bg', .5, {alpha:.15});
			$('.section').removeClass('is-current-section is-next-section is-previous-section');
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
			TweenMax.set(['#section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:1});
			TweenMax.to('.bg', .5, {alpha:.15});
			$('.section').removeClass('is-current-section is-next-section is-previous-section');
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
			TweenMax.set(['#section-5, #section-6, #section-7'], {y:'100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:1});
			TweenMax.to('.bg', .5, {alpha:.15});
			$('.section').removeClass('is-current-section is-next-section is-previous-section');
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
			TweenMax.set(['#section-6, #section-7'], {y:'100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:1});
			TweenMax.to('.bg', .5, {alpha:.15});
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

			TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
			TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5'], {y:'-100%', alpha:0});
			TweenMax.set('#section-7', {y:'100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:1});
			TweenMax.to('.bg', .5, {alpha:.15});
			$('.section').removeClass('is-current-section is-next-section is-previous-section');
			setTimeout(function(){
				$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
				$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
				$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
			}, 860); 
		});

		$('#menu li:eq(6)').click(function(){
			$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');

			TweenMax.to('#section-7', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
			TweenMax.set(['#section-1, #section-2, #section-3, #section-4, #section-5, #section-6'], {y:'-100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:1});
			TweenMax.to('.bg', .5, {alpha:.15});
			$('.section').removeClass('is-current-section is-next-section is-previous-section');
			setTimeout(function(){
				$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
				$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
			}, 860); 
		});

		$('#down').click(function(){

			TweenMax.to('#section-2', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});
			TweenMax.set('#section-1', {y:'-100%', alpha:0});
			TweenMax.set(['#section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});

			TweenMax.to('.global-logo', .5, {alpha:1});
			TweenMax.to('.bg', .5, {alpha:.15});
			$('.section').removeClass('is-current-section is-next-section is-previous-section');
			setTimeout(function(){
				$('#section-1').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
				$('#section-2').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
				$('#section-3').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
			}, 860); 
		});
				



	//Initial Scroll Function for sectios 1-7
			
			TweenMax.set(['#section-2, #section-3, #section-4, #section-5, #section-6, #section-7'], {y:'100%', alpha:0});
			TweenMax.set('.global-logo', {alpha:0});
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

					TweenMax.to('.global-logo', .5, {alpha:0});
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

					TweenMax.to('.global-logo', .5, {alpha:1});
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

					$('#section-6').scrollTop(0);
					TweenMax.to('#section-5', speed, {y: '-100%', alpha:0,  ease:altEaseOut});
					TweenMax.to('#section-6', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-6').scrollTop(0);
						$('#section-5').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
						$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					}, 860);
				
				} else if($('#section-6').hasClass('is-current-section')){

					TweenMax.to('#section-6', speed, {y: '-100%', alpha:0,  ease:altEaseOut});
					TweenMax.to('#section-7', .85, {y:'0%', alpha:1, ease:altEase, delay:.1});

					setTimeout(function(){
						$('#section-6').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
						$('#section-7').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
					}, 860);
				
				} else if($('#section-7').hasClass('is-current-section')){

				
				} 

			}

			var status = 0;

			// Stop Scroll / Key Backup

		function move(){


			$('body').bind('mousewheel keydown', function(e) {

					if (status === 0) {
						
						if( (e.originalEvent.wheelDelta / 120 > 0 || e.keyCode === 38  || e.keyCode === 37) && !$('#section-6').hasClass('is-current-section') ) {

							status = 1;
							checkSlideUp();

							setTimeout(function(){
								// alert('times up!');
								status=0;
							},1500);

						} else if ( (e.originalEvent.wheelDelta / 120 > 0 || e.keyCode === 38  || e.keyCode === 37) && $('#section-6').hasClass('is-current-section')){

								

							if( $('#section-6').scrollTop() === 0 ) {
								console.log($('#section-6').scrollTop());
					         	// up
					        	status = 1;
								checkSlideUp();

								setTimeout(function(){
									// alert('times up!');
									status=0;
								},1500);
							}
							
				        } else if( (e.originalEvent.wheelDelta / 120 < 0 || e.keyCode === 40  || e.keyCode === 39) && !$('#section-6').hasClass('is-current-section') ){

							status=1;

							$('#section-6').unbind();

							checkSlideDown();
							$('#section-6').scrollTop(0);

							setTimeout(function(){
								// alert('times up!');
								status=0;
								$('#section-6').bind();



							},1500);

						} else {

						}

					} else if( (e.originalEvent.wheelDelta / 120 < 0 || e.keyCode === 40  || e.keyCode === 39) && $('#section-6').hasClass('is-current-section') ){

							if( $('#section-6').scrollTop >= ($('#section-6').scrollHeight - $('#section-6').offsetHeight) ) {

								status=1;
								checkSlideDown();

								setTimeout(function(){
									// alert('times up!');
									status=0;
								},1500);

							} else {

							}

					} else if (status > 0){
						//do nothing
						console.log('waiting');
					}

			});

		}

		requestAnimationFrame(move);

			//For Mobile Devices

			$(window).on('touchstart', function(e) {

			    var swipe = e.originalEvent.touches,
			    start = swipe[0].pageY;

			    $(this).on('touchmove', function(e) {
			    	if (status === 0) {
				        var contact = e.originalEvent.touches,
				        end = contact[0].pageY,
				        distance = end-start;

				        if (distance < -30  && !$('#section-6').hasClass('is-current-section')){
				        	//up
				        	status = 1;
							checkSlideUp();

							setTimeout(function(){
								// alert('times up!');
								status=0;
							},2000);
				        } else if (distance < -30 && $('#section-6').hasClass('is-current-section')){
				         	

				        	$('#section-6').scroll(function(){
								var scrollTop = $(this).scrollTop();
								console.log(scrollTop);
								var topDistance = $(this).offset().top;


								
								if( topDistance === 0 ) {
									console.log('scroll:', topDistance)
						         	// up
						        	status=1;
									checkSlideUp();
									setTimeout(function(){
										// alert('times up!');
										status=0;
									},2000);
								}
							});

				        } else if (distance > 30){
				         	// down
				        	status=1;
							checkSlideDown();
							setTimeout(function(){
								// alert('times up!');
								status=0;
							},2000);
				        } else{

				        }
				    }  else if (status > 0){
						//do nothing
						console.log('waiting');
					}
			    })
			    .one('touchend', function() {

			        $(this).off('touchmove touchend');
			    });
			});

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

	