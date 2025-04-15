import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    //creando las variable de numero y simbolos
    let cardNumber = ["J", "2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "Q", "K"];
    let cardSimbol = ["♦", "♥", "♠", "♣"];

    // siguiente codigo me va a cambiar aleatoriamente todo
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomCardSimbol = Math.floor(Math.random() * cardSimbol.length);

    //esto es para elegir el resultado final
    let finalCardSimbol = cardSimbol[randomCardSimbol];

    //aqui traemos los valores id de html (<span id="number" class="top-suit" id="cardContent"</span>)
    document.querySelector(".number").innerHTML = cardNumber[randomCardNumber];
    document.querySelector(".top-suit").innerHTML = finalCardSimbol;
    document.querySelector(".bottom-suit").innerHTML =finalCardSimbol;

    //es como imprimir los simbolos 
function getSuiteClass(finalCardSimbol){
    switch (finalCardSimbol){
        case "spade": return "spade";
        case "club": return "club";
        case "heart": return "heart";
        case "diamond": return "diamond";

    }

}

//aqui indico que si no es ♥ o ♦ los demas seran negros
if (finalCardSimbol === "♥" || finalCardSimbol === "♦") {
    document.querySelector(".number").style.color = "red";
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".number").style.color = "black";
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
}

