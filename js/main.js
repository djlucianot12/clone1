document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('stage');
  const menuItems = document.querySelectorAll('.p-stage__menu__item');
  const appCanvas = document.getElementById('app-canvas');

  if (stage && menuItems.length > 0 && appCanvas) {
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const thumb = item.getAttribute('data-canvas-thumb');
        appCanvas.style.backgroundImage = `url(${thumb})`;
      });
    });
  }
});
