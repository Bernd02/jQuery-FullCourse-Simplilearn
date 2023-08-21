// https://www.youtube.com/watch?v=Rkvn_MA04fo
// 00:37:10
// 3. jQuery Events & Effects

function func1() {
    document.getElementById("img1").style.width = "500px";
}

// --------------------------------------------------
// Deprecated > zie info intellisense
// > 00:44:05
// $("document").ready(() => {
// });

// Code uitvoeren nadat het DOM geladen is
$(function () {
    // Deprecated > zie info
    // $("button").click(func2);
    // function func2() {
    //     $("#img1").css("width", "500px");
    // }

    // -----
    $("button").click(() => {
        $("#img1").css("width", "500px");
    });
});

