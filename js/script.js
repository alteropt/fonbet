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

const currentVariantText = document.querySelector('.constructor.shevron-left .constructor__current span')
const swiperLength = swiperConstructor2.slides.length

swiperConstructor2.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor.shevron-left .swiper-pagination-bullet') 
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor.shevron-left .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperLength) {
  currentVariantText.innerHTML = ` пуст`
  } else {
    currentVariantText.innerHTML = `${activeSlideIndex+1}/${swiperLength-1}`
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

const mainSwiper = new Swiper('.main-slider', {
  autoHeight: true,
  loop: true,
  navigation: {
    nextEl: '.main-arrow-next',
    prevEl: '.main-arrow-prev'
  }
})


