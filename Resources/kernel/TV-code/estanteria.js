(function () {
  'use strict';

  window.closeAllShelfPreviews = function () {
    const gameBoxes = document.querySelectorAll('.gameBox');
    gameBoxes.forEach(b => {
      b.classList.remove('mobile-active');
    });
    const shelf = document.querySelector('.libraryProjects');
    if (shelf) {
      shelf.classList.add('previews-hidden');
      setTimeout(() => {
        shelf.classList.remove('previews-hidden');
      }, 700);
    }
  };

  function initShelf() {
    const container = document.querySelector('.gamesContainer');
    if (!container) return;

    const gameBoxes = Array.from(container.querySelectorAll('.gameBox'));

    gameBoxes.forEach((box, index) => {
      box.classList.remove('pos-left', 'pos-right', 'pos-center');
      if (index === 0 || index === 1) {
        box.classList.add('pos-left');
      } else if (index >= gameBoxes.length - 2) {
        box.classList.add('pos-right');
      } else {
        box.classList.add('pos-center');
      }

      box.addEventListener('mouseenter', () => {
        const projectId = box.getAttribute('data-project-id');
        if (projectId && typeof window.updateTvSpotlight === 'function') {
          window.updateTvSpotlight(projectId);
        }
      });

      box.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;

        const isAlreadyActive = box.classList.contains('mobile-active');
        gameBoxes.forEach(b => b.classList.remove('mobile-active'));

        if (!isAlreadyActive) {
          box.classList.add('mobile-active');
        }
      });
    });

    const actionButtons = container.querySelectorAll('.shelfActionBtn, .caseCloseBtn');
    actionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.closeAllShelfPreviews();
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.libraryProjects')) {
        gameBoxes.forEach(b => b.classList.remove('mobile-active'));
      }
    });
  }

  window.ordenarProyectos = function () {
    initShelf();
  };

  window.playdemovid = function () {
    if (typeof window.playGameOnTv === 'function') {
      window.playGameOnTv('penguin');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShelf);
  } else {
    initShelf();
  }

  document.addEventListener('sectionLoaded', (e) => {
    if (e.detail && e.detail.name === 'proyectos') {
      setTimeout(initShelf, 150);
    }
  });

  document.addEventListener('click', (e) => {
    const header = e.target.closest('.projectAccordionHeader');
    if (header) {
      const item = header.closest('.projectAccordionItem');
      if (item) {
        const wasExpanded = item.classList.contains('expanded');
        document.querySelectorAll('.projectAccordionItem.expanded').forEach(el => {
          el.classList.remove('expanded');
        });
        if (!wasExpanded) {
          item.classList.add('expanded');
        }
      }
    }
  });

})();
