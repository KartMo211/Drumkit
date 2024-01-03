function letterAlert(key){
    
    switch (key) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var s = new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case "d":
            var d = new Audio("sounds/tom-4.mp3");
            d.play();
            break;
        case "j":
            var j= new Audio("sounds/crash.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/kick-bass.mp3");
            k.play();
            break;
        case "l":
            var l  = new Audio("sounds/snare.mp3");
            l.play();
            break;
        default:
            console.log(this.innerHTML);
    } 

}

function buttonAnimation(letter){

    var activeButton = document.querySelector("."+letter);

    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");},100);

}

var but = document.querySelectorAll("button.drum");

for(var i=0;i<but.length;i++){
    but[i].addEventListener("click", function(){
        letterAlert(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }
    );
}

document.addEventListener("keydown", function(event){
        var key = event.key;
        letterAlert(key);
        buttonAnimation(key);
    } 
);


// var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();