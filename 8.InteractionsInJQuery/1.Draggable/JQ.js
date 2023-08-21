// 03:06:30 > Interactions > Draggable

$(() => {
    $(".box").draggable(
        {
            // axis: "x",
            cursor: "grabbing",
            opacity: 0.3,
            // containment: "parent", // "document"
            // grid: [100, 100],
            snap: true,
            snapTolerance: 50
        }
    );


});

