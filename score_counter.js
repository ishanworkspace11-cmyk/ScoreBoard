let count_home=0
let count_guest = 0

let countH = document.getElementById("homie")
let countG = document.getElementById("guess")

function increment1_home(){
    count_home += 1
    countH.innerText = count_home
}
function increment2_home(){
    count_home += 2
    countH.innerText = count_home
}
function increment3_home(){
    count_home += 3
    countH.innerText = count_home
}
function increment1_guest(){
    count_guest += 1
    countG.innerText = count_guest
}
function increment2_guest(){
    count_guest += 2
    countG.innerText = count_guest
}
function increment3_guest(){
    count_guest += 3
    countG.innerText = count_guest
}
function reset(){
    count_guest=0
    count_home=0
    countG.innerText = count_guest
    countH.innerText = count_home
}