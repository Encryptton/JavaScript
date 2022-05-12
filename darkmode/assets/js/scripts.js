const nightMode = document.getElementsByClassName("buttonStyle")[0];
const lightMode = document.getElementsByClassName("buttonStyle")[1];
const bodyModificationMode = document.getElementsByTagName("body")[0];

nightMode.addEventListener("click", funcaoNight);
lightMode.addEventListener("click", funcaoLight);

function funcaoNight(){
    nightMode.style.color = "black";
    nightMode.style.backgroundColor = "whitesmoke";
    nightMode.style.borderRadius = "15%";
    nightMode.innerHTML = "Night Mode";
    

    bodyModificationMode.style.backgroundColor = "black";
    bodyModificationMode.style.color = "white";
}

function funcaoLight(){
    lightMode.style.color = "white";
    lightMode.style.backgroundColor = "black";
    lightMode.style.borderRadius = "10%";
    lightMode.innerHTML = "Light Mode";
    

    bodyModificationMode.style.backgroundColor = "white";
    bodyModificationMode.style.color = "black";
}