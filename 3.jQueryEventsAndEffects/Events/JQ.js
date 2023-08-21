$(() => {
    // $("#img1").mouseenter(() => {
    //     $("#img1").css("width", "500px");
    // });

    // $("#img1").mouseleave(() => {
    //     $("#img1").css("width", "250px");
    // });

    // --------------------------------------------------
    $("#img1").hover(fn1, fn2);
    function fn1() {
        $("#img1").css("width", "500px");
    }
    function fn2() {
        $("#img1").css("width", "250px");
    }
});