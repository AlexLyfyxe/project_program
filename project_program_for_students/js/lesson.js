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