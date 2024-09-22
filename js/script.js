const swiper = new Swiper(document.querySelector('.swiper'), {
  direction: 'horizontal',
  slidesToShow: 1,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})

const currentVariantText = document.querySelector('.constructor__current span')
const swiperBullets = document.querySelectorAll('.swiper-pagination-bullet') 
const swiperLength = swiper.slides.length

swiper.on('slideChange afterInit init', () => {
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.swiper-pagination-bullet-active'))
  
  if(activeSlideIndex + 1 === swiperLength) {
  currentVariantText.innerHTML = ` пуст`
  } else {
    currentVariantText.innerHTML = `${activeSlideIndex+1}/${swiperLength-1}`
  }
})
