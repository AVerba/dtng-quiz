let slider = document.querySelector('.slider');
let slider__items = slider.querySelectorAll('.slider__item');
let buttons = document.querySelectorAll('.btn__slider');


let maxItems = slider__items.length;

let num = 0;

function transformNum(znak) {
  let backElem, frontElem;
  backElem = slider__items[num - 1];
  frontElem = slider__items[num];
  backElem.style.transform = `translateZ(0px) translate(${-1 * num * 100}%, 0)`;
  frontElem.style.transform = `translateZ(0px) translate(${-1 * num * 100}%, 0)`;

}

function addActive(znak) {
  let elem;

  if (num + 1 === maxItems) {
    return;
  }
  num++;
  transformNum(znak);
  elem = slider__items[num - 1];
  elem.classList.remove('active');

  elem = slider__items[num];
  elem.classList.add('active');
}
function setListeners() {
  buttons.forEach(function (item) {
    item.addEventListener('click', () => {
      addActive('plus');
    });;
  });
}

setListeners();
