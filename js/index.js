// let positionX = 0;

// const ref={
//   refLeftBtn:document.querySelector('.leftBtn'),
//   refHero :document.querySelector('#redDiv'),
//   refRightBtn : document.querySelector('.rightBtn'),
// }
// window.addEventListener('resize', function () {
//   redDiv.style.left = '40px';
//   ref.refLeftBtn.disabled = true;
// });
// function positionHero() {
//   positionX = ref.refHero.getBoundingClientRect().x;
// }
// ref.refRightBtn.style.marginTop = `${ref.refHero.getBoundingClientRect().height + 15}px`;
// ref.refLeftBtn.style.marginTop = `${ref.refHero.getBoundingClientRect().height + 15}px`;

// ref.refLeftBtn.addEventListener('click', ()=>{
//     positionHero();
//   redDiv.style.left = positionX - 88 + 'px';
//   if (positionX < 129) ref.refLeftBtn.disabled = true;
//   if (positionX < 1210) ref.refRightBtn.disabled = false;
// });
// ref.refRightBtn.addEventListener('click', ()=>{
//   positionHero();
//   redDiv.style.left = positionX + 88 + 'px';
//   if (positionX > 7) ref.refLeftBtn.disabled = false;
//   if (positionX > 980) ref.refRightBtn.disabled = true;
// });

let positionX = 0;

const ref = {
  refLeftBtn: document.querySelector('.leftBtn'),
  refHero: document.querySelector('#redDiv'),
  refRightBtn: document.querySelector('.rightBtn'),
};

function updateButtonStates() {
  const leftBtnDisabled = positionX < 129;
  const rightBtnDisabled = positionX > 980;
  ref.refLeftBtn.disabled = leftBtnDisabled;
  ref.refRightBtn.disabled = rightBtnDisabled;
}

function positionHero() {
  const rect = ref.refHero.getBoundingClientRect();
  positionX = rect.x;
  ref.refRightBtn.style.marginTop = `${rect.height + 15}px`;
  ref.refLeftBtn.style.marginTop = `${rect.height + 15}px`;
}

window.addEventListener('resize', function () {
  positionHero();
  redDiv.style.left = '40px';
  updateButtonStates();
});

function moveHero(offset) {
  positionHero();
  positionX += offset;
  redDiv.style.left = `${positionX}px`;
  updateButtonStates();
}

ref.refLeftBtn.addEventListener('click', () => moveHero(-88));
ref.refRightBtn.addEventListener('click', () => moveHero(88));

positionHero();
updateButtonStates();
