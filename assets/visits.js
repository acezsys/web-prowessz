/* PROWESSZ CONSULTING — page-view counts (Nov 2026), shown in the acktvt Console under Website visitors.
   What is sent: the site, which page, where the visitor came from (search engine, LinkedIn, ...), device type
   (mobile / tablet / laptop-desktop) and whether this browser was already counted today. No address, name,
   cookie ID or fingerprint is sent or stored. The "counted today" note stays in this browser (localStorage).
   Private badge: opening prowessz.com/?pz-badge=<key> once (link made in the console) shows a small count on the
   home page in that browser only; ?pz-badge=off removes it. */
(function () {
  if (window.__pzVisit) return; window.__pzVisit = true;
  var load = function (cb) {
    if (window.PZ_API) return cb();
    var s = document.createElement('script'); s.src = (document.querySelector('base') ? '/' : '') + 'assets/pz-api.js';
    s.onload = cb; document.head.appendChild(s);
  };
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
                set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
                del: function (k) { try { localStorage.removeItem(k); } catch (e) {} } };
  var PAGE = { home: 'home', acktvt: 'products', hr: 'human-resources', cyber: 'cyber-security', associations: 'associations-media', join: 'join-us' };
  var raw = window.PROWESSZ_PAGE || document.body.getAttribute('data-page') || 'other';
  if (raw === '404') return;
  var page = PAGE[raw] || raw;
  var ua = navigator.userAgent || '';
  var bot = !!navigator.webdriver || /bot|crawl|spider|slurp|preview|headless|lighthouse|facebookexternalhit|whatsapp/i.test(ua);
  var q = new URLSearchParams(location.search);
  var src = (q.get('src') || '').toLowerCase().replace(/[^a-z0-9.-]/g, '').slice(0, 40);
  if (!src) {
    var host = ''; try { host = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch (e) {}
    if (!host || host === location.hostname.replace(/^www\./, '')) src = 'direct';
    else if (/google\./.test(host)) src = 'google';
    else if (/bing\.com$/.test(host)) src = 'bing';
    else if (/duckduckgo\.com$/.test(host)) src = 'duckduckgo';
    else if (/linkedin\.com$|lnkd\.in$/.test(host)) src = 'linkedin';
    else if (/facebook\.com$|fb\.me$/.test(host)) src = 'facebook';
    else if (/instagram\.com$/.test(host)) src = 'instagram';
    else if (/whatsapp\.com$|wa\.me$/.test(host)) src = 'whatsapp';
    else if (/youtube\.com$|youtu\.be$/.test(host)) src = 'youtube';
    else if (/(^|\.)x\.com$|t\.co$|twitter\.com$/.test(host)) src = 'x';
    else if (/mail\./.test(host)) src = 'email';
    else if (/acktvt\.com$/.test(host)) src = 'acktvt.com';
    else src = 'other-website';
  }
  var w = Math.min(screen.width || 9999, window.innerWidth || 9999);
  var device = /iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua)) ? 'tablet' : (/Mobi|iPhone|Android/i.test(ua) || w < 640) ? 'mobile' : 'laptop-desktop';
  var day = new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);
  var unique = store.get('pz-v-day') !== day; if (unique) store.set('pz-v-day', day);
  // private badge key handling
  var b = q.get('pz-badge');
  if (b === 'off') store.del('pz-badge'); else if (b && /^[0-9a-f]{64}$/.test(b)) store.set('pz-badge', b);
  var badgeKey = store.get('pz-badge');
  var call = function (fn, body) {
    return fetch(window.PZ_API.url + fn, { method: 'POST', keepalive: true, headers: { apikey: window.PZ_API.key, Authorization: 'Bearer ' + window.PZ_API.key, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  };
  load(function () {
    var counted = (badgeKey || bot) ? Promise.resolve() : call('public_web_visit', { p: { site: 'prowessz.com', page: page, source: src, device: device, unique: unique } }).catch(function () {});
    // your own visits (browsers with the badge) are not counted, so the numbers show your visitors, not you
    if (!badgeKey || raw !== 'home') return;
    counted.then(function () { return call('public_web_visit_badge', { p_key: badgeKey }); })
      .then(function (r) { if (r.status === 401 || r.status === 400) { store.del('pz-badge'); throw 0; } return r.json(); })
      .then(function (d) {
        var el = document.createElement('div');
        el.className = 'pz-badge'; el.setAttribute('role', 'status'); el.title = 'Only you see this (private link). prowessz.com/?pz-badge=off hides it.';
        var n = function (v) { return Number(v || 0).toLocaleString('en-IN'); };
        el.textContent = 'Visits today ' + n(d.today) + ' · 7 days ' + n(d.last7) + ' · 30 days ' + n(d.last30);
        document.body.appendChild(el);
      }).catch(function () {});
  });
})();
