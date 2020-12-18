$(".scrollyeah-left-link").click(function() {
	var curShaft = $(this).parent().parent().find('.scrollyeah__shaft');
	var newPositionL = curShaft.position().left + $(document).width() - ($(document).width() / 10);
	 if(newPositionL > 0) {
		 newPositionL = 10;
		 var newPosLpx = newPositionL + 'px';
		 curShaft.animate({"left":newPosLpx}, "fast");
		 newPositionL = 0;
	}
	var newPosLpx = newPositionL + 'px';
	curShaft.animate({"left":newPosLpx}, "normal");
});


$(".scrollyeah-right-link").click(function() {
	var curShaft = $(this).parent().parent().find('.scrollyeah__shaft');
	var newPositionR = curShaft.position().left - $(document).width() + ($(document).width() / 10);
	if(newPositionR < $(document).width() - curShaft.width()) {
		newPositionR = $(document).width() - curShaft.width() - 10;
		var newPosRpx = newPositionR + 'px';
		curShaft.animate({"left":newPosRpx}, "fast");
 		newPositionR = $(document).width() - curShaft.width() + 5;
 	}
	var newPosRpx = newPositionR - 10 + 'px';
	curShaft.animate({"left":newPosRpx}, "normal");
});
