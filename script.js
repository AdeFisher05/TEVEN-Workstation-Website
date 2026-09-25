const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu?.addEventListener('click', () => {
  links?.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(links?.classList.contains('open')));
});
localStorage.setItem(
  "tevenUser",
  JSON.stringify({
    name: "Fisher Aderinola",
    email: "fisher@example.com",
  }),
);
const user = JSON.parse(localStorage.getItem("tevenUser"));

const params = new URLSearchParams(window.location.search);
const workspace = params.get("workspace");

if (!user) {
  window.location.href = `auth.html?redirect=booking&workspace=${workspace}`;
}
