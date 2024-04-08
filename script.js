let inpval=document.querySelector("#navsearchinput");
let inpsbtn = document.querySelector("#navsearchbtn");
inpsbtn.addEventListener("click",()=>{
  console.log(inpval.value);
});


function makeCardintren(src) {
  let tren = document.querySelector(".cardsT");
  let card1 = document.createElement("div");
  card1.className = "card";
  let cardimg = document.createElement("img");
  cardimg.setAttribute("src", src);
  cardimg.className="cardimg";
  card1.appendChild(cardimg);
  tren.appendChild(card1);
}
function makeCardinartist(src) {
  let tren = document.querySelector(".cardsAr");
  let card1 = document.createElement("div");
  card1.className = "card";
  card1.classList.add("cardArdiv");
  let cardimg = document.createElement("img");
  cardimg.setAttribute("src", src);
  cardimg.className="cardimg";
 cardimg.classList.add("cardArimg");
  card1.appendChild(cardimg);
  tren.appendChild(card1);
}
function makeCardinalbum(src) {
  let tren = document.querySelector(".cardsAl");
  let card1 = document.createElement("div");
  card1.className = "card";
  let cardimg = document.createElement("img");
  cardimg.setAttribute("src", src);
  cardimg.className="cardimg";
  card1.appendChild(cardimg);
  tren.appendChild(card1);
}

makeCardintren("pexels-daniel-reche-3721941.jpg"); 
makeCardintren("pexels-daniel-reche-3721941.jpg"); 
makeCardintren("pexels-daniel-reche-3721941.jpg"); 
makeCardintren("pexels-daniel-reche-3721941.jpg"); 
makeCardinartist("pexels-daniel-reche-3721941.jpg");
makeCardinartist("pexels-daniel-reche-3721941.jpg");
makeCardinartist("pexels-daniel-reche-3721941.jpg");
makeCardinartist("pexels-daniel-reche-3721941.jpg");
makeCardinalbum("pexels-daniel-reche-3721941.jpg");
makeCardinalbum("pexels-daniel-reche-3721941.jpg");
makeCardinalbum("pexels-daniel-reche-3721941.jpg");
makeCardinalbum("pexels-daniel-reche-3721941.jpg");



