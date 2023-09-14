//////////////////// PART 1 ////////////////////

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z._]+[0-9.]+@gmail\.com$/

gmailButton.onclick = () =>{
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }  else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

//////////////////// PART 2 ////////////////////

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;

    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        childBlock.style.top = `${positionY}px`;

    } else if (positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;

    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }

    setTimeout(move, 15);
}

move();





//////////////////// HOME 2 ////////////////////
const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonReset= document.querySelector('#reset');


const secondsS = document.querySelector('#secondsS');
let num = 0
let interval = null

//////////////////// start ////////////////////

buttonStart.addEventListener('click', () => {
    
    if (!interval) {
        interval = setInterval( () =>{
            num++;
            secondsS.innerHTML = num;
        }, 1000)
    }
});   
    
//////////////////// stop ////////////////////
buttonStop.addEventListener('click', () => {

    if (interval) {
        clearInterval(interval)
        interval = null
    }
});


//////////////////// reset ////////////////////
buttonReset.addEventListener('click', () => {
    num = 0
    secondsS.innerHTML = num

    if (interval) {
        clearInterval(interval);
        interval = null;
    }
});