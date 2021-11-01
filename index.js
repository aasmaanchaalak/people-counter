let count = 0;

let countEl = document.getElementById("count-el");

function increment(){
    count += 1
    countEl.textContent = count
}

function decrement(){
    count -= 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el");

function save(){
    console.log(count);
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.innerText = count;
}