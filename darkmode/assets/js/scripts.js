const buttonOnAndOf = document.getElementsByClassName("buttonStyle")[0];
const bodyModificationMode = document.getElementsByTagName("body")[0];

buttonOnAndOf.addEventListener("click", funcaoExecutada);

function funcaoExecutada(){
    buttonOnAndOf.style.color = "black";
    buttonOnAndOf.style.backgroundColor = "whitesmoke";
    buttonOnAndOf.style.borderRadius = "15%";
    buttonOnAndOf.innerHTML = "DarkMode On";
    

    bodyModificationMode.style.backgroundColor = "black";
    bodyModificationMode.style.color = "white";
}