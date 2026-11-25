/* PROWESSZ CONSULTING — Prowzspective sign-up, confirm and unsubscribe (Nov 2026).
   Sign-up: name and company optional, e-mail and the consent tick required; a confirmation e-mail is sent and
   nothing else arrives until the link in it is pressed (double opt-in). Unsubscribe asks before acting, because
   mail programs open links on their own to check them. */
(function () {
  var base = document.querySelector('base') ? '/' : '';
  var ready = function (cb) {
    if (window.PZ_API) return cb();
    var s = document.createElement('script'); s.src = base + 'assets/pz-api.js'; s.onload = cb; document.head.appendChild(s);
  };
  var call = function (fn, body) {
    return fetch(window.PZ_API.url + fn, { method: 'POST', headers: { apikey: window.PZ_API.key, Authorization: 'Bearer ' + window.PZ_API.key, 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.message || 'Something went wrong. Please try again.'); return j; }); });
  };
  // ---------- sign-up forms (home page and /prowzspective/)
  document.querySelectorAll('form.nl-form').forEach(function (f) {
    var t0 = Date.now();
    var err = f.querySelector('.err'), btn = f.querySelector('button[type=submit]'), done = f.parentNode.querySelector('.nl-done');
    f.addEventListener('submit', function (e) {
      e.preventDefault(); err.textContent = '';
      var email = f.email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) { err.textContent = 'Please enter a valid e-mail address.'; f.email.focus(); return; }
      if (!f.consent.checked) { err.textContent = 'Please tick the box to agree to receive Prowzspective.'; return; }
      btn.disabled = true; var label = btn.textContent; btn.textContent = 'One moment…';
      ready(function () {
        call('public_nl_subscribe', { p: { email: email, name: f.name.value.trim(), company: f.company ? f.company.value.trim() : '', consent: 'true',
          website: f.website.value, secs: Math.round((Date.now() - t0) / 1000), source: f.getAttribute('data-source') || 'prowessz.com' } })
          .then(function () { f.style.display = 'none'; if (done) { done.querySelector('.em').textContent = email; done.style.display = 'block'; } })
          .catch(function (x) { err.textContent = x.message; })
          .then(function () { btn.disabled = false; btn.textContent = label; });
      });
    });
  });
  // ---------- confirm / unsubscribe pages
  var box = document.getElementById('nl-box'); if (!box) return;
  var q = new URLSearchParams(location.search), id = q.get('id'), t = q.get('t'), mode = box.getAttribute('data-mode');
  var show = function (title, text) { box.querySelector('h1').textContent = title; box.querySelector('.msg').textContent = text; var b = box.querySelector('.go'); if (b) b.remove(); };
  if (!id || !t) { show('This link is incomplete', 'Please open the link exactly as it appears in the e-mail.'); return; }
  if (mode === 'confirm') {
    ready(function () {
      call('public_nl_confirm', { p_id: id, p_t: t })
        .then(function (j) { show(j.already ? 'You are already subscribed' : 'You are subscribed', 'Thank you. The next issue of Prowzspective will reach you at the start of the month. You can unsubscribe from any issue.'); })
        .catch(function (x) { show('We could not confirm this', x.message); });
    });
  } else {
    var go = box.querySelector('.go');
    go.addEventListener('click', function () {
      go.disabled = true; go.textContent = 'One moment…';
      ready(function () {
        call('public_nl_unsubscribe', { p_id: id, p_t: t })
          .then(function (j) { show(j.already ? 'You were already unsubscribed' : 'You are unsubscribed', 'You will receive no more issues of Prowzspective. Your address is deleted from our list within 30 days.'); })
          .catch(function (x) { show('We could not unsubscribe you here', x.message + ' You can also write to sales@prowessz.com.'); });
      });
    });
  }
})();
