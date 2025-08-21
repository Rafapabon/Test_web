//Menu defilant pour services

function toggleDropdown(event, id) {
  event.preventDefault();

  // Fermer tous les menus sauf celui qu’on clique
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (menu.id !== id) {
      menu.style.display = 'none';
      menu.parentElement.classList.remove('open');
    }
  });

  // Ouvrir/fermer le menu cliqué
  const parent = event.target.closest('.dropdown');
  const isOpen = parent.classList.contains('open');

  if (isOpen) {
    parent.classList.remove('open');
    parent.querySelector('.dropdown-menu').style.display = 'none';
  } else {
    parent.classList.add('open');
    parent.querySelector('.dropdown-menu').style.display = 'block';
  }
}

// Fermer les menus si on clique ailleurs
window.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
});
