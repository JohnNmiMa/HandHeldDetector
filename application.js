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
            mqPixelRatio1 = window.matchMedia( "(-webkit-max-device-pixel-ratio: 1)" ),
            mqPixelRatio2 = window.matchMedia( "(-webkit-min-device-pixel-ratio: 1.1) and (-webkit-max-device-pixel-ratio: 4)" ),
            mqPixelRatio5 = window.matchMedia( "(-webkit-min-device-pixel-ratio: 4.01)" ),
            mqOrientation = window.matchMedia( "(orientation: portrait)" ),
            mqOrientationStr = mqOrientation.matches ? "Portrait" : "Landscape";

        if (mqPixelRatio1.matches) {
            mqPixelRatioStr = "PixelRatio = 1";
        } else if (mqPixelRatio2.matches) {
            mqPixelRatioStr = "PixelRatio = 1.1 - 4";
        } else if (mqPixelRatio5.matches) {
            mqPixelRatioStr = "PixelRatio > 4";
        }

        var info = "Device info: screen width/height=" + scrW + "/" + scrH + "<br>" +
            "LayoutViewport width/height=" + layoutViewportW + "/" + layoutViewportH + "<br>" +
            "VisualViewport width/height=" + visualViewportW + "/" + visualViewportH + "<br>" +
            "<html> width/height=" + htmlW + "/" + htmlH + "<br>" +
            mqPixelRatioStr + "<br>" + mqOrientationStr;

        return info;
    }

    detectHandHeld();
    setDimension();
});