
(function(){
  // Year
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const btn = document.querySelector('.nav-toggle');
  const sheet = document.getElementById('menuSheet');
  const backdrop = document.querySelector('.sheet-backdrop');
  const closeEls = document.querySelectorAll('[data-sheet-close]');

  if(!btn || !sheet || !backdrop) return;

  function setOpen(open){
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    sheet.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    sheet.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('sheet-open', open);
  }

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  closeEls.forEach(el => el.addEventListener('click', () => setOpen(false)));

  sheet.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(a) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') setOpen(false);
  });
})();
