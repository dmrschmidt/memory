let showBacksideTimeout = 3000;
let showBacksideHandler = function () {
  console.log('hallo');

  let frontsides = document.getElementsByClassName("front");
  let backsides = document.getElementsByClassName('back');
  for (let i = 0; i < backsides.length; i += 1) {
    frontsides[i].style.display = "none";
    backsides[i].style.display = "block";
  }
};

window.setTimeout(showBacksideHandler, showBacksideTimeout);


let flipcardHandler = function (event) {
  if (event.target.parentElement.className === 'back') {
    let backElement = event.target.parentElement;
    let clickedMemoryCard = backElement.parentElement;
    let frontElements = clickedMemoryCard.getElementsByClassName("front");
    let frontElement = frontElements[0];
    frontElement.style.display = "block";
    backElement.style.display = "none";
  }
}

let cards = document.getElementsByClassName("memory-card");
for (let i = 0; i < cards.length; i += 1) {
  cards[i].addEventListener("click", flipcardHandler);
}
