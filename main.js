const introModal = document.querySelector('.introModal')

const introBtn = document.querySelector('.introBtn')

introBtn.addEventListener('click', () =>{
  introModal.showModal();
})

const workModal = document.querySelector('.workModal')

const workBtn = document.querySelector('.workBtn')


workBtn.addEventListener('click', () =>{
  workModal.showModal();
})

const aboutModal = document.querySelector('.aboutModal')

const aboutBtn = document.querySelector('.aboutBtn')


aboutBtn.addEventListener('click', () =>{
  aboutModal.showModal();
})

const contactModal = document.querySelector('.contactModal')

const contactBtn = document.querySelector('.contactBtn')


contactBtn.addEventListener('click', () =>{
  contactModal.showModal();
})