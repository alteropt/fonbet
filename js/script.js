const swiperConstructor = new Swiper(document.querySelector('.constructor__main .constructor__variants'), {
  direction: 'horizontal',
  slidesToShow: 1,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: '.constructor__main .constructor__choice .swiper-button-next',
    prevEl: '.constructor__main .constructor__choice .swiper-button-prev',
  },
  pagination: {
    el: '.constructor__main .constructor__choice .swiper-pagination',
    clickable: true,
  }
})

const swiperConstructor2 = new Swiper(document.querySelector('.constructor.shevron-left .constructor__variants'), {
  direction: 'horizontal',
  slidesToShow: 1,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: '.constructor.shevron-left .constructor__choice .swiper-button-next',
    prevEl: '.constructor.shevron-left .constructor__choice .swiper-button-prev',
  },
  pagination: {
    el: '.constructor.shevron-left .swiper-pagination',
    clickable: true,
  }
})

const swiperConstructor3 = new Swiper(document.querySelector('.constructor.shevron-right .constructor__variants'), {
  direction: 'horizontal',
  slidesToShow: 1,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: '.constructor.shevron-right .constructor__choice .swiper-button-next',
    prevEl: '.constructor.shevron-right .constructor__choice .swiper-button-prev',
  },
  pagination: {
    el: '.constructor.shevron-right .constructor__choice .swiper-pagination',
    clickable: true,
  }
})

const currentVariantTextMain = document.querySelector('.constructor__main .constructor__current span')
const swiperShevronMainLength = swiperConstructor.slides.length
const currentVariantTextShevronLeft = document.querySelector('.constructor.shevron-left .constructor__current span')
const swiperShevronLeftLength = swiperConstructor2.slides.length
const currentVariantTextShevronRight = document.querySelector('.constructor.shevron-right .constructor__current span')
const swiperShevronRightLength = swiperConstructor3.slides.length

swiperConstructor.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor__main .swiper-pagination-bullet') 
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor__main .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperShevronMainLength) {
    currentVariantTextMain.innerHTML = ` пуст`
  } else {
    currentVariantTextMain.innerHTML = `${activeSlideIndex+1}/${swiperShevronMainLength-1}`
  }
})

swiperConstructor2.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor.shevron-left .swiper-pagination-bullet') 
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor.shevron-left .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperShevronLeftLength) {
    currentVariantTextShevronLeft.innerHTML = ` пуст`
  } else {
    currentVariantTextShevronLeft.innerHTML = `${activeSlideIndex+1}/${swiperShevronLeftLength-1}`
  }
})
swiperConstructor2.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor.shevron-left .swiper-pagination-bullet') 
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor.shevron-left .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperShevronLeftLength) {
    currentVariantTextShevronLeft.innerHTML = ` пуст`
  } else {
    currentVariantTextShevronLeft.innerHTML = `${activeSlideIndex+1}/${swiperShevronLeftLength-1}`
  }
})

swiperConstructor3.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor.shevron-right .swiper-pagination-bullet') 
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor.shevron-right .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperShevronRightLength) {
    currentVariantTextShevronRight.innerHTML = ` пуст`
  } else {
    currentVariantTextShevronRight.innerHTML = `${activeSlideIndex+1}/${swiperShevronRightLength-1}`
  }
})

const cardSwiper = new Swiper(document.querySelector('.card__choice'), {
  direction: 'horizontal',
  slidesToShow: 1,
  spaceBetween: 12,
  loop: true,

  navigation: {
    nextEl: '.card__choice .swiper-button-next',
    prevEl: '.card__choice .swiper-button-prev',
  },

  pagination: {
    el: '.card__choice .swiper-pagination',
    clickable: true,
  }
})

document.getElementById('patch-name').addEventListener('change', function(e) {
  let patchName = e.target.value.trim()
  document.querySelector('.card__name').textContent = patchName
  e.target.value = e.target.value.trim()
  
  let charsLeft = 26 - e.target.value.length
  document.getElementById('name-amount').textContent = charsLeft

  if(document.querySelector('.card__name').textContent.length > 13) {
    document.querySelector('.card__name').innerHTML = document.querySelector('.card__name').textContent.slice(0, 13) + `<br/>` + document.querySelector('.card__name').textContent.slice(13,)
  }
})

const cardName = document.querySelector('.card__name')

document.getElementById('patch-name').addEventListener('keydown', function(e) {
  let patchName = e.target.value.trim()
  e.target.value = e.target.value.trim()

  if(e.code === "Enter") {    
    e.preventDefault()
    document.querySelector('.card__name').textContent = patchName
    
    let charsLeft = 26 - e.target.value.length
    document.getElementById('name-amount').textContent = charsLeft
    
    if(cardName.textContent.length > 13) {
      cardName.innerHTML = cardName.textContent.slice(0, 13) + `<br/>` + cardName.textContent.slice(13,)
    }
  }
})

const sections = document.querySelectorAll('section')
const navButtons = [...document.querySelectorAll('.main-arrow-prev'), ...document.querySelectorAll('.main-arrow-next')]

navButtons.forEach(navButton => {
  navButton.addEventListener('click', (e) => {
    e.preventDefault()
    const currentSection = document.querySelector('section.active')
    currentSection.classList.remove('active')
    const currentSectionIndex = Array.from(sections).indexOf(currentSection)
    if(e.target.classList.contains('main-arrow-next')) {
      sections[currentSectionIndex+1].classList.add('active')
    } else if(e.target.classList.contains('main-arrow-prev')) {
      sections[currentSectionIndex-1].classList.add('active')
    }
  })
})
