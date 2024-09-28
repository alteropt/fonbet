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

const currentVariantText = document.querySelector('.constructor.shevron-left .constructor__current span');

swiperConstructor2.on('slideChange afterInit init', () => {
  let swiperBullets = document.querySelectorAll('.constructor.shevron-left .swiper-pagination-bullet')
  const activeSlideIndex = Array.from(swiperBullets).indexOf(document.querySelector('.constructor.shevron-left .swiper-pagination-bullet-active'))
  const swiperLength = swiperConstructor2.slides.length;

  if (activeSlideIndex + 1 === swiperLength) {
    currentVariantText.innerHTML = ` пуст`
  } else {
    currentVariantText.innerHTML = `${activeSlideIndex+1}/${swiperLength-1}`
  }
})

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

const finalSwiper = new Swiper(
  document.querySelector('.jersey .constructor__variants--final'),
  {
    direction: 'horizontal',
    slidesToShow: 1,
    spaceBetween: 12,
    loop: true,
    enabled: false,
    navigation: {
      nextEl: '.constructor__choice .swiper-button-next',
      prevEl: '.constructor__choice .swiper-button-prev',
    },
    pagination: {
      el: '.constructor choice .swiper-pagination',
      clickable: true,
    },
  }
);

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
  },
  initialSlide: 1
})

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

  rightOverlay.addEventListener('click', (e) => {
    const elements = [mainPrint, leftShevron, patch];
    setOpacity(rightShevron, elements, printImg);
  });
  leftOverlay.addEventListener('click', (e) => {
    const elements = [mainPrint, rightShevron, patch];
    setOpacity(leftShevron, elements, printImg);
  });
  centerOverlay.addEventListener('click', (e) => {
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

  console.log(prints);

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
