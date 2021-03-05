'use strict'

// Переменные - объекты страницы
let iconColliction = document.querySelector('.col_box_weAreGreat_description_list');
let priceCollection = document.querySelector('.col_box_programPrice_description_list');
let reviewsList = document.querySelector('.col_box_reviews_list');
let burger = document.querySelector('.header_nav_burger');
let headerMenu = document.querySelector('.header_nav_list');
let headerImg = document.querySelector('.header_nav_img');

// События

function showDescr(item, selector) { // Вот эту функцию хочется использовать и в списке "преимуществ" и в списке цен. С преимуществами всё ок.
  let questionItem = item.querySelector(selector);
  console.log(questionItem);
    if (questionItem.classList.contains('descr_active')) {
      questionItem.classList.remove('descr_active')
    } else {
      let activeItem = questionItem.parentElement.querySelector('.descr_active');
      console.log(activeItem);
    if (activeItem) {
      activeItem.classList.remove('descr_active')
    }
    questionItem.classList.add('descr_active')
    }
}

iconColliction.addEventListener('click', (event) => {
  let target = event.target;
  if (!target.closest('li')) return;
  showDescr(target.closest('li'), '.col_box_weAreGreat_description_list_item_descr')
});

priceCollection.addEventListener('click', (event) => {
  let target = event.target;
  console.log(target.closest('li'));
  if (!target.closest('li')) return;
  showDescr(target.closest('li'), '.programPrice_descr_list')
})

document.querySelector('.arrow_right').addEventListener('click', () => {
  reviewsList.scrollBy(393, 0)
});

document.querySelector('.arrow_left').addEventListener('click', () => {
  reviewsList.scrollBy(-393, 0)
});


burger.addEventListener('click', () => {
headerMenu.classList.toggle('menu_active');
})

headerImg.addEventListener('click', () => {
  window.location.href = '../index.html'
})