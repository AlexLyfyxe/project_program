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

const right = (element, length, speed = 1) => {

    const currentLeft = parseFloat(element.style.left) || 0;

    if (currentLeft < length) {
        const way = speed;
        // element.style.left = (currentLeft + way) + 'px';
        element.style.left = `${currentLeft + way}px`
    }

    requestAnimationFrame(() => right(element, length, speed));
}


right(childBlock, 450, 2);




