const button = document.getElementById('button')
const input = document.getElementById('input')
const body = document.body
let glitch;
let ausgabe;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the button element
    var button = document.querySelector('.button');

    // Add a class to start the animation
    button.classList.add('start-animation');
    setTimeout()
});

const colorArray = ['#F8F005', '#00E6F6', '#000000', '#FF013C', '#000000', '#FFFFFF', '#FFC0CB', '#000000'];
let reverseColor = ["#070FFA", "#ff1909", "#ffffff", "#00fec3", "#ffffff", "#000000", "#000000", "#ffffff"]

var counter = 200;
var currentColor = randomNumber(0, colorArray.length - 1);

var myFunction = function () {
    counter = randomNumber(0, 200);
    currentColor = randomNumber(0, colorArray.length - 1);
    document.querySelector('body').style.backgroundColor = colorArray[currentColor]
    if (colorArray[currentColor] == '#FFC0CB')
        counter = 1500
    document.querySelector('h1').style.color = reverseColor[currentColor]
    document.querySelector('label').style.color = reverseColor[currentColor]
    glitch = setTimeout(myFunction, counter);
    setTimeout(glitchFunction, counter + 20)
}
setTimeout(myFunction, counter);

var glitchFunction = function () {
    var button = document.querySelector('.button');
    // Add a class to start the animation
    button.classList.add('start-animation');
    setTimeout(function () {
        button.classList.remove('start-animation')
    }, 300)
}

function action() {
    console.log(document.querySelector('input').value.toLowerCase())
    if(document.querySelector('input').value.toLowerCase() == 'athene'){
        ausgabe = `13°24'13.2"E`
    } else {ausgabe = 'wrong. try again.'}
    document.querySelector('body').style.backgroundColor = 'black'
    clearTimeout(glitch)
    document.querySelector('body').innerHTML = ''

    setTimeout(function(){
        let ausgabeText = document.createElement('h1')
        ausgabeText.innerText = ausgabe
        ausgabeText.classList.add('ausgabeText')
        document.body.appendChild(ausgabeText)
        setTimeout(function(){
            close()
        }, 2500)
    }, 2000)
}