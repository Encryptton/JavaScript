const nightMode = document.getElementsByClassName("buttonStyle")[0];
const lightMode = document.getElementsByClassName("buttonStyle")[1];
const bodyModificationMode = document.getElementsByTagName("body")[0];
const phraseCat = document.getElementsByTagName("p")[0];

nightMode.addEventListener("click", funcaoNight);
lightMode.addEventListener("click", funcaoLight);

function funcaoNight(){
    bodyModificationMode.style.backgroundColor = "black";
    bodyModificationMode.style.color = "white";
    phraseCat.innerHTML = "Already tonight we are going to sleep";
    document.getElementById("imgCatID").src ="https://c.tenor.com/3--y7uX-xoMAAAAS/pusheen.gif";
}

function funcaoLight(){
    bodyModificationMode.style.backgroundColor = "white";
    bodyModificationMode.style.color = "black";
    phraseCat.innerHTML = "Yay, dawn, let's have breakfast!!!";
    document.getElementById("imgCatID").src ="https://pa1.narvii.com/6597/e3aa1e7b1f212326891dff35ecc9263059d9e161_hq.gif";
}