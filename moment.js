var divValue
var divContent

$(".description").click(divCliked);
$(".safeBtn").click(saveClicked);

$(document).ready(function() {

});

function divCliked() {
    $(this).after("contenteditable", "true");
    $(this).next().removeAttr("disabled");
    divValue = $(this).attr("value");
    $(this).keyup(function() {
        divContent = $(this).text();
        localStorage.setItem(divValue, divContent);
    });
};

function saveClicked() {
    divContent = $(this).prev().text();
    $(this).prev().removeAttr("contenditable");
    localStorage.setItem(divValue, divContent);
};