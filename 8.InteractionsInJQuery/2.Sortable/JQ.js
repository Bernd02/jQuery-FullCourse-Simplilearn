// 03:16:35 > Interactions > Sortable

$(() => {
    $(".sort").sortable(
        {
            opacity: 0.3,
            cursor: "grabbing",
            containment: "parent",
            delay: 0,
            distance: 50 // werkt alleen als element "+ x" px verplaatst wordt
        }
    );


});

