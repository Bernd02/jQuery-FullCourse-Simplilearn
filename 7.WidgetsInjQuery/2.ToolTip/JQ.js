import("../../jQuery/jquery-3.7.0.js");
import("../../jquery-ui-1.13.2/jquery-ui.js");

// 02:14:52 > Widgets > ToolTip
$(() => {
    $("#tooltip").tooltip(
        {
            track: true,
            content: "Enter your name here please",
            show: {
                // effect: "slideDown",
                // effect: "highlight",
                effect: "pulsate",
                duration: 1000,
                delay: 250
            },
            hide: {
                effect: "explode",
                duration: 1000,
            }
        }
    );

});

