"use strict";

// Переменные - объекты страницы

let iconColliction = document.querySelector(
  ".col_box_weAreGreat_description_list"
);
let priceCollection = document.querySelector(
  ".col_box_programPrice_description_list"
);
let reviewsList = document.querySelector(".col_box_reviews_list");
let burger = document.querySelector(".header_nav_burger");
let headerMenu = document.querySelector(".header_nav_list");
let headerImg = document.querySelector(".header_nav_img");
let priceArrowsList = document.querySelector(".prices_arrows");
let reviewsArrowsList = document.querySelector(".reviews_arrows");
let programPriceList = document.querySelector(
  ".col_box_programPrice_description_list"
);
let programPriceBox = document.querySelector(".programPrice");
let reviewsBox = document.querySelector(".col_box_reviews");

// Функции для событий

let myClick = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  composed: false,
});

function showDescr(item, selector, parentSelector) {
  let questionItem = item.querySelector(selector);
  if (questionItem.classList.contains("descr_active")) {
    questionItem.classList.remove("descr_active");
  } else {
    [...questionItem.closest(parentSelector).querySelectorAll('.descr_active')].forEach(el => el.classList.remove('descr_active'));
    questionItem.classList.add("descr_active");
  };
}

function pickOutThisList(event) {
  let target = event.target.closest(
    ".col_box_programPrice_description_list_item"
  );
  programPriceList
    .querySelector(".price_item_active")
    .classList.remove("price_item_active");
  target.classList.add("price_item_active");
  let priceActive = programPriceList.querySelector(".price_active");
  if (!target.classList.contains("program_advanced")) {
    priceActive.querySelector(".price_active_span").textContent =
      "Отличный выбор!";
  }
  target
    .querySelector(".programPrice_price")
    .insertAdjacentElement("afterend", priceActive);
  target.querySelector(".programPrice_price").style.borderBottom = "0"; // = 0; style.borderBottom
  [
    ...programPriceList.querySelectorAll(
      ".col_box_programPrice_description_list_item"
    ),
  ].forEach((el) => {
    if (!el.classList.contains("price_item_active")) {
      el.querySelector(".programPrice_price").style.borderBottom =
        "5px solid #cc3333";
    }
  });
}

let pickOutNextList = (event) => {
  let target;
  try {
    target = event.target.closest("svg");
  } catch (err) {
    target = document.createElement("li");
  }
  let arrPrices = [
    ...programPriceList.querySelectorAll(
      ".col_box_programPrice_description_list_item"
    ),
  ];
  let activeItemInd = arrPrices.findIndex((el) =>
    el.classList.contains("price_item_active")
  );
  if (
    target.classList.contains("arrow_left") ||
    this.event.code === "ArrowLeft"
  ) {
    if (activeItemInd === 0) {
      arrPrices[arrPrices.length - 1].dispatchEvent(myClick);
    } else {
      arrPrices[activeItemInd - 1].dispatchEvent(myClick);
    }
  } else if (
    target.classList.contains("arrow_right") ||
    this.event.code === "ArrowRight"
  ) {
    if (activeItemInd === arrPrices.length - 1) {
      arrPrices[0].dispatchEvent(myClick);
    } else {
      arrPrices[activeItemInd + 1].dispatchEvent(myClick);
    }
  }
};

//События

iconColliction.addEventListener("click", (event) => {
  let target = event.target;
  if (!target.closest("li")) return;
  showDescr(
    target.closest("li"),
    ".col_box_weAreGreat_description_list_item_descr", "ul"
  );
});

//Хочется, чтобы при клике на элемент, он появлялся в центре экрана. Но, каждый раз пересчитывать значения ширину блока для подставления в scrollBy неудобно. Есть какой-нибудь более элегантный способ сделать подобное?

priceCollection.addEventListener("click", (event) => { 
  let target = event.target;
  if (!target.closest("li")) return;
  showDescr(target.closest("li"), ".programPrice_descr_list", '.col_box_programPrice_description_list');
});

reviewsArrowsList.addEventListener("click", (event) => {
  let target = event.target.closest("svg");
  if (target.classList.contains("arrow_right")) {
    reviewsList.scrollBy(393, 0);
  } else if (target.classList.contains("arrow_left")) {
    reviewsList.scrollBy(-393, 0);
  }
});
let reviewsBox_mouseenter = false;
reviewsBox.addEventListener("mouseenter", () => (reviewsBox_mouseenter = true));
reviewsBox.addEventListener(
  "mouseleave",
  () => (reviewsBox_mouseenter = false)
);
document.addEventListener("keydown", (event) => {
  if (!reviewsBox_mouseenter) return;
  else if (event.code === "ArrowRight" && reviewsBox_mouseenter === true) {
    reviewsList.scrollBy(393, 0);
  } else if (event.code === "ArrowLeft" && reviewsBox_mouseenter === true) {
    reviewsList.scrollBy(-393, 0);
  }
});

programPriceList.addEventListener("click", pickOutThisList);

priceArrowsList.addEventListener("click", pickOutNextList);

let programPriceBox_mouseenter = false;

programPriceBox.addEventListener(
  "mouseenter",
  () => (programPriceBox_mouseenter = true)
);
programPriceBox.addEventListener(
  "mouseleave",
  () => (programPriceBox_mouseenter = false)
);
document.addEventListener("keydown", (event) => {
  if (!programPriceBox_mouseenter) return;
  else if (
    (event.code === "ArrowRight" || event.code === "ArrowLeft") &&
    programPriceBox_mouseenter === true
  ) {
    pickOutNextList();
  }
});

burger.addEventListener("click", () => {
  headerMenu.classList.toggle("menu_active");
});

headerImg.addEventListener("click", () => {
  window.location.href = "../index.html";
});
