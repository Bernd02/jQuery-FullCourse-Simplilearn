// 04:24:15 > ToDo List

$(() => {
    $("#button").on("click", () => {
        let input = $("input[name=list-item]");
        let toAdd = input.val();

        $("ul").append(`<li>${toAdd}</li>`);
        input.val("");
    });

    // Deze functie wordt 1-malig geïnstantieerd
    $(document).on("dblclick", "li", function (e) {
        $(e.target).toggleClass("strike").fadeOut("slow");
    });

    $("ul").sortable();
});
