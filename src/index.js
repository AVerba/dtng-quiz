let ProgressWidth = 0,
  num = 0;
const slider = document.querySelector('.slider'),
  slider__items = slider.querySelectorAll('.slider__item'),
  buttons = document.querySelectorAll('.btn__slider'),
  progressElement = document.querySelector('.page__progress__filled'),
  maxItems = slider__items.length,
  ProgressStep = 100 / (maxItems);


const transformNum = () => {
  let backElem, frontElem;
  backElem = slider__items[num - 1];
  frontElem = slider__items[num];
  backElem.style.transform = `translateZ(0px) translate(${-1 * num * 100}%, 0)`;
  frontElem.style.transform = `translateZ(0px) translate(${-1 * num * 100}%, 0)`;

};


const addActive = (direction) => {
  let elem;
  if (num + 1 === maxItems) {
    return;
  }
  num++;
  transformNum();
  elem = slider__items[num - 1];
  elem.classList.remove('active');

  elem = slider__items[num];
  if(num+1  === maxItems){
    showLoading();
    ProgressWidth = 100;
  }
  elem.classList.add('active');
};

const setListeners = () => {
  buttons.forEach(function(item) {
    item.addEventListener('click', () => {

      ProgressWidth += ProgressStep;
      addActive('plus');
      progressElement.style.width = `${ProgressWidth}%`;
    });
  });
};

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};
const showSpinner = () => {
  document.querySelector('.analyzer').style.display="none";
  document.querySelector('.loading__spinner').style.display="flex";
}
const showReview = () => {
  document.querySelector('.loading__spinner').style.display="none";
  document.querySelector('.review').style.display="flex";

}

function showLoading() {
  const randomDelay = getRandom(2, 6);
  const bar = document.querySelector('.loading__bar');
  const loadingTextElement = document.querySelector(' .loading__analyzing span');
  let loadingText = 0;
  const addToLoadText = 100 / (randomDelay * 2);

  const interval = setInterval(function () {
    loadingText = Math.floor(loadingText + addToLoadText);
    if (loadingText > 100) {
      clearInterval(interval);
      loadingText = 100;
    }
    bar.style.width =`${loadingText}%`;
    loadingTextElement.innerHTML= `${loadingText}`;

    if (loadingText === 100) {
      setTimeout(showSpinner, 1000);
    }
    if (loadingText === 100) {
      setTimeout(showReview, 3000);
    }
  }, 500)
}


setListeners();
