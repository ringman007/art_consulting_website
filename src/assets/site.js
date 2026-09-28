// Mobile navigation toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
})();

// Contact form: submit to Web3Forms without leaving the page
(function () {
  var form = document.querySelector('.contact-form');
  if (!form || !window.fetch) return;
  var status = form.querySelector('.form-status');
  var button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var label = button.innerHTML;
    button.disabled = true;
    button.textContent = form.dataset.sending;
    status.className = 'form-status';
    status.textContent = '';
    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (!res.success) throw new Error(res.message);
        form.reset();
        status.className = 'form-status ok';
        status.textContent = form.dataset.success;
      })
      .catch(function () {
        status.className = 'form-status err';
        status.textContent = form.dataset.error;
      })
      .then(function () {
        button.disabled = false;
        button.innerHTML = label;
      });
  });
})();
