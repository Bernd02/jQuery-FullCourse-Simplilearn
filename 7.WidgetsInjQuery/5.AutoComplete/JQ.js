// 02:46:04 > Widgets > AutoComplete

let languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Java",
    "Python",
    "C",
    "C++",
    "C#",
    "Perl",
    "Ruby",
    "Scala",
    "COBOL",
    "Basic",
    "Fortran",
    "Lisp",
    "TypeScript"
];

$(() => {
    $("#input").autocomplete(
        {
            source: languages
        },
        {
            delay: 0,
            minLength: 2,
            autoFocus: true
        }
    );


});

