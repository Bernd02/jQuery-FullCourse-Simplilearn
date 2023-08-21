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

