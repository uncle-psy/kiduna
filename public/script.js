const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); menu.focus();
  }
});
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity() || form.dataset.sending === 'true') return;
  const status = document.querySelector('#form-status');
  const button = form.querySelector('button[type="submit"]');
  if (location.protocol === 'file:') { status.textContent = 'Please open this site through its local server to send your note.'; return; }
  form.dataset.sending = 'true'; button.disabled = true; button.textContent = 'Sending…'; status.textContent = '';
  try {
    const response = await fetch(form.action, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(Object.fromEntries(new FormData(form))), signal:AbortSignal.timeout(25000)});
    let result;
    try { result = await response.json(); } catch { throw new Error('The contact service is unavailable. Please try again.'); }
    if (!response.ok) throw new Error(result.error || 'Something went wrong. Please try again.');
    form.reset(); status.textContent = 'Thank you. Your note has been received.';
  } catch (error) {
    status.textContent = error.name === 'TimeoutError' ? 'The request timed out. Delivery could not be confirmed; your note is still here.' : error.message || 'Unable to send. Please try again.';
  } finally { form.dataset.sending = 'false'; button.disabled = false; button.textContent = 'Send my note →'; }
});
document.querySelector('#print-paper')?.addEventListener('click', () => window.print());


