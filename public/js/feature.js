// const profilePicture = document.querySelector('playerImg');
// const profilePictures = ['../images/alex.jpeg', '../images/alice.jpeg', '../images/charly.jpeg', '../images/d-day.jpeg', '../images/domino.jpeg',
// '../images/farah.jpeg', '../images/ghost.jpeg', '../images/mara.jpeg', '../images/morte.jpeg', '../images/price.jpeg'];

// function randomProfile(profilePictures) {
//     profilePicture = Math.floor(Math.random() * profilePictures.length);
// };

// console.log(profilePicture)
    

const hamburgerMenu = document.querySelector('#menu');

function onClickMenu() {
  document.querySelector('.hamburgerMenu').classList.toggle("change");
}

hamburgerMenu.addEventListener("click", onClickMenu);