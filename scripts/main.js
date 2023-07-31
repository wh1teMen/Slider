let range = document.querySelector(".slider");
var redEl = document.getElementById("red");
var blueEl = document.getElementById("blue");
range.oninput = function () {      
    redEl.style.position = "absolute";
    blueEl.style.position = "absolute";   
     var rX=redEl.style.right = (+this.value) + 'px';   
     var bX=blueEl.style.left = (+this.value) + 'px';
     if(+this.value>400){
        document.body.style.background='gray';
     }
     if(+this.value>670){
        document.body.style.background='white';
     }
     if(+this.value<400){
        document.body.style.background='black';
     }
 }


