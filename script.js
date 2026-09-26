const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu?.addEventListener('click', () => {
  links?.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(links?.classList.contains('open')));
});
