let player = {
    name: "Per",
    chips: 145
}
let sum = 0
let cards=[]
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomNumber(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function startGame(){
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame() {
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+"- "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent=message
    console.log(message)    
}

function newCard(){
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()   
        console.log("new card")     
    }
    else{
        console.log("out of the game")
    }
}

