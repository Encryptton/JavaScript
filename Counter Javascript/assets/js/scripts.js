var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    if(currentNumber >= 10){
        console.log("Unable to increment numbers greater than 10");
    }
    else{
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement(){
    if(currentNumber <= 0){
        console.log("impossible to decrement numbers less than 0");
    }
    else{
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}


//method listener
let somar = document.getElementById("somar");
let diminuir = document.getElementById("diminuir");
let alterarHTML = document.getElementById("mudarAqui");


somar.addEventListener("click", functionSomar);
diminuir.addEventListener("click", functionDiminuir);

alterar = 0;

function functionSomar(){
    if(alterar >= 10){
        console.log("Unable to increment numbers greater than 10");
    }
    else{
        alterar = alterar + 1;
        alterarHTML.innerHTML = alterar;
    }
}

function functionDiminuir(){
    if(alterar <= 0){
        console.log("Unable to increment numbers greater than 10");
    }
    else{
        alterar = alterar - 1;
        alterarHTML.innerHTML = alterar;
    }
}