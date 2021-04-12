
const hamburgerMenu = document.querySelector('#menu');

function onClickMenu() {
  document.querySelector('.hamburgerMenu').classList.toggle("change");
}

hamburgerMenu.addEventListener("click", onClickMenu);