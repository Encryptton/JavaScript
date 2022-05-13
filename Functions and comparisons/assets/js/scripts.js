const btn = document.getElementById("btn");
const out = document.getElementById("output");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const fistNumber = document.getElementById("first");
    const SecondNumber = document.getElementById("second");
    const fisrtCompare = parseInt(fistNumber.value);
    const SecondCompare = parseInt(SecondNumber.value);
    const compare = fisrtCompare + SecondCompare;

    if(compare < 10){
        out.innerHTML = "Your result is less than 10 \n The exact value of the sum is: " + compare;
    }
    else if(compare > 20){
        out.innerHTML = "Your result is greater than 20 \n The exact value of the sum is: " + compare;
    }
    else if(compare > 10 || compare < 20){
        out.innerHTML = "Your result is between 10 and 20 \n The exact value of the sum is: " + compare;
    }
    else{
        out.innerHTML = "Please enter numbers only";
    }
});
