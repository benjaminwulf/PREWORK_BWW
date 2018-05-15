
/*
var btn1 = $("#btn1");

document.getElementById("btn1").addEventListener("click", function growLarger(element){
    target = document.getElementById(element);
    target.style.height = newSetting;
    target.style.width = newSetting;
    newSetting = newSetting +20;
});
*/
var div = document.getElementById("box");

function blueBtn() {
    div.setAttribute("id", "box")
}

document.getElementById("blueBtn").addEventListener("click", function(){
    document.getElementById("box").style.color = "blue";
});

document.getElementById("fadeBtn").addEventListener("click"), function(){
    document.getElementById("box").style.opacity = "0.3";
});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";

});


/*

function growLonger(element){
    target = document.getElementById(element);
    target.style.height = newSetting;
    target.style.width = newSetting;
    newSetting = newSetting +20;

    if (newSetting == 500){
        clearTimeout(loopTimer);
        return false;
    }
    var loopTimer = setTimeout('growLonger(\''+element+'\')',50);
        target.InnerHTML = "<p style="text-align:center"> It is <b> Done </b><p>";
}

*/