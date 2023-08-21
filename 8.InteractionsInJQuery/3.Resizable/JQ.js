// 03:23:29 > Interactions > Resizable

$(() => {
    $("#img1").resizable(
        {
            animate: true,
            // containment: "parent",
            maxHeight: 400,
            maxWidth: 400,
            minHeight: 150,
            minWidth: 150,
            ghost: true,
            // aspectRatio: 16 / 9,
            aspectRatio: true,
            helper: "ui-resizable-helper"
        }
    );


});

