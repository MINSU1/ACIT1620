document.getElementById("open").addEventListener("click", function(){
                                                 document.getElementById("control").style.left = "0px";
                                                 });

document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/f1.jpg)";
});

document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/f2.jpg)";
});

document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/f3.jpg)";
});

document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/f111.png)";
});

document.getElementById("close").addEventListener("click", function(){
                                                 document.getElementById("control").style.left = "-200px";
                                                 });