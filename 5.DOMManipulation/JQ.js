// 01:25:30 > DOM Manipulation
$(() => {
    // # html-inhoud van p1 kopieëren naar span1
    // $(".div1").on("click", () => {
    //     let x = $(".p1").html();
    //     $("#span1").text(x);
    // });

    // --------------------------------------------------
    // # .html() vs .text()
    // $(".div1").on("click", () => {
    //     // Geeft interne content incl. html-tags
    //     alert($(".p1").html());

    //     // Geeft enkel de tekst
    //     alert($(".p1").text());
    // });

    // --------------------------------------------------
    // # Attribuut (id) wijzigen van element
    // $("#btn1").on("click", () => {
    //     $(".p1").attr("id", "id2-p1")
    // });

    // $(".p1").on("click", () => {
    //     // alert("Class of p1: " + $(".p1").attr("class"));
    //     alert("Id of p1: " + $(".p1").attr("id"));
    // });

    // --------------------------------------------------
    // # Css wijzigen
    // $("#btn1").on("click", () => {
    //     $(".div1").css("background-color", "lightblue")
    // });

    // $(".div1").on("click", () => {
    //     alert($(".div1").css("background-color"));
    // });

    // --------------------------------------------------
    // # Append
    // ## p
    // $("#btn1").on("click", () => {
    //     $(".div1").append("<p>This is paragraph 2</p>");
    // });

    // ## img
    $("#btn-append").on("click", () => {
        $(".div1").append("<img src='../images/J1.png' height='100px' width='100px' >");
    });

    // -----
    // # Prepend
    $("#btn-prepend").on("click", () => {
        $(".div1").prepend("<p>This is paragraph 2 using prepend</p>");
    });

    // --------------------------------------------------
    // # After
    $("#btn-after").on("click", () => {
        $(".div1").after("<p>This is paragraph 2 using after</p>");
    });

    // # Before
    $("#btn-before").on("click", () => {
        $(".div1").before("<p>This is paragraph 2 using before</p>");
    });

    // --------------------------------------------------
    // # Remove
    $("#btn-remove").on("click", () => {
        $(".div1").remove();
    });

    // # Empty
    $("#btn-empty").on("click", () => {
        $(".div1").empty();
    });




});

