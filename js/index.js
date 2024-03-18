let positionX = 0;
window.addEventListener('resize', function () {
  redDiv.style.left = '40px';
  refLeftBtn.disabled = true;
});
const ref={
  refLeftBtn:document.querySelector('.leftBtn'),
  refHero :document.querySelector('#redDiv'),
  refRightBtn : document.querySelector('.rightBtn'),

}
ref.refRightBtn.style.marginTop = `${ ref.refHero.getBoundingClientRect().height + 15}px`;
ref.refLeftBtn.style.marginTop = `${refHero.getBoundingClientRect().height + 15}px`;
function positionHero() {
  positionX = ref.refHero.getBoundingClientRect().x;
}
ref.refLeftBtn.addEventListener('click', ()=>{
    positionHero();
  redDiv.style.left = positionX - 88 + 'px';
  if (positionX < 129) ref.refLeftBtn.disabled = true;
  if (positionX < 1210) ref.refRightBtn.disabled = false;
});
ref.refRightBtn.addEventListener('click', ()=>{
  positionHero();
  redDiv.style.left = positionX + 88 + 'px';
  if (positionX > 7) ref.refLeftBtn.disabled = false;
  if (positionX > 980) ref.refRightBtn.disabled = true;
});




