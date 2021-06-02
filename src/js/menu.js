import getRefs from './get-refs';

const refs = getRefs();

refs.menuBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick() {
  const expanded = refs.menuBtn.getAttribute('aria-expanded') === true || false;

  refs.menuBtn.classList.toggle('is-open');
  refs.menuBtn.setAttribute('aria-expanded', !expanded);

  refs.mobileMenu.classList.toggle('is-open');
}
