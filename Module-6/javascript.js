document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";

});
document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "Blue";;

});
document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "orange";;
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1.0";
    document.getElementById("box").style.border = "0";
});
document.getElementById("button5").addEventListener("click", function(){

    document.getElementById("box").style.border = "thick solid #0000FF";

});