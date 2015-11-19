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

    function setDimension() {
        var dimensions = computeDimensionsStr();
        $( "#detector > .deviceInfo" ).append(dimensions);
    }

    function computeDimensionsStr() {
        var scrW = screen.width,
            scrH = screen.height,
            layoutViewportW = document.documentElement.clientWidth,
            layoutViewportH = document.documentElement.clientHeight,
            visualViewportW = window.innerWidth,
            visualViewportH = window.innerHeight,
            htmlW = document.documentElement.offsetWidth,
            htmlH = document.documentElement.offsetHeight,
            pixelRatioStr = window.devicePixelRatio ? window.devicePixelRatio : "window.devicePixelRation not supported",
            mqOrientation = window.matchMedia( "(orientation: portrait)" ),
            mqOrientationStr = mqOrientation.matches ? "Portrait" : "Landscape";

        var info = "Device info: screen width/height=" + scrW + "/" + scrH + "<br>" +
            "LayoutViewport width/height=" + layoutViewportW + "/" + layoutViewportH + "<br>" +
            "VisualViewport width/height=" + visualViewportW + "/" + visualViewportH + "<br>" +
            "<html> width/height=" + htmlW + "/" + htmlH + "<br>" +
            "Pixel ratio = " + pixelRatioStr + "<br>" + mqOrientationStr;

        return info;
    }

    detectHandHeld();
    setDimension();
});