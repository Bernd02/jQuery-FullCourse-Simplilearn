import("../../jQuery/jquery-3.7.0.js");
import("../../jquery-ui-1.13.2/jquery-ui.js");

// 02:02:17 > Widgets > DatePicker
$(() => {
    $("#date").datepicker(
        {
            showOtherMonths: true,
            selectOtherMonths: true,
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            minDate: new Date(2016, 1, 5),
            maxDate: new Date(2025, 1, 6),
            numberOfMonths: 3
        }
    );


});

