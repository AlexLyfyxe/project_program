const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal_close');
const modalTrigger = document.querySelector('#btn-get');
  

  
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}




// 2) openModalScroll
// removeEventListener 

let modalShown = false;

const openModalScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (!modalShown && docHeight - 1 <= scrollTop + winHeight) {
        openModal();
        modalShown = true;
        window.removeEventListener('scroll', openModalScroll);
    }
};

window.addEventListener('scroll', openModalScroll);



/// 3) Timer modal 
setTimeout(openModal, 10000);