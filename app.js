let btns = document.querySelectorAll(".Button")
let displayWinner = document.querySelector("#display")

let you = document.querySelector("#yousc")


count = 0;
count2 = 0;
let comWinner = document.querySelector("#comsel")


const genComChoise = () =>{
    const options = ["Rock", "Paper", "Sizor"]
    const RandonIdx = Math.floor(Math.random()*3);
return options [RandonIdx];
}

const playgame = (UserChoice) =>{
console.log ("User choise is",UserChoice)
const Computer = genComChoise();


console.log("computer choice is",Computer)
if(UserChoice == "Rock" && Computer == "Sizor" ){
    displayWinner.innerText = "User win! Rock beats Scissors"
    count2++
    you.innerText = count2
}
else if(UserChoice == "Rock" && Computer == "Sizor"){
    displayWinner.innerText = "Stone Beats Sizon You win"
    }else if(UserChoice == "Sizor" && Computer == "Paper"){
    displayWinner.innerText = "User win! Scissors beats Paper"
count2++
you.innerText = count2

}else if (UserChoice == "Paper" && Computer == "Rock"){
    displayWinner.innerText = "You win! Paper beats Rock"
    count2++
    you.innerText = count2
}else if(UserChoice === Computer){
    displayWinner.innerText = "DRAW"
    console.log("DRAW")

}else{
    displayWinner.innerText = "COMPUTER WINS"
    console.log("COMPUTER WINS")
    count++;
    comWinner.innerText = count
}


}
btns.forEach((Button)=>{
    Button.addEventListener("click", ()=>{
        const UserChoice = Button.getAttribute("id")
playgame(UserChoice);


    })
})





