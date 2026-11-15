/**
 * Exit-Intent Downsell Modal ($970 pesos Pilar 1: Proteger)
 */
export function initExitIntent() {
  const modal = document.getElementById('downsellModal');
  const closeBtn = document.getElementById('closeDownsellModal');
  if (!modal) return;

  let modalShown = sessionStorage.getItem('detox_downsell_shown') === 'true';

  function showModal() {
    if (modalShown) return;
    modal.classList.add('open');
    modalShown = true;
    sessionStorage.setItem('detox_downsell_shown', 'true');
  }

  function hideModal() {
    modal.classList.remove('open');
  }

  // Desktop Exit Intent
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 5 && !modalShown) {
      showModal();
    }
  });

  // Mobile Timer fallback (45 seconds)
  if (window.innerWidth <= 768) {
    setTimeout(() => {
      if (!modalShown) showModal();
    }, 45000);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', hideModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      hideModal();
    }
  });
}
