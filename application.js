$(document).ready(function() {
	function detectHandHeld() {
        var mq1 = window.matchMedia("screen and (min-device-width:320px) and (max-device-width:767px)");
        if (mq1.matches) {
            // Catches all iOS devices, Samsung Galaxy S3
			$( "#detector" ).css('background-color', 'green');
            $( "#detector .info" ).text('Is Handheld Device');
            return;
		}

        var mq2 = window.matchMedia("screen and (min-device-width:1080px) and (max-device-width:1080px) and (-webkit-min-device-pixel-ratio: 3)");
        if (mq1.matches) {
            // Matches Samsung Galaxy S4,S5; LG Nexus 4,5; HTc One; Sony Xperia Z3,Z, Xiaomi Mi4,3; Lenovo K900, Pahtech Vega n6,
            // ZTE Grand S; Samsung Galaxy Note 3
            $( "#detector" ).css('background-color', 'green');
            $( "#detector .info" ).text('Is Handheld Device');
            return;
        }

        $( "#detector" ).css('background-color', 'red');
        $( "#detector > .info" ).text('Is NOT Handheld Device');
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

        var info = "<h3>Device info:</h3>screen width/height=" + scrW + "/" + scrH + "<br>" +
            "LayoutViewport width/height=" + layoutViewportW + "/" + layoutViewportH + "<br>" +
            "VisualViewport width/height=" + visualViewportW + "/" + visualViewportH + "<br>" +
            "&lt;html&gt; width/height=" + htmlW + "/" + htmlH + "<br>" +
            "Pixel ratio = " + pixelRatioStr + "<br>" + mqOrientationStr;

        return info;
    }

    detectHandHeld();
    setDimension();
});