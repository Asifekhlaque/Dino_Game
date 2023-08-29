var charactor = document.getElementById("charactor");
var block = document.getElementById("block");
function jump(){
    if(charactor.classList !="animation"){
        charactor.classList.add("animation");
    }
    
    setTimeout(function(){
        charactor.classList.remove("animation");
    },500);
}

var checkDead = setInterval(function(){
    var charactorTop = parseInt(window.getComputedStyle(charactor).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && charactorTop>=130){
        alert("Game Over");
        block.style.animation = "none";
        block.style.display = "none";
    }
},10)