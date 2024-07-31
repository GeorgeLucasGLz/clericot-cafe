let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

lightGallery(document.querySelector('#cardapio1'))
lightGallery(document.querySelector('#cardapio2'))
lightGallery(document.querySelector('#cardapio3'))


function scrollToElement(elementSelector, instance = 0) {

  const elements = document.querySelectorAll(elementSelector)

  if (elements.length > instance) {

    elements[instance].scrollIntoView({ behavior: 'smooth' })
  } else {
    return
  }
}

const btnToggleOn = document.querySelector('.btn-toggle-on')
const navToggleOn = document.querySelector('.nav-toggle-on')

function showMenuToggle() {
  btnToggleOn.style.opacity = '0'
  navToggleOn.style.display = 'flex'

  setTimeout(() => {
    navToggleOn.classList.add('active')
  }, 10)
}

function closeMenuToggle() {

  btnToggleOn.style.opacity = '1'
  navToggleOn.classList.remove('active')

  setTimeout(() => {
    navToggleOn.style.display = 'none'
  }, 300)
}


const navHome = document.querySelector('#nav-home')
const navSpace = document.querySelector('#nav-space')
const navFood = document.querySelector('#nav-food')

const toggleHome = document.querySelector('#toggle-home')
const toggleSpace = document.querySelector('#toggle-space')
const toggleFood = document.querySelector('#toggle-food')

navHome.addEventListener('click', (event) => {

  event.preventDefault()
  scrollToElement('header')

})

toggleHome.addEventListener('click', (event) => {

  event.preventDefault()
  closeMenuToggle()
  scrollToElement('header')

})

navSpace.addEventListener('click', (event) => {

  event.preventDefault()
  scrollToElement('.section-destaques')

})

toggleSpace.addEventListener('click', (event) => {

  event.preventDefault()
  closeMenuToggle()
  scrollToElement('.section-destaques')

})


navFood.addEventListener('click', (event) => {

  event.preventDefault()
  scrollToElement('.section-cardapio')

})

toggleFood.addEventListener('click', (event) => {

  event.preventDefault()
  closeMenuToggle()
  scrollToElement('.section-cardapio')

})
