console.log("Script started")

let gueses = 0;
function flipCard(cardId) {
    console.log("click");
    let card = document.getElementById(cardId);
    card.style.color = "white";
    card.style.backgroundColor = "green";


    if (firstCardId = "") {
        firstCardId = cardId;
    console.log("first = " + firstCardId);
    }
    //store 1st card id
    else {
    secondCardId - cardId;
    setTimeout(checkForMatch, 1000);
    console.log("second = " + secondCardId);
    }
}

function checkForMatch() {
    //get the card elements
    let firstCard = document.getElementById(firstCardId);
    let secondCard = document.getElementById(secondCardId)

    if (firstCard.InnerText == secondCard.InnerText) {
        firstCard.style.backgroundColor = "lightgreen";
        secondCard.style.backgroundColor = "lightgreen";
    }
    else {
        // Cards don't match, reset the styles
        firstCard.style.color = "yellow";
        firstCard.style.backgroundColor = "yellow"
         secondCard.style.color = "yellow";
        secondCard.style.backgroundColor = "yellow"
    }
    //RESET FOR NEXT PICK
    firstCardId = "";
    secondCardId = "";
}