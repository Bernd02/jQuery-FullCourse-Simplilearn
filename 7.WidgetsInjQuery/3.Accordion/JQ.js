import("../../jQuery/jquery-3.7.0.js");
import("../../jquery-ui-1.13.2/jquery-ui.js");

// 02:24:43 > Widgets > Accordion
$(() => {
    $("#container").accordion(
        {
            collapsible: true,
            icons: {
                header: "ui-icon-info",
                activeHeader: "ui-icon-info"
            },
            animate: 1000,
            event: "mouseover"
        }
    );

});

