function openMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('inactive');
}

export function OpenMobileMenu() {
  const burgerBtn = document.querySelector('.burger-menu');
  burgerBtn.addEventListener('click', openMenu);
}
