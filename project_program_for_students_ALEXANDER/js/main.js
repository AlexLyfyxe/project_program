// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color');
const javaScript = document.querySelector('#js-color');

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }

    return '#' + color;
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {

        const randomColor = generateRandomColor();
        buttonColor.style.backgroundColor = randomColor;


        buttonColor.innerHTML = randomColor;
        
        buttonColor.onclick = (event) => {
            const textColor = event.target.innerHTML;
            javaScript.style.color = textColor;
        }
    });
}

setRandomColors();


window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

/////////// random color border && text

const changeColorButton = document.getElementById('changeColorButton');

// Add a click event listener to the button
changeColorButton.addEventListener('click', () => {
    // Select all elements you want to change (you can adjust this selector)
    const elementsToChange = document.querySelectorAll('.header, .logotype, .menu_link a, .main_block, .btn-color, .footer h2, .slider, .slide_card, .slide_card h3, .slide_card p, .slide_card a, .botlle, .bowl, .liquid, .liquid::before, .shadow, button, input, .modal_content ');

    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Function to generate a random background gradient for the .header element
    const getRandomGradient = () => {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        return `linear-gradient(135deg, ${color1}, ${color2})`;
    };

    // Loop through the selected elements and update their styles with random colors
    elementsToChange.forEach((element) => {
        const newColor = getRandomColor();
        const newBorderColor = getRandomColor();
        element.style.color = newColor;
        element.style.borderColor = newBorderColor;
    });

    // Update the background gradient of the .header element
    const header = document.querySelector('.header');
    header.style.background = getRandomGradient();
});
