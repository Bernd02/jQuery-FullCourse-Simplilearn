import("../jQuery/jquery-3.7.0.js");

// 01:16:42 > Callback Functions

// Callback Functies zijn
// > functies die als parameter worden doorgegeven aan een andere functie
// > ze worden op het moment uitgevoerd bepaald door de caller-logica
// > niet te verwarren met uitvoerende functie-statement (zoals alert())
// ... hetwelke direct uitgevoerd wordt op de plaats van het statement
$(() => {
    // # Animate
    $("#btn-animate").on("click", () => {
        $("#img").animate(
            {
                left: "150px",
                opacity: 1,
                height: "400px",
                width: "400px"
            },
            "slow",
            // Hier een fn-"definitie"!
            // ... geen fn-uitvoering.
            () => {
                alert("Animated");
            });

        // Alert wordt eerder uitgevoerd dan .animate()
        // > oplossen met "Callback Functie"
        // ... callback is een functie-definitie
        // ... alert = het uitvoeren van een functie (!= definitie)
        // alert("Animated");
    });

    // --------------------------------------------------
    // # Slide
    $("#btn-slide-up").on("click", () => {
        $("#img").slideUp(1000, () => {
            $("#img").slideDown();
        });
    });

    // --------------------------------------------------
    // # Chaining
    // > Je voegt acties aan een event toe
    // ... maar ze worden niet per se in volgorde uitgevoerd
    // ... > opacity wordt als eerste uitgevoerd
    // > Met callback-fns controleer je de volgorde wel
    $("#btn-chaining").on("click", () => {
        $("#img")
            .slideUp(1000)
            .slideDown()
            .css("opacity", 1)
            .fadeOut()
            .fadeIn();
    });




});

