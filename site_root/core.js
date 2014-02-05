/* Core JavaScript */

$(document).ready(function() {
	$('.profileButtonWrapper').hover(function() {
		$(this).find('button').popover('toggle');
	});
});