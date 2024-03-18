let positionX = 0;

const ref = {
  refLeftBtn: document.querySelector('.leftBtn'),
  refHero: document.querySelector('#redDiv'),
  refRightBtn: document.querySelector('.rightBtn'),
  refBtn: document.querySelector('.btn'),
};
window.addEventListener('resize', function () {
  redDiv.style.left = '40px';
  ref.refLeftBtn.disabled = true;
});

function updatePosition(coord) {
  positionX = ref.refHero.getBoundingClientRect().x;
  redDiv.style.left = positionX + coord + 'px';
  positionX < 129
    ? (ref.refLeftBtn.disabled = true)
    : (ref.refLeftBtn.disabled = false);
  positionX > 980
    ? (ref.refRightBtn.disabled = true)
    : (ref.refRightBtn.disabled = false);
}
ref.refBtn.style.marginTop = `${
  ref.refHero.getBoundingClientRect().height + 15
}px`;

ref.refLeftBtn.addEventListener('click', () => updatePosition(-88));
ref.refRightBtn.addEventListener('click', () => updatePosition(88));

// let positionX = 0;

// const ref = {
//   refLeftBtn: document.querySelector('.leftBtn'),
//   refHero: document.querySelector('#redDiv'),
//   refRightBtn: document.querySelector('.rightBtn'),
// };

// function updateButtonStates() {
//   const leftBtnDisabled = positionX < 129;
//   const rightBtnDisabled = positionX > 980;
//   ref.refLeftBtn.disabled = leftBtnDisabled;
//   ref.refRightBtn.disabled = rightBtnDisabled;
// }

// function positionHero() {
//   const rect = ref.refHero.getBoundingClientRect();
//   positionX = rect.x;
//   ref.refRightBtn.style.marginTop = `${rect.height + 15}px`;
//   ref.refLeftBtn.style.marginTop = `${rect.height + 15}px`;
// }

// window.addEventListener('resize', function () {
//   positionHero();
//   redDiv.style.left = '40px';
//   updateButtonStates();
// });

// function moveHero(offset) {
//   positionHero();
//   positionX += offset;
//   redDiv.style.left = `${positionX}px`;
//   updateButtonStates();
// }

// ref.refLeftBtn.addEventListener('click', () => moveHero(-88));
// ref.refRightBtn.addEventListener('click', () => moveHero(88));

// positionHero();
// updateButtonStates();
