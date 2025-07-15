document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.p-stage__menu__item');
  const appCanvas = document.getElementById('app-canvas');

  if (menuItems.length > 0 && appCanvas) {
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const thumb = item.getAttribute('data-canvas-thumb');
        appCanvas.style.backgroundImage = `url('${thumb}')`;
      });
    });
  }
});
