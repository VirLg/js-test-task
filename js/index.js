let positionX = 0;

const refLeftBtn = document.querySelector('.leftBtn');

window.addEventListener('resize', function () {
  redDiv.style.left = '40px';
  refLeftBtn.disabled = true;
});

const refHero = document.querySelector('#redDiv');
const refRightBtn = document.querySelector('.rightBtn');

refLeftBtn.addEventListener('click', onToLeftBtnClick);

function positionHero() {
  positionX = refHero.getBoundingClientRect().x;
}

function onToLeftBtnClick(evt) {
  positionHero();
  redDiv.style.left = positionX - 88 + 'px';
  console.log('first', positionX);
  if (positionX < 129) refLeftBtn.disabled = true;
  if (positionX < 1210) refRightBtn.disabled = false;
}
refRightBtn.style.marginTop = `${
  refHero.getBoundingClientRect().height + 15
}px`;

refLeftBtn.style.marginTop = `${refHero.getBoundingClientRect().height + 15}px`;

refRightBtn.addEventListener('click', onToRightBtnClick);
function onToRightBtnClick(evt) {
  positionHero();
  redDiv.style.left = positionX + 88 + 'px';
  console.log('first', positionX);
  if (positionX > 7) refLeftBtn.disabled = false;
  if (positionX > 980) refRightBtn.disabled = true;
}

window.addEventListener('keydown', onKeypress);

function onKeypress(e) {
  if (e.key === 'ArrowRight') console.log('e', e);
  let left = e.clientX;
}

function moveAt(pageX, pageY) {
  ball.style.left = pageX - shiftX + 'px';
  ball.style.top = pageY - shiftY + 'px';
}
