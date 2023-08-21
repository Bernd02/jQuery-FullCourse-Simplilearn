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

