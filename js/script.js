const swiperConstructor = new Swiper(document.querySelector('.constructor__main .constructor__variants'), {
  direction: 'horizontal',
  slidesToShow: 1,
  spaceBetween: 12,
  init: false,
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

const swiperConstructor2 = new Swiper(
  document.querySelector('.constructor.shevron-left .constructor__variants'),
  {
    direction: 'horizontal',
    slidesToShow: 1,
    spaceBetween: 12,
    init: false,
    loop: true,
    navigation: {
      nextEl: '.constructor.shevron-left .constructor__choice .swiper-button-next',
      prevEl: '.constructor.shevron-left .constructor__choice .swiper-button-prev',
    },
    pagination: {
      el: '.constructor.shevron-left .swiper-pagination',
      clickable: true,
    },
  }
);

const swiperConstructor3 = new Swiper(
  document.querySelector('.constructor.shevron-right .constructor__variants'),
  {
    direction: 'horizontal',
    slidesToShow: 1,
    spaceBetween: 12,
    init: false,
    loop: true,
    navigation: {
      nextEl: '.constructor.shevron-right .constructor__choice .swiper-button-next',
      prevEl: '.constructor.shevron-right .constructor__choice .swiper-button-prev',
    },
    pagination: {
      el: '.constructor.shevron-right .constructor__choice .swiper-pagination',
      clickable: true,
    },
  }
);

const cardSwiper = new Swiper(document.querySelector('.card__choice .swiper'), {
  direction: 'horizontal',
  slidesToShow: 1,
  spaceBetween: 12,
  loop: true,
  init: false,

  navigation: {
    nextEl: '.card__choice .swiper-button-next',
    prevEl: '.card__choice .swiper-button-prev',
  },

  pagination: {
    el: '.card__choice .swiper-pagination',
    clickable: true,
  },
});

const finalSwiperRight = new Swiper(
  '.jersey .jersey__shevron-wrapper--right',
  {
    direction: 'horizontal',
    slidesToShow: 1,
    spaceBetween: 12,
    loop: true,
    enabled: false,
    navigation: {
      nextEl: '.swiper__nav-right .swiper-button-next',
      prevEl: '.swiper__nav-right .swiper-button-prev',
    },
    pagination: {
      el: '.swiper__nav-right .swiper-pagination',
      clickable: true,
    },
  }
);

const finalSwiperLeft = new Swiper(
  '.jersey .jersey__shevron-wrapper--left',
  {
    direction: 'horizontal',
    slidesToShow: 1,
    spaceBetween: 12,
    loop: true,
    enabled: false,
    navigation: {
      nextEl: '.swiper__nav-left .swiper-button-next',
      prevEl: '.swiper__nav-left .swiper-button-prev',
    },
    pagination: {
      el: '.swiper__nav-left .swiper-pagination',
      clickable: true,
    },
  }
);
const finalSwiperCenter = new Swiper(
  '.jersey .constructor__variants--final',
  {
    direction: 'horizontal',
    slidesToShow: 1,
    spaceBetween: 12,
    loop: true,
    enabled: false,
    navigation: {
      nextEl: '.swiper__nav-center .swiper-button-next',
      prevEl: '.swiper__nav-center .swiper-button-prev',
    },
    pagination: {
      el: '.swiper__nav-center .swiper-pagination',
      clickable: true,
    },
  }
);


function setOpacity(targetElement, elements, printImg) {
  printImg.style.opacity = '0.5';
  targetElement.style.opacity = '1';
  elements.forEach((el) => {
    el.style.opacity = '0.5';
  });
}


function addEventListeners() {
  const centerOverlay = document.querySelector('.jersey__center-overlay');
  const leftOverlay = document.querySelector('.jersey__left-overlay');
  const rightOverlay = document.querySelector('.jersey__right-overlay');
  const bottomOverlay = document.querySelector('.jersey__bottom-overlay');

  const mainPrint = document.querySelector('.l-jersey-main-print-5');
  const leftShevron = document.querySelector('.l-jersey-let-shevron-5');
  const rightShevron = document.querySelector('.l-jersey-right-shevron-5');
  const patch = document.querySelector('.l-jersey-patch-5');
  const printImg = document.querySelector('.l-jersey-image-5');
  const allSections = [mainPrint, leftShevron, rightShevron, patch];

  const swiperNavRight = document.querySelector('.swiper__nav-right')
  const swiperNavLeft = document.querySelector('.swiper__nav-left')
  const swiperNavCenter = document.querySelector('.swiper__nav-center')

  rightOverlay.addEventListener('click', (e) => {
    swiperNavRight.classList.add('active')
    finalSwiperRight.enable()
    const elements = [mainPrint, leftShevron, patch];
    setOpacity(rightShevron, elements, printImg);
  });
  leftOverlay.addEventListener('click', (e) => {
    swiperNavLeft.classList.add('active')
    finalSwiperLeft.enable()
    const elements = [mainPrint, rightShevron, patch];
    setOpacity(leftShevron, elements, printImg);
  });
  centerOverlay.addEventListener('click', (e) => {
    swiperNavCenter.classList.add('active')
    finalSwiperCenter.enable()
    const elements = [rightShevron, leftShevron, patch];
    setOpacity(mainPrint, elements, printImg);
  });
  bottomOverlay.addEventListener('click', (e) => {
    const elements = [rightShevron, leftShevron, mainPrint];
    setOpacity(patch, elements, printImg);
  });
  const finalSection = document.querySelector('section.final');
  finalSection.addEventListener('click', (e) => {
    const jerseySection = document.querySelector('.jersey');
    if (!jerseySection.contains(e.target)) {
      swiperNavRight.classList.remove('active')
      swiperNavLeft.classList.remove('active')
      swiperNavCenter.classList.remove('active')
      
      console.log(swiperNavCenter);
      printImg.style.opacity = '1';
      allSections.forEach((el) => {
        el.style.opacity = '1';
      });
    }
  });
}

async function request(url, method, params) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error('Произошла ошибка при выполнении запроса');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

async function fetchPrints() {
  const url = 'https://xcomfeed.com/fonbet/jersey/prints';
  const method = 'POST';
  const params = { artist_id: 1 };

  const response = await request(url, method, params);

  return response.prints;
}

async function setPrints() {
  const prints = await fetchPrints();

  const frontPrints = Object.values(prints.front);
  const sidePrints = Object.values(prints.side);
  const patchPrints = Object.values(prints.patch);

  const frontParentElement = document.querySelector('.constructor__main .swiper-wrapper');
  const leftSideParentElement = document.querySelector('.constructor.shevron-left .swiper-wrapper');
  const rightSideParentElement = document.querySelector('.constructor.shevron-right .swiper-wrapper');
  const patchParentElement = document.querySelector('.card .swiper-wrapper');

  frontPrints.reverse().forEach(print => {
    const imgEl = document.createElement('img');
    imgEl.src = print.image;
    imgEl.className = 'swiper-slide';

    frontParentElement.insertBefore(imgEl, frontParentElement.firstChild);
  });

  sidePrints.forEach((print) => {
    const imgEl = document.createElement('img');
    imgEl.src = print.image;
    imgEl.className = 'swiper-slide';

    leftSideParentElement.insertBefore(imgEl, leftSideParentElement.firstChild);
  });

  sidePrints.forEach((print) => {
    const imgEl = document.createElement('img');
    imgEl.src = print.image;
    imgEl.className = 'swiper-slide';

    rightSideParentElement.insertBefore(imgEl, rightSideParentElement.firstChild);
  });

  patchPrints.reverse().forEach((print) => {
    const imgEl = document.createElement('img');
    imgEl.src = print.image;
    imgEl.className = 'swiper-slide';

    patchParentElement.insertBefore(imgEl, patchParentElement.firstChild);
  });

  swiperConstructor.init();
  swiperConstructor2.init();
  swiperConstructor3.init();
  cardSwiper.init();
}

window.addEventListener('load', addEventListeners);
window.addEventListener('load', setPrints);

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

const currentVariantTextMain = document.querySelector('.constructor__main .constructor__current span')
const currentVariantTextShevronLeft = document.querySelector('.constructor.shevron-left .constructor__current span')
const currentVariantTextShevronRight = document.querySelector('.constructor.shevron-right .constructor__current span')
const currentVariantTextFinalCenter = document.querySelector('.swiper__nav-center .constructor__current span')
const currentVariantTextFinalLeft = document.querySelector('.swiper__nav-left .constructor__current span')
const currentVariantTextFinalRight = document.querySelector('.swiper__nav-right .constructor__current span')

swiperConstructor.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor__main .swiper-pagination-bullet')
  const swiperShevronMainLength = swiperBullets.length
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor__main .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperShevronMainLength) {
    currentVariantTextMain.innerHTML = ` пуст`
  } else {
    currentVariantTextMain.innerHTML = `${activeSlideIndex+1}/${swiperShevronMainLength-1}`
  }
})

