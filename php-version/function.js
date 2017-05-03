jQuery(document).ready(function($) {

    // Get IE or Edge browser version
    var version = detectIE();

    if (version === false) {
      $('html').removeClass('ie10');
    } else if (version >= 12) {
      // $('body').attr('onmousewheel', 'move()');
      $('html').addClass('ie10');
      $('#map').replaceWith( "<img id='map' src='app/images/dotted-map.svg'>" );
    } else {
      // alert('You are using IE 10');
      $('html').addClass('ie10');
      $('#map').replaceWith( "<img id='map' src='app/images/dotted-map.svg'>" );
      // $('body').attr('onmousewheel', 'move()');
    };

    // add details to debug result
    // document.getElementById('').innerHTML = window.navigator.userAgent;

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
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
    };

    $('#post, #post2').css('display', 'inherit');

    var isMobile = {
        detectMobile: function() {
            return navigator.userAgent.match(/Mobi/i);
        }
    }


    TweenMax.set("#events", { x: "100%", alpha: 1 }); 
    var ease1 = Sine.easeOut,
        ease2 = Sine.easeInOut,
        speed = .85,
        sections = $('#section-1, #section-2, #section-3, #section-4, #section-5, #section-6, #section-7'),
        internalPages = $('#main .container').detach(),
        eventsPage = $('#news-events .container').detach();

    $('#main').append(internalPages); 

        
    TweenMax.set(["#section-2, #section-3, #section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 }); 
    TweenMax.set("#comcast-logo", { alpha: 0 }); 
    TweenMax.set(".bg", { alpha: .5 });

    function toggleEvents() {

        if($('#news-events').hasClass('event-is-inactive')){
            //do nothing
        } else if(!$('#news-events').hasClass('event-is-inactive')){
            $('#main').append(internalPages);
            TweenMax.to("#events", speed, { x: "120%", ease: ease1 });
            TweenMax.set(".section", { x: "0%"});
            document.title = 'Comcast machineQ';

            setTimeout(function(){
                $('#news-events').addClass('event-is-inactive').removeClass('event-is-active');
            }, 1200); 
            setTimeout(function(){
                $('#news-events .container').detach();
            }, 1300); 
        }
    }

    var iconclicked = 0;

    function checkSlideUp() {

        if( $("#section-1").hasClass("is-current-section") ){

            console.log("You've reached the top.");

            setTimeout(function() {
            $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
            $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
            }, 860);

        } else if( $("#section-2").hasClass("is-current-section") ){

            TweenMax.to("#section-2", speed, { y: "100%", alpha: 0, ease: ease1 });
            TweenMax.to("#section-1", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.to("#comcast-logo", .5, { alpha: 0 });
            TweenMax.to(".bg", .5, { alpha: .5 });

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section"); 
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
            }, 860);

        } else if( $("#section-3").hasClass("is-current-section") ){ 

            TweenMax.to("#section-3", speed, { y: "100%", alpha: 0, ease: ease1 });
            TweenMax.to("#section-2", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 }); 

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        } else if( $("#section-4").hasClass("is-current-section") ){ 

            TweenMax.to("#section-4", speed, { y: "100%", alpha: 0, ease: ease1 }); 
            TweenMax.to("#section-3", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 }); 

            setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860); 

        } else if( $("#section-5").hasClass("is-current-section") ){

            TweenMax.to("#section-5", speed, { y: "100%", alpha: 0, ease: ease1 });
            TweenMax.to("#section-4", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 }); 

            setTimeout(function() {
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section"); 
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        } 
        // else if( $("#section-6").hasClass("is-current-section") ){ 

        //     TweenMax.to("#section-6", speed, { y: "100%", alpha: 0, ease: ease1 }); 
        //     TweenMax.to("#section-5", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 }); 

        //     setTimeout(function() {
        //         $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section"); 
        //         $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section"); 
        //         $("#section-6").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
        //     }, 860);

        // } 
        else if( $("#section-7").hasClass("is-current-section") ){

            TweenMax.to("#section-7", speed, { y: "100%", alpha: 0, ease: ease1 });
            TweenMax.to("#section-5", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });

            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);
        }

    }

    function checkSlideDown() {

        if ( $("#section-1").hasClass("is-current-section") ){ 

            TweenMax.to("#section-1", speed, { y: "-100%", alpha: 0, ease: ease1 }); 
            TweenMax.to("#section-2", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 }); 

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        } else if( $("#section-2").hasClass("is-current-section") ){ 

            TweenMax.to("#section-2", speed, { y: "-100%", alpha: 0, ease: ease1 });
            TweenMax.to("#section-3", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 }); 

            setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        } else if( $("#section-3").hasClass("is-current-section") ){ 

            TweenMax.to("#section-3", speed, { y: "-100%", alpha: 0, ease: ease1 });
            TweenMax.to("#section-4", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });

            setTimeout(function() {
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        } else if( $("#section-4").hasClass("is-current-section") ){

            TweenMax.to("#section-4", speed, { y: "-100%", alpha: 0, ease: ease1 });
            TweenMax.to("#section-5", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });

            setTimeout(function() {
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-6").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        } else if( $("#section-5").hasClass("is-current-section") ){

            TweenMax.to("#section-5", speed, { y: "-100%", alpha: 0, ease: ease1 }); 
            TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 }); 

            $("#c1").addClass("fadein-1");
            $("#c2").addClass("fadein-2");
            $("#c3").addClass("fadein-3");
            $("#c4").addClass("fadein-4");
            $("#c5").addClass("fadein-5");
            $("#map-title").addClass("fadein");

            setTimeout(function() {
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
            }, 860);

        } 
        // else if( $("#section-6").hasClass("is-current-section") ){ 

        //     $("#section-7").scrollTop(0); 

        //     TweenMax.to("#section-6", speed, { y: "-100%", alpha: 0, ease: ease1 });
        //     TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });

        //     $("#c1").addClass("fadein-1");
        //     $("#c2").addClass("fadein-2");
        //     $("#c3").addClass("fadein-3");
        //     $("#c4").addClass("fadein-4");
        //     $("#c5").addClass("fadein-5");
        //     $("#map-title").addClass("fadein");

        //     setTimeout(function() {
        //         $("#section-7").scrollTop(0);
        //         $("#section-6").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
        //         $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
        //         $("#section-8").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
        //     }, 860);

        // } 

        else if( $("#section-7").hasClass("is-current-section") ){

            console.log("You've reached the bottom.");
        }
    }

    var status = 0;

    // Stop Scroll / Key Backup

    function move(){

        if ($('html').hasClass('ie10')) {
        

                $('body').bind('mousewheel keydown', function(e) {

                    if (status === 0 && $('#menu').hasClass('nav-is-inactive') && $('#contact').hasClass('contact-is-inactive') && !$('#news-events').hasClass('event-is-active')) {
                        
                        if(e.deltaY < 0 || e.keyCode === 40  || e.keyCode === 39) {
                            console.log(e.deltaY);
                            status=1;
                            checkSlideDown();
                            setTimeout(function(){

                                status=0;
                            },2000);


                        } else if(e.deltaY > 0 || e.keyCode === 38  || e.keyCode === 37){

                            status = 1;
                            checkSlideUp();

                            setTimeout(function(){

                                status=0;
                            },2000);

                        } else {
                            status = 1;
                            checkSlideUp();

                            setTimeout(function(){

                                status=0;
                            },2000);
                        }
                        return false;

                    } else if (status > 0){
                        //do nothing
                        // console.log('waiting');
                    }


            });

        } 
        else if(/Firefox/i.test(navigator.userAgent)){

                $('body').bind('DOMMouseScroll keydown', function(e) {

                var delta = e.detail < 0 || e.wheelDelta > 0 ? 1: -1;

                    if (status === 0 && $('#menu').hasClass('nav-is-inactive') && $('#contact').hasClass('contact-is-inactive') && !$('#news-events').hasClass('event-is-active')) {
                        
                        if(delta < 0 || e.keyCode === 40  || e.keyCode === 39) {

                            status=1;
                            checkSlideDown();
                            setTimeout(function(){

                                status=0;
                            },2000);


                            

                        } else if(e.keyCode === 38  || e.keyCode === 37){

                            status = 1;
                            checkSlideUp();

                            setTimeout(function(){

                                status=0;
                            },2000);

                        } else {
                            status = 1;
                            checkSlideUp();

                            setTimeout(function(){

                                status=0;
                            },2000);
                        }

                    } else if (status > 0){
                        //do nothing
                        console.log('waiting');
                    }

            });
        } else {

            $('body').bind('mousewheel keydown', function(e) {

                if (status === 0 && $('#menu').hasClass('nav-is-inactive') && $('#contact').hasClass('contact-is-inactive') && !$('#news-events').hasClass('event-is-active')) {
                    
                    if(e.originalEvent.wheelDelta / 120 > 0 || e.keyCode === 38  || e.keyCode === 37 || $('body').hasClass('swiped-left')) {

                        status = 1;
                        checkSlideUp();

                        setTimeout(function(){

                            status=0;
                        },2000);

                    } else if(e.originalEvent.wheelDelta / 120 < 0 || e.keyCode === 40  || e.keyCode === 39){

                        status=1;
                        checkSlideDown();
                        setTimeout(function(){

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

    }

    var touchReg = false;

    if( isMobile.detectMobile() ) {

        $("#section-4 h1.title").html("FIT FOR YOUR<br />WORKFLOW");
        
        var ts;
        $('body').bind('touchstart', function (event){
           ts = event.originalEvent.touches[0].clientY;
        });

        // var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());

        // if (isWindowsPhone) {
        //     $('body').bind('touchmove', function (event){

        //         var te = event.originalEvent.changedTouches[0].clientY;

        //         if (status === 0  && $('#menu').hasClass('nav-is-inactive') && $('#contact').hasClass('contact-is-inactive') && !$('#news-events').hasClass('event-is-active')) {

        //             if (ts > te+5){

        //                 touchReg = true;
        //                 status = 1;
        //                 checkSlideDown();

        //                 setTimeout(function(){
        //                     status=0;
        //                 },850);

        //             } else if (ts < te-5) {
                        
        //               status = 1;
        //               checkSlideUp();

        //               setTimeout(function(){
        //                 status=0;
        //               },850);

        //            }
                
        //         } else if (status > 0){
        //             //do nothing
        //             console.log('waiting');
        //         }
        //     });
          
        // } else{

            $('body').bind('touchmove', function (event){

               var te = event.originalEvent.changedTouches[0].clientY;

               if (touchReg == false && status === 0  && $('#menu').hasClass('nav-is-inactive') && $('#contact').hasClass('contact-is-inactive') && !$('#news-events').hasClass('event-is-active')) {

                    $(this).on('touchend touchcancel', function(){
                        touchReg = false;
                    });

                    if (ts > te+5){

                        touchReg = true;
                        status = 1;
                        counterSlide = 1;
                        checkSlideDown();

                        setTimeout(function(){
                            status=0;
                        },850);

                    } else if (ts < te-5) {

                      touchReg = true;
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
        // };

        $('.cd-filter-trigger').bind("touchend", function(e) {
            triggerFilter(true);
        });
        $('.cd-filter .cd-close').bind("touchend", function(e) {
            triggerFilter(false);

        });

        $("#events-link").bind("touchend", function(e) {
            
            // this should be the Ajax Method.
            // and load the url content
            // 
            document.title = 'Comcast machineQ | Events';
            window.location.hash.replace(/^#/, "")
            
            $('#burger').addClass('back-button-active');
            $('#news-events').append(eventsPage);
            TweenMax.to(".section", speed, { x: "-100%", ease: ease1 });
            TweenMax.to(".bg", .5, { alpha: .25, delay: .1});
            TweenMax.to("#events", speed, { x: "0%", alpha: 1, ease: ease2, delay: .1 });
            

            setTimeout(function(){
                $('#main .container').detach();
                $('#news-events').removeClass('event-is-inactive').addClass('event-is-active'); 
            }, 1200);
            
            
            // e.preventDefault();
            
            // var targetUrl = $(this).attr('href'),
            //     targetTitle = $(this).attr('title');
            
            // window.history.pushState({url: "" + targetUrl + ""}, targetTitle, targetUrl);
            // setCurrentPage(targetUrl);

            // window.onpopstate = function(e) {
            //     setCurrentPage(e.state ? e.state.url : null);
            // };
   
        });

        // CTA Arrow fix for ios devices
        function iOSversion() {

        if (/iPhone/.test(navigator.userAgent) && !window.MSStream && window.orientation !== 0) {
           $('.cta, #copyright-links').addClass('ios-fix');
           $('#em-container .molecule img').attr('src', 'app/images/molecules-01.svg');
            $('#metering-container .molecule img').attr('src', 'app/images/molecules-02.svg');
            $('#at-container .molecule img').attr('src', 'app/images/molecules-03.svg');
        }
        else if (/iPhone/.test(navigator.userAgent) && !window.MSStream && window.orientation == 0) {
            $('.cta, #copyright-links').addClass('ios-fix');
            $('#em-container .molecule img').attr('src', 'app/images/molecules-01-long.svg');
            $('#metering-container .molecule img').attr('src', 'app/images/molecules-02-long.svg');
            $('#at-container .molecule img').attr('src', 'app/images/molecules-03-long.svg');
           
        }
        else if (/iPad|iPod/.test(navigator.userAgent) && !window.MSStream) {
            $('.cta, #copyright-links').addClass('ios-fix');
            $('#em-container .molecule img').attr('src', 'app/images/molecules-01-long.svg');
            $('#metering-container .molecule img').attr('src', 'app/images/molecules-02-long.svg');
            $('#at-container .molecule img').attr('src', 'app/images/molecules-03-long.svg');
           
        }
          return 'Not an iOS device';
        }

        iOSversion();

        $(window).on("orientationchange", function(){
            iOSversion();
        });


        $('.select-option').bind("touchend", function(e) {
            $('ul.select-dropdown').toggleClass('dropdown-active'); 

            var selectedText = $(this).text();

            $('#user option').val(selectedText);
            $('.is-selected').html('<span>' + selectedText + '</span>');

            console.log($('#user option').val());
            
        });


        $("#down, #home-down").bind("touchend", function(e) {
            
            TweenMax.to("#section-2", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set("#section-1", { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-3, #section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(0)").bind("touchend", function(e) {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-1", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 }); 
            TweenMax.set(["#section-2, #section-3, #section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 0 });
            TweenMax.to(".bg", .5, { alpha: .5 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#nav-trigger, #burger, .nav-logo, nav .close").bind("touchend", function(e) {

            if(!$('#burger').hasClass('back-button-active')){
                $(".section").removeClass("contact-is-inactive");
                $("#contact").addClass("contact-is-inactive");
                $("#menu, nav .close, #burger, .global-logo").toggleClass("nav-is-inactive");
                $(".slide-info").toggleClass("is-hidden");   
            } else if($('#burger').hasClass('back-button-active')){
                document.title = 'machineQ A Comcast Company';

                $('#burger').removeClass('back-button-active');
                $('#main').append(internalPages);
                TweenMax.to("#events", speed, { x: "120%", ease: ease1 });
                TweenMax.set(".section", { x: "0%"});

                setTimeout(function(){
                    $('#news-events').addClass('event-is-inactive').removeClass('event-is-active');
                }, 1200); 
                setTimeout(function(){
                    $('#news-events .container').detach();
                }, 1300); 
            }

        });

        $(".filter-button, .close-filter-button").bind("touchend", function(e) {

            $(".close-filter-button, .filter-button, .cd-tab-filter-wrapper").toggleClass("filter-is-inactive");
            $("#filter-lightbox").toggleClass("filter-bg-inactive");

        });

        $("#menu li:eq(1)").bind("touchend", function(e) {

            toggleEvents();

            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive"), $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-2", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set("#section-1", { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-3, #section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(2)").bind("touchend", function(e) {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-3", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(3)").bind("touchend", function(e) {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-4", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(4)").bind("touchend", function(e) {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");
            TweenMax.to("#section-5", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(5)").bind("touchend", function(e) {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5, #section-6"], { y: "-100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").addClass("fadein-1");
            $("#c2").addClass("fadein-2");
            $("#c3").addClass("fadein-3");
            $("#c4").addClass("fadein-4");
            $("#c5").addClass("fadein-5");
            $("#map-title").addClass("fadein");

            setTimeout(function() {
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
            }, 860);

        });

        $("#contact-link").bind("touchend", function(e) {
            toggleEvents();

            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");
            $("#contact, .contact-close, .section").toggleClass("contact-is-inactive");

        });

        $(".contact-link").bind("touchend", function(e) {
            toggleEvents();
            $("#contact, .contact-close, .section").toggleClass("contact-is-inactive");
        });

        $(".contact-close").bind("touchend", function(e) {

            $("#contact, .contact-close").toggleClass("contact-is-inactive");

            setTimeout(function() {
                sections.toggleClass("contact-is-inactive");
            }, 860);

        });

        $("#down, #home-down").bind("touchend", function(e) {

            TweenMax.to("#section-2", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set("#section-1", { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-3, #section-4, #section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#case-down, #use-case-down").bind("touchend", function(e) {

            TweenMax.to("#section-6", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5"], { y: "-100%", alpha: 0 });
            TweenMax.set("#section-7", { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            setTimeout(function() {
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                // $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-2 .cta").bind("touchend", function(e) {
            
            TweenMax.to("#section-3", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-4, #section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-3 .cta").bind("touchend", function(e) {

            TweenMax.to("#section-4", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-4 .cta").bind("touchend", function(e) {

            TweenMax.to("#section-5", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-5 .cta").bind("touchend", function(e) {
            
            TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                // $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        // $("#section-6 .cta").bind("touchend", function(e) {

        //     TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
        //     TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5, #section-6"], { y: "-100%", alpha: 0 });
        //     TweenMax.to("#comcast-logo", .5, { alpha: 1 });
        //     TweenMax.to(".bg", .5, { alpha: .15 });

        //     $(".section").removeClass("is-current-section is-next-section is-previous-section");
        //     $("#c1").removeClass("fadein-1");
        //     $("#c2").removeClass("fadein-2");
        //     $("#c3").removeClass("fadein-3");
        //     $("#c4").removeClass("fadein-4");
        //     $("#c5").removeClass("fadein-5");
        //     $("#map-title").removeClass("fadein");

        //     setTimeout(function() {
        //         $("#section-6").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
        //         $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
        //     }, 860);

        // });

        $("#section-7 .cta").bind("touchend", function(e) {
            
            TweenMax.to("#section-1", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 0 });
            TweenMax.to(".bg", .5, { alpha: .5 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section"), setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section"), $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section")
            }, 860);
        });

        // $( window ).orientationchange();

         $('.icon-trigger:not(.is-disabled)').bind("touchend", function(e) {
            console.log('just clicked');
            
            var trigger = $(this);
                TweenMax.set(trigger, { zIndex:-1000});
            setTimeout(function(){
                TweenMax.to('.scaleInactive .molecule-text', speed, { alpha: 0, ease: ease1});
                TweenMax.set(trigger, { zIndex:100});
            }, 1000);
                             
            if (window.orientation !== 0){
                var icon = $(this).parent('.platform-icon');
                var platformIcon = $('.platform-icon').not($(this).parent('.platform-icon'));
                var moleculeText = platformIcon.find('.molecule-text');
                var moleculeText2 = $(this).parent('.platform-icon').find('.molecule-text');
                var allIcons =  $('.icon-trigger:not(.is-disabled)').parent('.platform-icon');
                
                
                if(icon.hasClass('scaleActive')){
                    TweenMax.staggerTo(moleculeText2, speed, { alpha: 0, ease: ease1 }, -.15);
                    TweenMax.to(icon, speed, { alpha: .15, ease: ease1});
                    icon.removeClass('scaleActive').addClass('scaleInactive');
                    TweenMax.to('#case-icon-container', 1, { y:'68%'});
                    setTimeout(function(){
                        if(!$('.platform-icon').hasClass('scaleActive')){
                            TweenMax.to('#case-icon-container', speed, { y:'0%'});
                            TweenMax.to(allIcons, speed, { alpha: 1, ease: ease1});
                            TweenMax.to('#section-5 .cta', speed, { alpha:1});
                        }
                    },850);

                } else{
                   

                TweenMax.staggerTo(moleculeText, speed, { alpha: 0, ease: ease1 }, -.15);
                platformIcon.removeClass('scaleActive').addClass('scaleInactive');
                TweenMax.to(icon, speed, { alpha: 1, ease: ease1});
                // TweenMax.to('.platform-icon:not(.scaleActive) .icon-trigger', speed, { zIndex:100});
                // TweenMax.to('#case-icon-container', speed, { y:'0%'});

                    
                    
                    icon.addClass('scaleActive').removeClass('scaleInactive');
                    TweenMax.staggerTo(moleculeText2, speed, { alpha: 1, ease: ease1, delay:.65 }, .15);
                    TweenMax.to(platformIcon, speed, { alpha: .15, ease: ease1});
                    TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:-1000});
                    setTimeout(function(){
                      TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:100});  
                    },850);

                    if($('.platform-icon').hasClass('scaleActive')){
                        TweenMax.to('#case-icon-container', speed, { y:'63%'});
                        TweenMax.to('#section-5 .cta', speed, { alpha:0});

                    } else if(!$('.platform-icon').hasClass('scaleActive')){
                        TweenMax.to('#case-icon-container', speed, { y:'0%'});
                        TweenMax.to('#section-5 .cta', speed, { alpha:1});
                    }
                    
                    // TweenMax.to('#case-icon-container', speed, { y:'20%'});
                }

            } else if (/iPad/.test(navigator.userAgent) && !window.MSStream && window.orientation == 0) {

                var icon = $(this).parent('.platform-icon');
                var platformIcon = $('.platform-icon').not($(this).parent('.platform-icon'));
                var moleculeText = platformIcon.find('.molecule-text');
                var moleculeText2 = $(this).parent('.platform-icon').find('.molecule-text');
                var allIcons =  $('.icon-trigger:not(.is-disabled)').parent('.platform-icon');
                
                
                if(icon.hasClass('scaleActive')){
                    TweenMax.staggerTo(moleculeText2, speed, { alpha: 0, ease: ease1 }, -.15);
                    TweenMax.to(icon, speed, { alpha: .15, ease: ease1});
                    icon.removeClass('scaleActive').addClass('scaleInactive');
                    if($(this).is($("div.icon-trigger:first")) || $(this).is($("div.icon-trigger:nth-child(1)")) ){
                        console.log('its first');
                        TweenMax.to('#case-icon-container', speed, { y:'35%'});
                    }
                    setTimeout(function(){
                        if(!$('.platform-icon').hasClass('scaleActive')){
                            TweenMax.to('#case-icon-container', speed, { y:'0%'});
                        }
                    },850);

                } else{
                   

                TweenMax.staggerTo(moleculeText, speed, { alpha: 0, ease: ease1 }, -.15);
                platformIcon.removeClass('scaleActive').addClass('scaleInactive');
                TweenMax.to(icon, speed, { alpha: 1, ease: ease1});
                // TweenMax.to('.platform-icon:not(.scaleActive) .icon-trigger', speed, { zIndex:100});
                // TweenMax.to('#case-icon-container', speed, { y:'0%'});

                    
                    
                    icon.addClass('scaleActive').removeClass('scaleInactive');
                    TweenMax.staggerTo(moleculeText2, speed, { alpha: 1, ease: ease1, delay:.65 }, .15);
                    TweenMax.to(platformIcon, speed, { alpha: .15, ease: ease1});
                    TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:-1000});
                    setTimeout(function(){
                      TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:100});  
                    },850);

                    if($('.platform-icon').hasClass('scaleActive')){
                        if($(this).is($("div.icon-trigger:first")) || $(this).is($("div.icon-trigger:nth-child(1)")) ){
                            console.log('its first');
                            TweenMax.to('#case-icon-container', speed, { y:'35%'});
                        }
                    } else if(!$('.platform-icon').hasClass('scaleActive')){
                        TweenMax.to('#case-icon-container', speed, { y:'0%'});
                    }
                    
                    // TweenMax.to('#case-icon-container', speed, { y:'20%'});
                }

            } else if(/iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && document.body.clientWidth <= '768'){

                if(iconclicked == 0){
                    var firstIcon = $('#case-icon-container').first('.platform-icon');
                    var icon = $(this).parent('.platform-icon');
                    var moleculeText = $(this).parent('.platform-icon').find('.molecule-text');
                    var ctaIOS = $('#case-down').parent('.cta');

                    icon.addClass('scaleActive').removeClass('scaleInactive');
                    TweenMax.staggerTo(moleculeText, speed, { alpha: 1, ease: ease1, delay:.65 }, .15);
                    TweenMax.to('.platform-icon:not(.scaleActive)', speed, { alpha: .1, ease: ease1});
                    TweenMax.to('.platform-icon:not(.scaleActive) ,icon-trigger', speed, { zIndex:-1000});

                    if($(this).is($("div.icon-trigger:first")) ){
                        console.log('its first');
                        TweenMax.to('#case-icon-container', speed, { y:'35%'});
                    } else if($(this).is($("div.icon-trigger:eq(1)")) ){
                        console.log('its second');
                        TweenMax.to('#case-icon-container', speed, { y:'5%'});

                    }  else if($(this).is($("div.icon-trigger:eq(2)")) ){
                        console.log('its third');
                        TweenMax.to('#case-icon-container', speed, { y:'-10%'});
                        TweenMax.to('#at-container', speed, { y:'-15%'});
                        TweenMax.to(ctaIOS, speed, {bottom:'13vh'});
                    }

                    iconclicked = 1;
                } else if(iconclicked == 1){
                    var icon = $(this).parent('.platform-icon');
                    var moleculeText = $(this).parent('.platform-icon').find('.molecule-text');
                    var ctaIOS = $('#case-down').parent('.cta');

                    TweenMax.staggerTo(moleculeText, speed, { alpha: 0, ease: ease1 }, -.15);
                    icon.removeClass('scaleActive').addClass('scaleInactive');
                    TweenMax.to('.platform-icon:not(.scaleActive)', speed, { alpha: 1, ease: ease1});
                    TweenMax.to('.platform-icon:not(.scaleActive) ,icon-trigger', speed, { zIndex:100});
                    
                     if($(this).is($("div.icon-trigger:first")) || $(this).is($("div.icon-trigger:eq(2)")) || $(this).is($("div.icon-trigger:eq(1)")) ){
                        TweenMax.to('#case-icon-container', speed, { y:'0%'});
                        TweenMax.to('#at-container', speed, { y:'0%'});
                        TweenMax.to(ctaIOS, speed, {bottom:'14vh'});
                    }

                   
                    iconclicked = 0;
                };
            } else if(document.body.clientWidth <= '768'){

                if(iconclicked == 0){
                    var firstIcon = $('#case-icon-container').first('.platform-icon');
                    var icon = $(this).parent('.platform-icon');
                    var moleculeText = $(this).parent('.platform-icon').find('.molecule-text');
                    var cta = $('#case-down').parent('.cta');

                    icon.addClass('scaleActive').removeClass('scaleInactive');
                    TweenMax.staggerTo(moleculeText, speed, { alpha: 1, ease: ease1, delay:.65 }, .15);
                    TweenMax.to('.platform-icon:not(.scaleActive)', speed, { alpha: .1, ease: ease1});
                    TweenMax.to('.platform-icon:not(.scaleActive) ,icon-trigger', speed, { zIndex:-1000});

                    if($(this).is($("div.icon-trigger:first")) ){
                        console.log('its first');
                        TweenMax.to('#case-icon-container', speed, { y:'35%'});
                    } else if($(this).is($("div.icon-trigger:eq(1)")) ){
                        console.log('its second');
                        TweenMax.to('#case-icon-container', speed, { y:'5%'});

                    } else if($(this).is($("div.icon-trigger:eq(2)")) ){
                        console.log('its third');
                        TweenMax.to('#case-icon-container', speed, { y:'-10%'});
                        TweenMax.to('#at-container', speed, { y:'-15%'});
                        TweenMax.to(cta, speed, { top: '100%' });
                    }

                    iconclicked = 1;
                } else if(iconclicked == 1){
                    var icon = $(this).parent('.platform-icon');
                    var moleculeText = $(this).parent('.platform-icon').find('.molecule-text');
                    var ctaIOS = $('#case-down').parent('.cta');

                    TweenMax.staggerTo(moleculeText, speed, { alpha: 0, ease: ease1 }, -.15);
                    icon.removeClass('scaleActive').addClass('scaleInactive');
                    TweenMax.to('.platform-icon:not(.scaleActive)', speed, { alpha: 1, ease: ease1});
                    TweenMax.to('.platform-icon:not(.scaleActive) ,icon-trigger', speed, { zIndex:100});
                    
                     if($(this).is($("div.icon-trigger:first")) || $(this).is($("div.icon-trigger:eq(2)")) || $(this).is($("div.icon-trigger:eq(1)")) ){
                        TweenMax.to('#case-icon-container', speed, { y:'0%'});
                        TweenMax.to('#at-container', speed, { y:'0%'});
                        TweenMax.to(cta, speed, {  top: '0%' });
                    }

                   
                    iconclicked = 0;
                };
            }
            
            
            // }
            // previousTarget=this;
            // return false;
        }); 
    } 

    else {

        $( window ).resize(function() {
            var bodyWidth = $(document).outerWidth(),
                bodyHeight = $(document).outerHeight(),
                bodyRatio = bodyWidth / bodyHeight,
                dblBodyHeight = bodyHeight*2;

            if (bodyWidth+48 >= dblBodyHeight) {
                $('html').addClass('small-desktop-ratio');
                $("#section-4 h1.title").html("FIT FOR YOUR<br />WORKFLOW");
                // $('#em-container .molecule img').attr('src', 'app/images/molecules-01.svg');
                // $('#metering-container .molecule img').attr('src', 'app/images/molecules-02.svg');
                // $('#at-container .molecule img').attr('src', 'app/images/molecules-03.svg');
            } else{
                $('html').removeClass('small-desktop-ratio');
                $("#section-4 h1.title").html("FIT FOR YOUR<br />WORKFLOW");
                // $('#em-container .molecule img').attr('src', 'app/images/molecules-01-long.svg');
                // $('#metering-container .molecule img').attr('src', 'app/images/molecules-02-long.svg');
                // $('#at-container .molecule img').attr('src', 'app/images/molecules-03-long.svg');
            }

        }).resize();

        requestAnimationFrame(move);
        $('#section-4 .title').html('<h1 class="title">FIT FOR YOUR<br/>WORKFLOW</h1>');

        $("#nav-trigger, #burger, .nav-logo, nav .close").on('click', function() {
            if(!$('#burger').hasClass('back-button-active')){
                $("#menu, nav .close, #burger, .global-logo").toggleClass("nav-is-inactive");
                $(".slide-info").toggleClass("is-hidden");
            } else if($('#burger').hasClass('back-button-active')){
                document.title = 'machineQ A Comcast Company';

                $('#burger').removeClass('back-button-active');
                $('#main').append(internalPages);
                TweenMax.to("#events", speed, { x: "120%", ease: ease1 });
                TweenMax.to(".section", speed,{ x: "0%", delay:.25, ease: Power1.easeInOut });

                setTimeout(function(){
                    $('#news-events').addClass('event-is-inactive').removeClass('event-is-active');
                }, 1200); 
                setTimeout(function(){
                    $('#news-events .container').detach();
                }, 1300); 
            }
        });

        
        function changeBoxGrid(){
            var bodyWidth = $(window).outerWidth(),
                bodyHeight = $(document).outerHeight();

            var bodyRatio = Math.round((bodyWidth/bodyHeight)*100);

            console.log(bodyRatio);

           if(bodyRatio >=  45 && bodyRatio <= 67){
                console.log('less 45');
                $('li.mix').removeClass('columns3grid columns5grid columns7grid');
                $('li.mix').addClass('columns4grid');
                 $('#other-links').addClass('position-is-static');
            }else if(bodyRatio <  45 ){ 
                console.log('less 45');
                $('li.mix').addClass('columns3grid');
                $('li.mix').removeClass('columns4grid columns5grid columns7grid');
                 $('#other-links').addClass('position-is-static');
            } else if(bodyRatio < 67){
                
                console.log('less 67');
                $('li.mix').removeClass('columns4grid columns3grid columns5grid');
               $('li.mix').addClass('columns7grid');
               // $('li.mix').removeClass('columns7grid');
               // $('li.mix').addClass('columns4grid');
                
                $('#other-links').addClass('position-is-static');
            } else if(bodyRatio > 98 && bodyRatio <= 120){
                
                console.log('greater 98');
                $('li.mix').removeClass('columns3grid columns4grid columns6grid columns7grid').addClass('columns5grid');
                $('#other-links').addClass('position-is-static');
            } else{
                $('li.mix').removeClass('columns7grid columns6grid columns5grid columns4grid columns3grid');

            }
        }

        // $( window ).resize(function() {
        //     changeBoxGrid();
        //     moleculesAnimation();

        // }).resize();

        $('.select-option').on('click', function() {
            $('ul.select-dropdown').toggleClass('dropdown-active'); 

            var selectedText = $(this).text();

            $('#user option').val(selectedText);
            $('.is-selected').html('<span>' + selectedText + '</span>');

            console.log($('#user option').val());
            
        });

        $("#events-link").on('click', function() {
            
            // History.pushState({position:History.getState().data.position+1},"News/Events","/events");
            document.title = 'machineQ A Comcast Company | Events';

            $('#burger').addClass('back-button-active');
            $('#news-events').append(eventsPage);
            TweenMax.to(".section", speed, { x: "-100%", ease: ease1 });
            TweenMax.to(".bg", .5, { alpha: .25, delay: .1});
            TweenMax.to("#events", speed, { x: "0%", alpha: 1, ease: ease2, delay: .1 });
            

            setTimeout(function(){
                window.location.hash.replace(/^#/, "");
                $('#main .container').detach();
                $('#news-events').removeClass('event-is-inactive').addClass('event-is-active'); 
            }, 1200);
            
   
        });


        $("#menu li:eq(0)").on('click', function() {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-1", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-2, #section-3, #section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 0 });
            TweenMax.to(".bg", .5, { alpha: .5 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
            $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
            $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);
        });

        $("#menu li:eq(1)").on('click', function() {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-2", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set("#section-1", { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-3, #section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);
        });

        $("#menu li:eq(2)").on('click', function() {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-3", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-4, #section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(3)").on('click', function() {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-4", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-5, #section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");

            setTimeout(function() {
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(4)").on('click', function() {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-5", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-6, #section-7, #section-8"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            setTimeout(function() {
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#menu li:eq(5)").on('click', function() {

            toggleEvents();

            $(".section").removeClass("contact-is-inactive");
            $("#contact").addClass("contact-is-inactive");
            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");

            TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5, #section-6"], { y: "-100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").addClass("fadein-1");
            $("#c2").addClass("fadein-2");
            $("#c3").addClass("fadein-3");
            $("#c4").addClass("fadein-4");
            $("#c5").addClass("fadein-5");
            $("#map-title").addClass("fadein");

            setTimeout(function() {
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
            }, 860);

        });

        $("#contact-link").on('click', function() {

            toggleEvents();

            $("#menu, .close, #burger, .global-logo").toggleClass("nav-is-inactive");
            $(".slide-info").toggleClass("is-hidden");
            $("#contact, .contact-close, .section").toggleClass("contact-is-inactive");

        });

        $(".contact-link").on('click', function() {
            toggleEvents();

            $("#contact, .contact-close, .section").toggleClass("contact-is-inactive");
        });

        $(".contact-close").on('click', function() {

            $("#contact, .contact-close").toggleClass("contact-is-inactive");

            setTimeout(function() {
                sections.toggleClass("contact-is-inactive");
            }, 860);

        });

        $("#down, #home-down").on('click', function() {
            
            TweenMax.to("#section-2", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set("#section-1", { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-3, #section-4, #section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 }); 

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            setTimeout(function() {
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#case-down, #use-case-down").on('click', function() {
            
            TweenMax.to("#section-6", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5"], { y: "-100%", alpha: 0 });
            TweenMax.set("#section-7", { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            setTimeout(function() {
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-6").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-2 .cta").on('click', function() {
           
            TweenMax.to("#section-3", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-4, #section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-3 .cta").on('click', function() {

            TweenMax.to("#section-4", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            setTimeout(function() {
                $("#section-3").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-4 .cta").on('click', function() {

            TweenMax.to("#section-5", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            setTimeout(function() {
                $("#section-4").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        $("#section-5 .cta").on('click', function() {

            TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5"], { y: "-100%", alpha: 0 });
            TweenMax.set(["#section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 1 });
            TweenMax.to(".bg", .5, { alpha: .15 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");

            $("#c1").addClass("fadein-1");
            $("#c2").addClass("fadein-2");
            $("#c3").addClass("fadein-3");
            $("#c4").addClass("fadein-4");
            $("#c5").addClass("fadein-5");
            $("#map-title").addClass("fadein");

            setTimeout(function() {
                $("#section-5").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
                $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
                // $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
            }, 860);

        });

        // $("#section-6 .cta").on('click', function() {
            
        //     TweenMax.to("#section-7", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
        //     TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5, #section-6"], { y: "-100%", alpha: 0 });
        //     TweenMax.to("#comcast-logo", .5, { alpha: 1 });
        //     TweenMax.to(".bg", .5, { alpha: .15 });

        //     $(".section").removeClass("is-current-section is-next-section is-previous-section");
        //     $("#c1").addClass("fadein-1");
        //     $("#c2").addClass("fadein-2");
        //     $("#c3").addClass("fadein-3");
        //     $("#c4").addClass("fadein-4");
        //     $("#c5").addClass("fadein-5");
        //     $("#map-title").addClass("fadein");

        //     setTimeout(function() {
        //         $("#section-6").removeClass("is-current-section is-next-section is-previous-section").addClass("is-previous-section");
        //         $("#section-7").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
        //     }, 860);

        // });

        $("#section-7 .cta").on('click', function() {
            
            TweenMax.to("#section-1", speed, { y: "0%", alpha: 1, ease: ease2, delay: .1 });
            TweenMax.set(["#section-1, #section-2, #section-3, #section-4, #section-5, #section-6, #section-7"], { y: "100%", alpha: 0 });
            TweenMax.to("#comcast-logo", .5, { alpha: 0 });
            TweenMax.to(".bg", .5, { alpha: .5 });

            $(".section").removeClass("is-current-section is-next-section is-previous-section");
            $("#c1").removeClass("fadein-1");
            $("#c2").removeClass("fadein-2");
            $("#c3").removeClass("fadein-3");
            $("#c4").removeClass("fadein-4");
            $("#c5").removeClass("fadein-5");
            $("#map-title").removeClass("fadein");

            setTimeout(function() {
                $("#section-2").removeClass("is-current-section is-next-section is-previous-section").addClass("is-next-section");
                $("#section-1").removeClass("is-current-section is-next-section is-previous-section").addClass("is-current-section");
            }, 860);

        });

        $(".filter-button, .close-filter-button").on('click', function() {
            $(".close-filter-button, .filter-button, .cd-tab-filter-wrapper").toggleClass("filter-is-inactive");
            $("#filter-lightbox").toggleClass("filter-bg-inactive");
        });

        // $(window).resize(function() {
            $('.icon-trigger:not(.is-disabled)').on('click', function(e) {
                var trigger = $(this);
                TweenMax.set(trigger, { zIndex:-1000});
                setTimeout(function(){
                    TweenMax.to('.scaleInactive .molecule-text', speed, { alpha: 0, ease: ease1});
                    TweenMax.set(trigger, { zIndex:100});
                }, 1000);
               
                    if(document.body.clientWidth > '768'){
                            var icon = $(this).parent('.platform-icon');
                            var platformIcon = $('.platform-icon').not($(this).parent('.platform-icon'));
                            var moleculeText = platformIcon.find('.molecule-text');
                            var moleculeText2 = $(this).parent('.platform-icon').find('.molecule-text');
                            var allIcons =  $('.icon-trigger:not(.is-disabled)').parent('.platform-icon');
                            
                            
                            if(icon.hasClass('scaleActive')){
                                TweenMax.staggerTo(moleculeText2, speed, { alpha: 0, ease: ease1 }, -.15);
                                TweenMax.to(icon, speed, { alpha: .15, ease: ease1});
                                icon.removeClass('scaleActive').addClass('scaleInactive');
                                TweenMax.to('#case-icon-container', speed, { y:'65%'});
                                setTimeout(function(){
                                    if(!$('.platform-icon').hasClass('scaleActive')){
                                        TweenMax.to('#case-icon-container', speed, { y:'0%'});
                                        TweenMax.to(allIcons, speed, { alpha: 1, ease: ease1});
                                    }
                                },850);

                            } else{
                               

                            TweenMax.staggerTo(moleculeText, speed, { alpha: 0, ease: ease1 }, -.15);
                            platformIcon.removeClass('scaleActive').addClass('scaleInactive');
                            TweenMax.to(icon, speed, { alpha: 1, ease: ease1});
                            // TweenMax.to('.platform-icon:not(.scaleActive) .icon-trigger', speed, { zIndex:100});
                            // TweenMax.to('#case-icon-container', speed, { y:'0%'});

                                
                                
                                icon.addClass('scaleActive').removeClass('scaleInactive');
                                TweenMax.staggerTo(moleculeText2, speed, { alpha: 1, ease: ease1, delay:.65 }, .15);
                                TweenMax.to(platformIcon, speed, { alpha: .15, ease: ease1});
                                TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:-1000});
                                setTimeout(function(){
                                  TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:100});  
                                },850);

                                if($('.platform-icon').hasClass('scaleActive')){
                                    TweenMax.to('#case-icon-container', speed, { y:'65%'});
                                } else if(!$('.platform-icon').hasClass('scaleActive')){
                                    TweenMax.to('#case-icon-container', speed, { y:'0%'});
                                }
                                
                                // TweenMax.to('#case-icon-container', speed, { y:'20%'});
                            }
                            
                           
                           
                    
                    } else if(document.body.clientWidth <= '768' && document.body.clientHeight >= '700'){

                        var icon = $(this).parent('.platform-icon');
                            var platformIcon = $('.platform-icon').not($(this).parent('.platform-icon'));
                            var moleculeText = platformIcon.find('.molecule-text');
                            var moleculeText2 = $(this).parent('.platform-icon').find('.molecule-text');
                            var allIcons =  $('.icon-trigger:not(.is-disabled)').parent('.platform-icon');
                            
                            
                            if(icon.hasClass('scaleActive')){
                                TweenMax.staggerTo(moleculeText2, speed, { alpha: 0, ease: ease1 }, -.15);
                                TweenMax.to(icon, speed, { alpha: .15, ease: ease1});
                                icon.removeClass('scaleActive').addClass('scaleInactive');
                                TweenMax.to('#case-icon-container', speed, { y:'65%'});
                                setTimeout(function(){
                                    if(!$('.platform-icon').hasClass('scaleActive')){
                                        TweenMax.to('#case-icon-container', speed, { y:'0%'});
                                        TweenMax.to(allIcons, speed, { alpha: 1, ease: ease1});
                                    }
                                },850);

                            } else{
                               

                            TweenMax.staggerTo(moleculeText, speed, { alpha: 0, ease: ease1 }, -.15);
                            platformIcon.removeClass('scaleActive').addClass('scaleInactive');
                            TweenMax.to(icon, speed, { alpha: 1, ease: ease1});
                            // TweenMax.to('.platform-icon:not(.scaleActive) .icon-trigger', speed, { zIndex:100});
                            // TweenMax.to('#case-icon-container', speed, { y:'0%'});

                                
                                
                                icon.addClass('scaleActive').removeClass('scaleInactive');
                                TweenMax.staggerTo(moleculeText2, speed, { alpha: 1, ease: ease1, delay:.65 }, .15);
                                TweenMax.to(platformIcon, speed, { alpha: .15, ease: ease1});
                                TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:-1000});
                                setTimeout(function(){
                                  TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:100});  
                                },850);

                                if($('.platform-icon').hasClass('scaleActive')){
                                    TweenMax.to('#case-icon-container', speed, { y:'65%'});
                                } else if(!$('.platform-icon').hasClass('scaleActive')){
                                    TweenMax.to('#case-icon-container', speed, { y:'0%'});
                                }
                                
                                // TweenMax.to('#case-icon-container', speed, { y:'20%'});
                            }
                    }  else if(document.body.clientWidth <= '768' && document.body.clientHeight < '700'){

                        var icon = $(this).parent('.platform-icon');
                            var platformIcon = $('.platform-icon').not($(this).parent('.platform-icon'));
                            var moleculeText = platformIcon.find('.molecule-text');
                            var moleculeText2 = $(this).parent('.platform-icon').find('.molecule-text');
                            var allIcons =  $('.icon-trigger:not(.is-disabled)').parent('.platform-icon');
                            
                            
                            if(icon.hasClass('scaleActive')){
                                TweenMax.staggerTo(moleculeText2, speed, { alpha: 0, ease: ease1 }, -.15);
                                TweenMax.to(icon, speed, { alpha: .15, ease: ease1});
                                icon.removeClass('scaleActive').addClass('scaleInactive');
                                TweenMax.to('#case-icon-container', speed, { y:'35%'});
                                setTimeout(function(){
                                    if(!$('.platform-icon').hasClass('scaleActive')){
                                        TweenMax.to('#case-icon-container', speed, { y:'0%'});
                                        TweenMax.to(allIcons, speed, { alpha: 1, ease: ease1});
                                    }
                                },850);

                            } else{
                               

                            TweenMax.staggerTo(moleculeText, speed, { alpha: 0, ease: ease1 }, -.15);
                            platformIcon.removeClass('scaleActive').addClass('scaleInactive');
                            TweenMax.to(icon, speed, { alpha: 1, ease: ease1});
                            // TweenMax.to('.platform-icon:not(.scaleActive) .icon-trigger', speed, { zIndex:100});
                            // TweenMax.to('#case-icon-container', speed, { y:'0%'});

                                
                                
                                icon.addClass('scaleActive').removeClass('scaleInactive');
                                TweenMax.staggerTo(moleculeText2, speed, { alpha: 1, ease: ease1, delay:.65 }, .15);
                                TweenMax.to(platformIcon, speed, { alpha: .15, ease: ease1});
                                TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:-1000});
                                setTimeout(function(){
                                  TweenMax.set('.platform-icon:not(.scaleActive) .icon-trigger', { zIndex:100});  
                                },850);

                                if($('.platform-icon').hasClass('scaleActive')){
                                    TweenMax.to('#case-icon-container', speed, { y:'35%'});
                                } else if(!$('.platform-icon').hasClass('scaleActive')){
                                    TweenMax.to('#case-icon-container', speed, { y:'0%'});
                                }

                            }
                    }

                });

    } 

    // Use Cases on Hover
    
        // $('.mix').on('click', function(){
        //     // For Desktops
        //     $(this).find('svg').addClass('is-hovering');   

        //     //For Mobile
        //     if(document.body.clientWidth <= '1024' && isMobile.detectMobile()){ 

        //        $(this).find('svg').addClass('scaleBox');
        //         setTimeout(function(){
        //             $('.scaleBox').addClass('unscaleBox'); 
        //         }, 5000);

        //         setTimeout(function(){
        //             $('svg').removeClass('is-hovering scaleBox unscaleBox'); 
        //         }, 6000);
        //     } else if(document.body.clientWidth <= '768'){ 
        //         $(this).find('svg').addClass('scaleBox');
        //         setTimeout(function(){
        //             $('.scaleBox').addClass('unscaleBox'); 
        //         }, 5000);

        //         setTimeout(function(){
        //             $('svg').removeClass('is-hovering scaleBox unscaleBox'); 
        //         }, 6000);
        //     } else if(document.body.clientWidth >= '768' && !isMobile.detectMobile()){
        //         setTimeout(function(){
        //             $('svg').removeClass('is-hovering');
        //         }, 5000);
        //     }
        // }); 

// MixItUp Filters Start HERE

//open/close lateral filter


// function triggerFilter($bool) {
//     var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
//     elementsToTrigger.each(function(){
//         $(this).toggleClass('filter-is-visible', $bool);
//     });
// }

//mobile version - detect click event on filters tab
// var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
//     filter_tab_placeholder_default_value = 'Select',
//     filter_tab_placeholder_text = filter_tab_placeholder.text();

// $('.cd-tab-filter li').on('click', function(event){

//     //detect which tab filter item was selected
//     var selected_filter = $(event.target).data('type');
        
//     //check if user has clicked the placeholder item
//     if( $(event.target).is(filter_tab_placeholder) ) {
//         (filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
//         $('.cd-tab-filter').toggleClass('is-open');

//     //check if user has clicked a filter already selected 
//     } else if( filter_tab_placeholder.data('type') == selected_filter ) {
//         filter_tab_placeholder.text($(event.target).text());
//         $('.cd-tab-filter').removeClass('is-open'); 

//     } else {
//         //close the dropdown and change placeholder text/data-type value
//         $('.cd-tab-filter').removeClass('is-open');
//         filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
//         filter_tab_placeholder_text = $(event.target).text();
        
//         //add class selected to the selected filter item
//         $('.cd-tab-filter .selected').removeClass('selected');
//         $(event.target).addClass('selected');

//         $('.option-1').addClass('selected');
//         $('.option-2').addClass('selected');
//         $('.option-3').addClass('selected');
//         $('.option-4').addClass('selected');
//         $('.option-5').addClass('selected');
        
        
//     }
//     $('.close-filter-button, .filter-button, .cd-tab-filter-wrapper').toggleClass('filter-is-inactive');
//     $('#filter-lightbox').toggleClass('filter-bg-inactive');
//     setTimeout(function(){
//         if( $('#filter-0 a').hasClass('selected') ){
//             $('.option-1, .option-2, .option-3, .option-4, .option-5').removeClass('selected');
//         }
//     }, 500);
// });

// Hover Events

$('.news-article').hover(function() {
    $(this).toggleClass('active-article');
}, function() {
    $(this).toggleClass('active-article');
}); 


// /************************************
//     MitItUp filter settings
//     More details: 
//     https://mixitup.kunkalabs.com/
//     or:
//     http://codepen.io/patrickkunka/
// *************************************/

//     buttonFilter.init();
//     $('.cd-gallery ul').mixItUp({
//         controls: {
//             enable: false
//         },
//         callbacks: {
//             onMixStart: function(){
//                 $('.cd-fail-message').fadeOut(200);
//             },
//             onMixFail: function(){
//                 $('.cd-fail-message').fadeIn(200);
//             }
//         }
//     });

//     var inputText;
//     var $matching = $();

//     var delay = (function(){
//         var timer = 0;
//         return function(callback, ms){
//             clearTimeout (timer);
//             timer = setTimeout(callback, ms);
//         };
//     })();

// });

// /*****************************************************
//     MixItUp - Define a single object literal 
//     to contain all filter custom functionality
// *****************************************************/

// var buttonFilter = {
//     // Declare any variables we will need as properties of the object
//     $filters: null,
//     groups: [],
//     outputArray: [],
//     outputString: '',
  
//     // The "init" method will run on document ready and cache any jQuery objects we will need.
//     init: function(){
//         var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
//         self.$filters = $('.cd-main-content');
//         self.$container = $('.cd-gallery ul');
    
//         self.$filters.find('.cd-filters').each(function(){
//             var $this = $(this);
          
//             self.groups.push({
//                 $inputs: $this.find('.filter'),
//                 active: '',
//                 tracker: false
//             });
//         });
        
//         self.bindHandlers();
//     },
  
//     // The "bindHandlers" method will listen for whenever a button is clicked. 
//     bindHandlers: function(){
//         var self = this;

//         self.$filters.on('click', 'a', function(e){
//             self.parseFilters();
//         });
//         self.$filters.on('change', function(){
//           self.parseFilters();           
//         });
//     },
  
//     parseFilters: function(){
//         var self = this;
     
//         // loop through each filter group and grap the active filter from each one.
//         for(var i = 0, group; group = self.groups[i]; i++){
//             group.active = [];
//             group.$inputs.each(function(){
//                 var $this = $(this);
//                 if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
//                     if($this.is(':checked') ) {
//                         group.active.push($this.attr('data-filter'));
//                     }
//                 } else if($this.is('select')){
//                     group.active.push($this.val());
//                 } else if( $this.find('.selected').length > 0 ) {
//                     group.active.push($this.attr('data-filter'));
//                 }
//             });
//         }
//         self.concatenate();
//     },
  
//     concatenate: function(){
//         var self = this;
    
//         self.outputString = ''; // Reset output string
    
//         for(var i = 0, group; group = self.groups[i]; i++){
//             self.outputString += group.active;
//         }
    
//         // If the output string is empty, show all rather than none:    
//         !self.outputString.length && (self.outputString = 'all'); 
    
//         // Send the output string to MixItUp via the 'filter' method:    
//         if(self.$container.mixItUp('isLoaded')){
//             self.$container.mixItUp('filter', self.outputString);
//         }
//     }
// };
// 
// 
//=========ZOOM FIX
});