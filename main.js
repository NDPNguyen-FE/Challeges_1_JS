//challegen 1: your age in days
function ageInDays() {
    let birthYear = prompt('what year were you  porn ...');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDayss + 'days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayss);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function create() {
    var img = document.createElement('img');
    var div = document.getElementById('flex-box');
    img.src = "./photo-1514888286974-6c03e2ca1dba.jpg";
    div.appendChild(img);
}

//change color all buttons

var all_buttons = document.getElementsByTagName('button');




var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
};


console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green') {
        buttonGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonReset();
    } else if (buttonThingy.value === 'random') {
        buttonColors();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i], classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonGreen() {}

function buttonReset() {}

function buttonColors() {}