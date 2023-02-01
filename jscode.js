 // funkcija, kas maina teksta redzamību lapā
document.addEventListener("DOMContentLoaded", validateForm); // negaida, kamēr lapa ieladēsies
function toggleVisibility() {
  var div = document.getElementById("nodarbibu-grafiks"); // iegūstam elementu ar id "nodarbibu-grafiks" un ierakstam to mainīgajā
  if (div.style.display === "none") {
    div.style.display = "block";
    document.getElementById("show-more").innerHTML = "Paslēpt";
  } else {
    div.style.display = "none";
    document.getElementById("show-more").innerHTML = "Parādīt";
  }
}

// funkcija, kas palīdz HTML kodā ievietot jaunu paragrafu
function createParagraph() {
  var newPara = document.createElement("p"); // tiek izmantota metode createElement, lai izveidotu jaunu "p"(rindkopu) un saglabātu to mainīgajā "newPara".
  var text = document.createTextNode("LV..HABA..."); // tiek izmantota metode createTextNode, lai izveidotu jaunu teksta mezglu ar vērtību "Padlies!" un ierakstot to mainīgajā "text".
  newPara.appendChild(text); // teksts tiek parādīts izveidotajā rindkopā
  var btn = document.getElementById("poga");
  btn.parentNode.insertBefore(newPara, btn.nextSibling); // tiek izmantota metode insertBefore, lai pievienotu izveidoto "newPara" rindkopu HTML pirms elementa, kas seko pogas elementam "paldies-poga".
  // dzēst rindkopu, kad pogu noklikšķina otro reizi
  btn.onclick = function() {
    newPara.parentNode.removeChild(newPara); // tiek izmantota metode removeChild, lai no HTML koda noņemtu elementu "newPara".
    btn.onclick = createParagraph;
  }
}