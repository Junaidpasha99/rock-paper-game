let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let displayWinner = document.querySelector("#display")

let you = document.querySelector("#yousc")

let winnngpat = [1, 2, 3]
count = 0;
count2 = 0;
let comWinner = document.querySelector("#comsel")

btn1.addEventListener("click", function () {
    let btnck1 = 0
    if(btnck1 == 0) {
let pat = Math.floor(Math.random()*3)
if(pat == 0){
    
    displayWinner.innerText = "Good You Are The Winner"
    count++;
    you.innerText = count
    console.log("winner")
}else{
count2++
comWinner.innerText = count2
    displayWinner.innerText = "Computer Wins"
}
       
    }
});


btn2.addEventListener("click", function () {
    let btnck2 = 0
    if(btnck2 == 0) {
let pat = Math.floor(Math.random()*3)
if(pat == 1){
    displayWinner.innerText = "Good You Are The Winner"
    count++;
    you.innerText = count
    console.log("winner")
}else{
count2++
comWinner.innerText = count2
    displayWinner.innerText = "Computer Wins"
}
       
    }
});

btn3.addEventListener("click", function () {
    let btnck3 = 0
    if(btnck3 == 0) {
let pat = Math.floor(Math.random()*3)
if(pat == 2){
    displayWinner.innerText = "Good You Are The Winner"
    count++;
    you.innerText = count
    console.log("winner")
}else{
count2++
comWinner.innerText = count2
    displayWinner.innerText = "Computer Wins"
}
       
    }
});