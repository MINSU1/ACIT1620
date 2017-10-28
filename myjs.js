var menudisplay=1;
var theTop=0;
var theLeft=0;
var Bgsize=300;
//---------------------Functions---------------------------
function expandMenu(){
    if(menudisplay==1){
        document.getElementById("controls").style.bottom="10px";
        menudisplay = 0;
    }
    else if(menudisplay==0){
        document.getElementById("controls").style.bottom="-100px";
        menudisplay = 1;
    }
    
};

function changeColor(theValue){
    document.getElementById("title").style.color = theValue;
    document.getElementById("description").style.color = theValue;
};

function changeDescription(theValue){
        document.getElementById("description").innerHTML = theValue;
};

function changeTitle(theValue){
    document.getElementById("title").innerHTML = theValue;
};

function changeBG(theName){
    if(theName.indexOf("http") != -1){
        document.getElementById("background").style.backgroundImage= "url("+theName+")";
    }else if(theName == "horse"){
        document.getElementById("background").style.backgroundImage ="url(img/bg1.jpg)";
    }else if(theName == "night"){
        document.getElementById("background").style.backgroundImage ="url(img/bg2.jpg)";
    }else if(theName == "mountain"){
        document.getElementById("background").style.backgroundImage ="url(img/bg3.jpg)";
    }else if(theName.indexOf("epic") != -1){
        document.getElementById("background").style.backgroundImage ="url(img/bg4.jpg)";
    }
    
}

function moveBG(keycode){
    if(keycode==37){
        theLeft = theLeft - 10;
    };
     if(keycode==39){
        theLeft = theLeft + 10;
    };
     if(keycode==38){
        theTop = theTop - 10;
    };
     if(keycode==40){
        theTop = theTop + 10;
     };
     if(keycode == 189){
        Bgsize = Bgsize - 10;
    };
     if(keycode == 187){
        Bgsize = Bgsize + 10;
    };
    document.getElementById("background").style.backgroundPosition=theLeft+"px"+" "+theTop+"px";
    document.getElementById("background").style.height=Bgsize+"px";
};
//---------------------------------------------------------

document.getElementById("menu").addEventListener("click", function(){
    expandMenu();
});

document.body.addEventListener("keydown",function(ev){
    moveBG(ev.keyCode);
});

document.getElementById("fileIn").addEventListener("keydown",function(ev){
    if(ev.keyCode == 13){
        changeBG(fileIn.value)
    }
});

document.getElementById("desIn").addEventListener("keydown",function(){
    var thedesValue = document.getElementById("desIn").value;
    changeDescription(thedesValue);
});

document.getElementById("titleIn").addEventListener("keydown",function(){
    var thetitleValue = document.getElementById("titleIn").value;
    changeTitle(thetitleValue);
});

document.getElementById("colorbar").addEventListener("change",function(){
    changeColor(colorbar.value)
});