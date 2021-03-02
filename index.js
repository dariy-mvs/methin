'use strict'

// Переменные - объекты страницы
let iconColliction = [...document.querySelectorAll('.col_box_weAreGreat_description_list_item')];
let reviewsList = document.querySelector('.col_box_reviews_list');
let burger = document.querySelector('.header_nav_burger');
let headerMenu = document.querySelector('.header_nav_list');
let headerImg = document.querySelector('.header_nav_img');

// События

iconColliction.forEach(i => {
  i.onclick = () => {
    let questionItem = i.querySelector('.col_box_weAreGreat_description_list_item_descr');
    if (questionItem.classList.contains('descr_active')) {
      questionItem.classList.remove('descr_active')
    } else {
      let activeItem = document.querySelector('.descr_active');
    if (activeItem) {
      activeItem.classList.remove('descr_active')
    }
    questionItem.classList.add('descr_active')
    }
    
  }
});

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