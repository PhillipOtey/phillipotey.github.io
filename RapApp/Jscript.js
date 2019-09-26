
var myVar = setInterval(myTimer, .1);

function myTimer(){
    var e = document.getElementById("listVal");
    var strUser = e.options[e.selectedIndex].value;
    document.getElementById("bod").setAttribute("class", strUser);
    //document.body.
}