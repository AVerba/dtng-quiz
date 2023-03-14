let ProgressWidth = 0,
  num = 0;
let selected = document.querySelector('.form-control');
const slider = document.querySelector('.slider'),
  slider__items = slider.querySelectorAll('.slider__item'),
  buttons = document.querySelectorAll('.btn__slider'),
  progressElement = document.querySelector('.page__progress__filled'),
  maxItems = slider__items.length,
  nextBtn=document.getElementById('nxtBtn'),
  ProgressStep = 100 / (maxItems),
  error = document.querySelector('[data-error]'),
  userAge = document.getElementById('user-age');


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
  if (num + 1 === maxItems) {
    showLoading();
    ProgressWidth = 100;
  }
  elem.classList.add('active');
};
nextBtn.addEventListener("click",()=>{
  console.log(selected)
  loadOptions(selected)
} )

const setListeners = () => {
  buttons.forEach(function(item) {
    item.addEventListener('click', () => {
      if (item.id === 'nextBtn') {
        console.log(selected)
        selected.addEventListener('click', () => loadOptions(event));

      }

      // if (item.id === 'userAgeBtn') {
      //   if (userAge.value < 18) {
      //     error.classList.remove('_is-hidden');
      //     setTimeout(() => {
      //       error.classList.add('_is-hidden');
      //       window.location.href = `${getUrlVars()}`;
      //     }, 3000);
      //   } else {
      //     ProgressWidth += ProgressStep;
      //     addActive('plus');
      //     progressElement.style.width = `${ProgressWidth}%`;
      //
      //   }
      // } else {
      //
      //   ProgressWidth += ProgressStep;
      //   addActive('plus');
      //   progressElement.style.width = `${ProgressWidth}%`;
      // }
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
  document.querySelector('.analyzer').style.display = 'none';
  document.querySelector('.loading__spinner').style.display = 'flex';
};
const showReview = () => {
  document.querySelector('.loading__spinner').style.display = 'none';
  document.querySelector('.review').style.display = 'flex';

};

function showLoading() {
  const randomDelay = getRandom(2, 6);
  const bar = document.querySelector('.loading__bar');
  const loadingTextElement = document.querySelector(' .loading__analyzing span');
  let loadingText = 0;
  const addToLoadText = 100 / (randomDelay * 2);

  const interval = setInterval(function() {
    loadingText = Math.floor(loadingText + addToLoadText);
    if (loadingText > 100) {
      clearInterval(interval);
      loadingText = 100;
    }
    bar.style.width = `${loadingText}%`;
    loadingTextElement.innerHTML = `${loadingText}`;

    if (loadingText === 100) {
      setTimeout(showSpinner, 1000);
    }
    if (loadingText === 100) {
      setTimeout(showReview, 3000);
    }
  }, 500);
}

function getUrlVars() {
  let vars = {}, hash;
  const hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    if (hash[1]) {
      vars[hash[0]] = hash[1];
    }
  }
  return hashes;
}
function shortString(selector) {
  const elements = document.querySelectorAll(selector);
  const tail = '...';
  if (elements && elements.length) {
    for (const element of elements) {
      let text = element.innerText;
      if (element.hasAttribute('data-limit')) {
        if (text.length > element.dataset.limit) {
          element.innerText = `${text.substring(0, element.dataset.limit - tail.length).trim()}${tail}`;
        }
      } else {
        throw Error('Cannot find attribute \'data-limit\'');
      }
    }
  }
}





// selected.addEventListener('click', () => loadOptions(event));

function loadOptions(e) {
  for (let i = 18; i < 101; i++) {
    let item = document.createElement('option');

    item.innerHTML = `${i}`;
    e.appendChild(item);
  }
  shortString('.short');
}
// window.onload = function() {
//   loadOptions(selected)
//   // selected.addEventListener('click', () => loadOptions(event));
// };

setListeners();
