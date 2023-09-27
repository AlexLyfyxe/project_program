//////////////////// lesson 1 ////////////////////
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }  else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}



// TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const parentTabs = document.querySelector('.tab_content_items')


const hideTabContent = () =>{
    tabContentBlocks.forEach((tabContentBlock) => {
        tabContentBlock.style.display = 'none'
    })
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
    
}



const showTabContent = (indexElemet = 0) => {
    
    tabContentBlocks[indexElemet].style.display = 'block'
    tabItems[indexElemet].classList.add('tab_content_item_active')
    
}



showTabContent()    
showTabContent()

parentTabs.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem){
                hideTabContent()
                showTabContent(tabIndex)
                
            }
        }) 
        
    }
}



// 1)Avto Slider
let activeTab = 0


const showNext = () => {
    hideTabContent();
    activeTab = activeTab === tabItems.length - 1 ? 0 : activeTab + 1;
    showTabContent(activeTab);
}


const startSlider = () => setInterval(showNext, 3000);

startSlider();




parentTabs.addEventListener('click', event => {
    if (event.target.classList.contains('tab_content_item')) {
        hideTabContent();

        tabItems.forEach((item, index) => {
            if (item === event.target) {
                activeTab = index;
            }
        });

        showTabContent(activeTab);
    }
    
});


//////// CONVENTER

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const jpy = document.querySelector('#jpy');
const byn = document.querySelector('#byn');
const kzt = document.querySelector('#kzt');
const aed = document.querySelector('#aed');
const gbp = document.querySelector('#gbp');

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)

//     })

// })


// usd.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         som.value = (usd.value * response.usd).toFixed(2)

//     })

// })



///DRY - don't repeate yourself
// KISS - Keep it semple, stupid



const converter = (element, target1, target2, target3, target4, target5, target6, Currency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()


        request.onload = () => {
            const response = JSON.parse(request.response)
            if (Currency === 'som') {
                target1.value = (element.value / response.usd).toFixed(2);
                target2.value = (element.value / response.jpy).toFixed(2);
                target3.value = (element.value / response.byn).toFixed(2);
                target4.value = (element.value / response.kzt).toFixed(2);
                target5.value = (element.value / response.aed).toFixed(2);
                target6.value = (element.value / response.gbp).toFixed(2);
            
            } else if (Currency === 'usd') {
                target1.value = (element.value * response.usd).toFixed(2);       
                target2.value = (element.value * (response.usd / response.jpy)).toFixed(2);
                target3.value = (element.value * (response.usd / response.byn)).toFixed(2);
                target4.value = (element.value * (response.usd / response.kzt)).toFixed(2);
                target5.value = (element.value * (response.usd / response.aed)).toFixed(2);
                target6.value = (element.value * (response.usd / response.gbp)).toFixed(2);

            } else if (Currency === 'jpy') {
                target1.value = (element.value * response.jpy).toFixed(2);
                target2.value = (element.value * (response.jpy / response.usd)).toFixed(2);
                target3.value = (element.value * (response.jpy / response.byn)).toFixed(2);
                target4.value = (element.value * (response.jpy / response.kzt)).toFixed(2);
                target5.value = (element.value * (response.jpy / response.aed)).toFixed(2);
                target6.value = (element.value * (response.jpy / response.gbp)).toFixed(2);

            } else if (Currency === 'byn') {
                target1.value = (element.value * response.byn).toFixed(2);
                target2.value = (element.value * (response.byn / response.usd)).toFixed(2);
                target3.value = (element.value * (response.byn / response.jpy)).toFixed(2);
                target4.value = (element.value * (response.byn / response.kzt)).toFixed(2);
                target5.value = (element.value * (response.byn / response.aed)).toFixed(2);
                target6.value = (element.value * (response.byn / response.gbp)).toFixed(2);

            } else if (Currency === 'kzt') {
                target1.value = (element.value * response.kzt).toFixed(2);
                target2.value = (element.value * (response.kzt / response.usd)).toFixed(2);
                target3.value = (element.value * (response.kzt / response.jpy)).toFixed(2);
                target4.value = (element.value * (response.kzt / response.byn)).toFixed(2);
                target5.value = (element.value * (response.kzt / response.aed)).toFixed(2);
                target6.value = (element.value * (response.kzt / response.gbp)).toFixed(2);

            } else if (Currency === 'aed') {
                target1.value = (element.value * response.aed).toFixed(2);
                target2.value = (element.value * (response.aed / response.usd)).toFixed(2);
                target3.value = (element.value * (response.aed / response.jpy)).toFixed(2);
                target4.value = (element.value * (response.aed / response.byn)).toFixed(2);
                target5.value = (element.value * (response.aed / response.kzt)).toFixed(2);
                target6.value = (element.value * (response.aed / response.gbp)).toFixed(2);

            } else if (Currency === 'gbp') {
                target1.value = (element.value * response.gbp).toFixed(2);
                target2.value = (element.value * (response.gbp/ response.usd)).toFixed(2);
                target3.value = (element.value * (response.gbp / response.jpy)).toFixed(2);
                target4.value = (element.value * (response.gbp / response.byn)).toFixed(2);
                target5.value = (element.value * (response.gbp / response.kzt)).toFixed(2);
                target6.value = (element.value * (response.gbp / response.aed)).toFixed(2);
            }
            // element.value === ''? target.value = '': false
            
            element.value === '' && (target1.value = '');
            element.value === '' && (target2.value = '');
            element.value === '' && (target3.value = '');
            element.value === '' && (target4.value = '');
            element.value === '' && (target5.value = '');
            element.value === '' && (target6.value = '');

        }
    }
}

converter(som, usd, jpy, byn, kzt, aed, gbp, 'som');
converter(usd, som, jpy, byn, kzt, aed, gbp, 'usd');
converter(jpy, som, usd, byn, kzt, aed, gbp, 'jpy');
converter(byn, som, usd, jpy, kzt, aed, gbp, 'byn');
converter(kzt, som, usd, jpy, byn, aed, gbp, 'kzt');
converter(aed, som, usd, jpy, byn, kzt, gbp, 'aed');
converter(gbp, som, usd, jpy, byn, kzt, aed, 'gbp');




// Card swither
const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let count = 1;

const fetchCard = (count) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(response => response.json())
    .then(data => {
      card.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
      `;
    });
}

fetchCard(count);



btnNext.onclick = () => {
  count++;
  if (count > 200) {
    count = 1;
  }
  fetchCard(count);
};

btnPrev.onclick = () => {
  count--;
  if (count < 1) {
    count = 200;
  }
  fetchCard(count);
};


/// parth -- 2 fetch
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
    
