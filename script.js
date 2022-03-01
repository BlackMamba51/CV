const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header-menu');
const aboutFirstContainer = document.querySelector('.about-first-container');
const headerListOfLinks = document.querySelector('.header-menu .menu-list');


function openBurgerMenu() {
  headerMenu.classList.toggle('active');
  headerBurger.classList.toggle('active');
  aboutFirstContainer.classList.toggle('open-menu');
}

headerBurger.addEventListener('click', openBurgerMenu);


function clickOnHeaderLink() {
  headerListOfLinks.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('header-link')) {
      headerMenu.classList.remove('active');
      headerBurger.classList.remove('active');
      aboutFirstContainer.classList.remove('open-menu');
    }
  });
}
clickOnHeaderLink();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};