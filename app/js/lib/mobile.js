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

		});

		$('#menu li:eq(1)').click(function(){
			$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');

		});

		$('#menu li:eq(2)').click(function(){
			$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');

		});

		$('#menu li:eq(3)').click(function(){
			$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');

		});

		$('#menu li:eq(4)').click(function(){
			$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');

		});

		$('#menu li:eq(5)').click(function(){
			$('#menu, .close, #burger, .global-logo').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');

		});

		$('#down, #home-down').click(function(){

		});

		$('#case-down, #use-case-down').click(function(){

		});

		$('#section-2 .cta').click(function(){

		});

		$('#section-3 .cta').click(function(){

		});

		$('#section-4 .cta').click(function(){

		});

		$('#section-6 .cta').click(function(){

		});

		$('#section-7 .cta').click(function(){

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

	