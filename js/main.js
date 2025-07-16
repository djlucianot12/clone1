document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.p-stage__menu__item');
  const appCanvas = document.getElementById('app-canvas');

  if (menuItems.length > 0 && appCanvas) {
    const imageUrls = [];
    menuItems.forEach(item => {
      const thumb = item.getAttribute('data-canvas-thumb');
      if (thumb) {
        imageUrls.push(thumb);
      }
      const zoom = item.getAttribute('data-canvas-zoom');
      if (zoom) {
        imageUrls.push(zoom);
      }
    });

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });

    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const thumb = item.getAttribute('data-canvas-thumb');
        appCanvas.style.backgroundImage = `url('${thumb}')`;
      });
    });
  }
});
