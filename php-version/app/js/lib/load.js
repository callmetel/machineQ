$(document).ready(function() {
	$('#main-wrap').imagesLoaded( { background: '.global-bg' }, function() {
	  console.log('global background loaded');
	  $('#post').css('opacity', 1);
	});
});