// 02:35:05 > Widgets > Dialog
$(() => {
    $("#btn1").on("click", function () {
        $("#dialog").dialog("open");
    });

    $("#dialog").dialog(
        {
            title: "Title via Property",
            draggable: false,
            resizable: false,
            closeOnEscape: false,
            modal: true,
            autoOpen: false
        }
    );

});

