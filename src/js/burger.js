export const useBurger = () => {
    const burgerMenu = document.querySelector('.header__right');
    const burgerTrigger = document.querySelector('[data-burger="btn"');
    const burgerOverlay = document.querySelector('[data-burger="overlay"]');
    const closeBurgerMenu = () => {
        burgerMenu.classList.remove('header__right--visible');
        burgerTrigger.classList.remove('burger--active');
        burgerOverlay.classList.remove('overlay--visible');
    };
    closeBurgerMenu();
    burgerTrigger.addEventListener('click', () => {
        burgerMenu.classList.toggle('header__right--visible');
        burgerTrigger.classList.toggle('burger--active');
        burgerOverlay.classList.toggle('overlay--visible');
    });
    burgerOverlay.addEventListener('click', () => {
        closeBurgerMenu();
    });
};