export function OpenMobileMenu() {
  const burgerBtn = document.querySelector('.burger-menu');
  burgerBtn.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (e.target.className !== 'mobile-menu') {
      console.log(e.target.className);
    //   mobileMenu.classList.remove('flex');
    }
    mobileMenu.classList.toggle('inactive');
  });
}
