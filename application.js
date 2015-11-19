$(document).ready(function() {
	function detectHandHeld() {
        var mq = window.matchMedia("screen and (max-device-width:480px) and (-webkit-min-device-pixel-ratio: 1.1) and (-webkit-max-device-pixel-ratio: 4)");
		if (mq.matches) {
			$( "#detector" ).css('background-color', 'green');
            $( "#detector .info" ).text('Is Handheld device');
		} else {
			$( "#detector" ).css('background-color', 'red');
            $( "#detector > .info" ).text('Not Handheld device');
		}
	}
    detectHandHeld();
});