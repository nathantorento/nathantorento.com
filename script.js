// JavaScript to toggle menu list visibility
document.querySelector('.menu-icon').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
  });
  
  // JavaScript to close the menu list
  document.querySelector('.menu-close').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.remove('active');
  });
  