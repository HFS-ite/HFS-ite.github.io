let x = document.getElementById("i");
let y = document.getElementById("hre")
let count = 0;
document.addEventListener("click", function(){
    if(count = 1){
   y.style.display = "block";
   x.style.position = "relative"
   x.style.top = "-28.5vh"
   count = 1;
    }
    else{
        count = 1;
        y.style.display = "none";
    }
})