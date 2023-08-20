import("../../jQuery/jquery-3.7.0.js");

$(() => {
    // # Show - Hide
    $("#btn1").on("click", () => {
        $("#img1").hide(1000);
    });

    $("#btn2").on("click", () => {
        $("#img1").show(1000);
    });

    $("#btn3").on("click", () => {
        $("#img1").toggle(1000);
    });

    // --------------------------------------------------
    // # Fade-In - Fade-Out
    $("#btn4").on("click", () => {
        $("#img1").fadeIn(1000);
    });

    $("#btn5").on("click", () => {
        $("#img1").fadeOut(1000);
    });

    $("#btn6").on("click", () => {
        $("#img1").fadeToggle(1000);
    });

    // --------------------------------------------------
    // # Slide Up - Slide Down
    $("#btn7").on("click", () => {
        $("#img1").slideUp(1000);
    });

    $("#btn8").on("click", () => {
        $("#img1").slideDown(1000);
    });

    $("#btn9").on("click", () => {
        $("#img1").slideToggle();
    });

    // --------------------------------------------------
    // # Stop
    $("#btn10").on("click", () => {
        $("#img1").stop();
    });

});

