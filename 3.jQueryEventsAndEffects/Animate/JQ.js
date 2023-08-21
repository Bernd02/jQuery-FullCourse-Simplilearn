// 01:09:30 > Effects > Animate
$(() => {
    // $("#btn").on("click", () => {
    //     $("#img").animate(
    //         {
    //             left: "150px",
    //             opacity: 1,
    //             height: "400px",
    //             width: "400px"
    //         },
    //         1000);
    // });

    // --------------------------------------------------
    // slow
    $("#btn").on("click", () => {
        $("#img").animate(
            {
                left: "150px",
                opacity: 1,
                height: "400px",
                width: "400px"
            },
            "slow");
    });

    $("#btn-revert").on("click", () => {
        $("#img").animate(
            {
                left: 0,
                height: "250px",
                width: "250px",
                opacity: 0.4,
            },
            "slow");
    });

});

