const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');

const colors = ["pink", "lightblue", "lightyellow", "lightgrey", "lightgreen", "lightpurple"];

myButton.addEventListener('click', changeColor);

function changeColor() {
    console.log(myBox);
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    myBox.style.backgroundColor = colors[randomIndex];
}