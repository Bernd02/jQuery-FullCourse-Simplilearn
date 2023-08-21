// 02:56:05 > Widgets > Modification

$(() => {
    $("#dialog").dialog(
        {
            draggable: true,
            resizable: true,
            closeOnEscape: true,
            modal: false,
            autoOpen: true,
            height: 250,
            width: 250
        });

    $("#btn-get").on("click", () => {
        // alert("GET is working");

        // # getter
        // let modal = $("#dialog").dialog("option", "modal");
        // let modal = $("#dialog").dialog("option", "draggable");
        let option = $("#dialog").dialog("option", "height");
        alert(option);
    });

    $("#btn-set").on("click", () => {
        // alert("SET is working");

        // # setter
        // $("#dialog").dialog("option", "modal", true);
        // $("#dialog").dialog("option", "draggable", false);
        $("#dialog").dialog("option", "height", 300);
    });
});