swiperConstructor2.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor.shevron-left .swiper-pagination-bullet')
  const swiperShevronLeftLength = swiperBullets.length
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor.shevron-left .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperShevronLeftLength) {
    currentVariantTextShevronLeft.innerHTML = ` пуст`
  } else {
    currentVariantTextShevronLeft.innerHTML = `${activeSlideIndex+1}/${swiperShevronLeftLength-1}`
  }
})

swiperConstructor3.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor.shevron-right .swiper-pagination-bullet')
  const swiperShevronRightLength = swiperBullets.length
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor.shevron-right .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === swiperShevronRightLength) {
    currentVariantTextShevronRight.innerHTML = ` пуст`
  } else {
    currentVariantTextShevronRight.innerHTML = `${activeSlideIndex+1}/${swiperShevronRightLength-1}`
  }
})

finalSwiperCenter.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.swiper__nav-center .swiper-pagination-bullet')
  const finalSwiperCenterLength = swiperBullets.length
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.swiper__nav-center .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === finalSwiperCenterLength) {
    currentVariantTextFinalCenter.innerHTML = ` пуст`
  } else {
    currentVariantTextFinalCenter.innerHTML = `${activeSlideIndex+1}/${finalSwiperCenterLength-1}`
  }
})
finalSwiperLeft.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.swiper__nav-left .swiper-pagination-bullet')
  const finalSwiperLeftLength = swiperBullets.length
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.swiper__nav-left .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === finalSwiperLeftLength) {
    currentVariantTextFinalLeft.innerHTML = ` пуст`
  } else {
    currentVariantTextFinalLeft.innerHTML = `${activeSlideIndex+1}/${finalSwiperLeftLength-1}`
  }
})
finalSwiperRight.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.swiper__nav-right .swiper-pagination-bullet')
  const finalSwiperRightLength = swiperBullets.length
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.swiper__nav-right .swiper-pagination-bullet-active'))

  if(activeSlideIndex + 1 === finalSwiperRightLength) {
    currentVariantTextFinalRight.innerHTML = ` пуст`
  } else {
    currentVariantTextFinalRight.innerHTML = `${activeSlideIndex+1}/${finalSwiperRightLength-1}`
  }
})
