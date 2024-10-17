function setAosForScreenSize() {
    const cards = document.querySelectorAll('.card');
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      cards.forEach((card, index) => {
        const animation = (index % 2 === 0) ? 'fade-left' : 'fade-right';
        card.setAttribute('data-aos', animation);
      });
    } else {
      const rows = document.querySelectorAll('.row-card');
      rows.forEach((row, rowIndex) => {
          const animation = rowIndex % 2 === 0 ? 'fade-right' : 'fade-left';
          row.setAttribute('data-aos', animation);
      });
    }
}

setAosForScreenSize();

window.addEventListener('resize', setAosForScreenSize);