/* PROWESSZ CONSULTING — shared header, footer & interactions */
(function(){

  var ICON = {
    transformation:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2.2 5.2L8 16l2.2-5.2z"/></svg>',
    digital:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
    hr:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3.5 19c.6-3 2.7-4.6 5.5-4.6s4.9 1.6 5.5 4.6M15.8 14.6c2 .1 3.7 1.5 4.2 3.9"/></svg>',
    projects:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="4" width="6" height="16" rx="1"/><rect x="14.5" y="4" width="6" height="9" rx="1"/><path d="M14.5 17.5h6"/></svg>',
    cyber:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v5c0 5-3.2 8-7 10-3.8-2-7-5-7-10V6z"/><path d="M9.5 12l1.8 1.8L14.5 10"/></svg>',
    msme:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V10l4-3 4 3v10M12 20v-6l4-3 4 3v6"/><path d="M4 20h16"/></svg>'
  };

  var PILLARS = [
    ["transformation.html","transformation","Business Transformation","Pain-point diagnosis, process re-engineering and phased change delivery."],
    ["digital.html","digital","Digital & IT","TCO reduction, IT operations and customer-experience modernisation."],
    ["human-resources.html","hr","Human Resources","Hiring, HR strategy, performance and workforce wellbeing."],
    ["projects.html","projects","Project Management","Scoping, governance and recovery of at-risk programmes."],
    ["cyber-security.html","cyber","Cyber Security","Penetration testing, API testing and external vulnerability scans."],
    ["msme.html","msme","MSME Advisory","Big-4-grade consulting sized and priced for growing businesses."]
  ];

  function megaHTML(){
    return PILLARS.map(function(p){
      return '<a href="'+p[0]+'"><span class="ic">'+ICON[p[1]]+'</span><span><span class="t">'+p[2]+'</span><span class="d">'+p[3]+'</span></span></a>';
    }).join('');
  }

  var HEADER = ''+
  '<div class="wrap nav-row">'+
    '<a href="index.html" class="brand-mark" aria-label="Prowessz Consulting — home">'+
      '<img class="brand-logo brand-logo-light" src="assets/images/logo-header-navy.png" alt="Prowessz Consulting — Catalyst in your Business">'+
      '<img class="brand-logo brand-logo-dark" src="assets/images/logo-header-gold.png" alt="Prowessz Consulting — Catalyst in your Business">'+
    '</a>'+
    '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>'+
    '<ul class="nav-links">'+
      '<li data-key="home"><a class="top-link" href="index.html">Home</a></li>'+
      '<li data-key="consulting" class="has-mega"><a class="top-link" href="#" data-mega-toggle>Consulting</a><div class="mega">'+megaHTML()+'</div></li>'+
      '<li data-key="acktvt"><a class="top-link" href="acktvt.html">acktvt</a></li>'+
      '<li data-key="about"><a class="top-link" href="about.html">About</a></li>'+
      '<li data-key="leadership"><a class="top-link" href="leadership.html">Leadership</a></li>'+
      '<li data-key="research"><a class="top-link" href="research.html">Research</a></li>'+
      '<li data-key="associations"><a class="top-link" href="associations-media.html">Associations &amp; Media</a></li>'+
      '<li data-key="join"><a class="top-link" href="join-us.html">Careers</a></li>'+
      '<li data-key="contact"><a class="top-link" href="contact.html">Contact</a></li>'+
    '</ul>'+
    '<a href="contact.html" class="btn btn--accent btn--sm cta-slot">Get in touch</a>'+
  '</div>';

  var FOOTER = ''+
  '<div class="wrap footer-grid">'+
    '<div>'+
      '<img class="footer-logo" src="assets/images/logo-header-gold.png" alt="Prowessz Consulting — Catalyst in your Business">'+
      '<p style="max-width:34ch;color:var(--on-brand-muted);font-size:.9rem;">A Management &amp; Technology consulting firm recognised by DPIIT, Government of India.</p>'+
      '<div class="social-row">'+
        '<a href="https://www.linkedin.com/in/prowessz-consulting/" aria-label="LinkedIn" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3v-12zm7 0h3.8v1.64h.05c.53-1 1.83-1.98 3.77-1.98 4.03 0 4.78 2.65 4.78 6.1v6.24h-4v-5.53c0-1.32-.02-3-1.84-3-1.85 0-2.13 1.44-2.13 2.92v5.61h-4v-12z"/></svg></a>'+
        '<a href="https://www.instagram.com/prowesszconsulting/" aria-label="Instagram" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r="1"/></svg></a>'+
        '<a href="https://www.facebook.com/649448501577039" aria-label="Facebook" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.3 1.4-1.3h1.5V5.3c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.3H7v2.8h2.4V21z"/></svg></a>'+
        '<a href="https://www.youtube.com/@ProwesszConsulting" aria-label="YouTube" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 10l4 2-4 2z" fill="currentColor" stroke="none"/></svg></a>'+
        '<a href="https://www.x.com/@prowessz5" aria-label="X" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l7.5 9.2L3.4 21h2.4l5.8-6.9L16.6 21H21l-7.9-9.6L20.4 3H18l-5.3 6.3L8.1 3z"/></svg></a>'+
      '</div>'+
    '</div>'+
    '<div><h4>Consulting</h4>'+
      '<a href="transformation.html">Transformation</a><a href="digital.html">Digital &amp; IT</a><a href="human-resources.html">Human Resources</a><a href="projects.html">Projects</a><a href="cyber-security.html">Cyber Security</a><a href="msme.html">MSME Advisory</a>'+
    '</div>'+
    '<div><h4>Firm</h4>'+
      '<a href="about.html">About us</a><a href="leadership.html">Leadership</a><a href="research.html">Research</a><a href="associations-media.html">Associations &amp; Media</a><a href="join-us.html">Careers</a><a href="contact.html">Contact</a>'+
    '</div>'+
    '<div><h4>Products</h4>'+
      '<a href="acktvt.html">acktvt overview</a><a href="https://acktvt.com" target="_blank" rel="noopener">acktvt.com</a><a href="mailto:acktvt@prowessz.com">acktvt@prowessz.com</a>'+
    '</div>'+
    '<div><h4>Corporate office</h4>'+
      '<p style="font-size:.86rem;color:var(--on-brand-muted);max-width:26ch;">Level 18, Unit 1801, One BKC, Wing C, G-Block, Bandra Kurla Complex, Bandra (E), Mumbai 400051, India</p>'+
      '<a href="tel:+918080255000" style="margin-top:8px;">+91 80 80 255 000</a>'+
      '<a href="mailto:sales@prowessz.com">sales@prowessz.com</a>'+
    '</div>'+
  '</div>'+
  '<div class="wrap footer-bottom">'+
    '<span>&copy; 2025&ndash;2026 Prowessz Consulting Services LLP. All rights reserved.</span>'+
    '<span>Recognised by DPIIT, Government of India</span>'+
  '</div>';

  function inject(){
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if(h){ h.innerHTML = HEADER; }
    if(f){ f.innerHTML = FOOTER; }

    var page = window.PROWESSZ_PAGE || document.body.getAttribute('data-page') || '';
    var consultingPages = ['transformation','digital','hr','projects','cyber','msme'];
    document.querySelectorAll('.nav-links > li').forEach(function(li){
      var key = li.getAttribute('data-key');
      if(key === page || (key==='consulting' && consultingPages.indexOf(page) > -1)){
        li.classList.add('is-active');
      }
    });

    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if(toggle && links){
      toggle.addEventListener('click', function(){
        var open = links.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true':'false');
      });
    }
    var megaToggle = document.querySelector('[data-mega-toggle]');
    if(megaToggle){
      megaToggle.addEventListener('click', function(e){
        if(window.matchMedia('(max-width:900px)').matches){
          e.preventDefault();
          megaToggle.closest('li').classList.toggle('is-expanded');
        }
      });
    }

    var header = document.querySelector('.site-header');
    if(header){
      var setH = function(){ document.documentElement.style.setProperty('--header-h', header.offsetHeight+'px'); };
      setH();
      window.addEventListener('resize', setH);
      window.addEventListener('scroll', function(){
        header.classList.toggle('is-scrolled', window.scrollY > 12);
      }, {passive:true});
    }

    if('IntersectionObserver' in window){
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){ en.target.classList.add('is-visible'); obs.unobserve(en.target); }
        });
      }, {threshold:.12});
      document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
    }

    document.querySelectorAll('.hero-graphic .line').forEach(function(path, i){
      try{
        var len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset 1.6s ease '+(i*.15)+'s';
        requestAnimationFrame(function(){ path.style.strokeDashoffset = 0; });
      }catch(e){}
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else { inject(); }
})();
