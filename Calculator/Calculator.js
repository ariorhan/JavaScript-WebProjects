let button = document.getElementsByTagName("button");
let screen = document.getElementsByClassName("screen1")[0];
let calculate = document.getElementById("calculate");
let clear = document.getElementById("clear");

for (let i=0; i < 16; i++) {
     if(i != 12 && i != 14)
    button[i].addEventListener("click", print);
}
    
function print() {
    screen.value = screen.value + this.value;
}

calculate.addEventListener("click", solve);

function solve() {
    screen.value = eval(screen.value);
}

clear.addEventListener("click", clean)

function clean() {
    screen.value = "";
}