/* ==================== THE TEN BILLION AGENCY — shared JS ==================== */

(function () {
  const saved = localStorage.getItem('tba-direction') || 'a';
  document.documentElement.setAttribute('data-direction', saved);
})();

function setDirection(d) {
  document.documentElement.setAttribute('data-direction', d);
  localStorage.setItem('tba-direction', d);
  document.querySelectorAll('.dir-toggle button').forEach(b => {
    b.classList.toggle('on', b.dataset.dir === d);
  });
}

const NAV_ITEMS = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'services.html', label: 'Services', key: 'services' },
  { href: 'case-studies.html', label: 'Case Studies', key: 'case' },
  { href: 'results.html', label: 'Results', key: 'results' },
  { href: 'pricing.html', label: 'Pricing', key: 'pricing' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'insights.html', label: 'Insights', key: 'insights' },
  { href: 'contact.html', label: 'Contact', key: 'contact' },
];

function renderNav() {
  const active = window.PAGE || 'home';
  const host = document.getElementById('nav');
  if (!host) return;
  host.innerHTML = `
    <div class="nav-inner wrap" style="max-width:1480px;padding:18px 32px">
      <a href="index.html" class="logo" aria-label="The Ten Billion Agency">
        <span class="logo-mark">10</span>
        <span class="logo-name"><strong>TEN BILLION</strong><span>AGENCY</span></span>
      </a>
      <nav class="nav-links">
        ${NAV_ITEMS.map(n => `<a href="${n.href}" class="${active === n.key ? 'active' : ''}">${n.label}</a>`).join('')}
      </nav>
      <div class="nav-right">
        <div class="dir-toggle" role="tablist" aria-label="Visual direction">
          <button data-dir="a" onclick="setDirection('a')">A / Brutalist</button>
          <button data-dir="b" onclick="setDirection('b')">B / Editorial</button>
        </div>
        <a href="contact.html" class="btn btn-primary" style="padding:10px 16px;">Book a call <span class="arrow">→</span></a>
        <button class="mnav-btn" onclick="toggleMobileNav()">Menu</button>
      </div>
    </div>
    <div id="mnav" style="display:none;padding:16px 32px;border-top:1px solid var(--rule);">
      <div style="display:flex;flex-direction:column;gap:14px;font-family:var(--mono);font-size:12px;text-transform:uppercase;letter-spacing:0.08em">
        ${NAV_ITEMS.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}
      </div>
    </div>
  `;
  setTimeout(() => {
    const current = document.documentElement.getAttribute('data-direction') || 'a';
    document.querySelectorAll('.dir-toggle button').forEach(b => {
      b.classList.toggle('on', b.dataset.dir === current);
    });
  }, 0);
}

function toggleMobileNav() {
  const m = document.getElementById('mnav');
  if (!m) return;
  m.style.display = m.style.display === 'none' ? 'block' : 'none';
}

function renderTicker() {
  const host = document.getElementById('ticker');
  if (!host) return;
  const items = [
    '<span class="hl">● LIVE</span>',
    'VIEWS ADDED TODAY / <span class="v" id="viewsToday">—</span>',
    'TOTAL VIEWS / <span class="v" id="totalViews">10,247,882,140</span>',
    'RETAINERS ACTIVE / <span class="v">07</span>',
    'AVG. MONTHLY VIEWS PER CLIENT / <span class="v">84.2M</span>',
    'CPV BEATEN / <span class="v">98.7%</span>',
    'FOLLOWERS ADDED THIS WEEK / <span class="v">412,091</span>',
    'HOOKS TESTED TO DATE / <span class="v">18,446</span>',
    '<span class="hl">● 10,247,882,140+ VIEWS SHIPPED</span>',
  ];
  const segment = items.join('&nbsp;&nbsp;//&nbsp;&nbsp;');
  host.innerHTML = `<div class="ticker-track">${segment}&nbsp;&nbsp;//&nbsp;&nbsp;${segment}&nbsp;&nbsp;//&nbsp;&nbsp;</div>`;
}

function renderFooter() {
  const host = document.getElementById('foot');
  if (!host) return;
  host.innerHTML = `
    <div class="wrap">
      <div class="foot-top">
        <div class="foot-col">
          <div class="logo" style="margin-bottom:18px">
            <span class="logo-mark">10</span>
            <span class="logo-name"><strong>TEN BILLION</strong><span>AGENCY</span></span>
          </div>
          <p style="color:var(--fg-dim);max-width:42ch;font-size:15px;">
            Content pipelines that actually work. We do not sell strategy decks.
            We sell views, followers, and the revenue that comes from both.
          </p>
          <div class="pill-row" style="margin-top:20px">
            <span class="chip">Charleston · NYC · LA</span>
            <span class="chip accent">● Accepting 2 more clients in Q2</span>
          </div>
        </div>
        <div class="foot-col">
          <h5>Agency</h5>
          <ul>
            <li><a href="services.html">Services</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="case-studies.html">Case studies</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h5>Evidence</h5>
          <ul>
            <li><a href="results.html">Results</a></li>
            <li><a href="insights.html">Insights</a></li>
            <li><a href="case-studies.html">Press</a></li>
            <li><a href="#">Capability deck ↗</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:hello@tenbillion.agency">hello@tenbillion.agency</a></li>
            <li><a href="contact.html">Enquiry form</a></li>
            <li><a href="#">Discovery call</a></li>
            <li><a href="#">Press kit ↗</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-mega">TENBILLION<span style="color:var(--lime)">.</span></div>
      <div class="foot-bottom">
        <div>© 2026 The Ten Billion Agency</div>
        <div>Built by Teller Consulting Group</div>
        <div>v1.0 · Charleston, SC</div>
      </div>
    </div>
  `;
}

function animateCounter(el, target, duration = 2400) {
  if (!el) return;
  const start = performance.now();
  const startVal = Math.max(target * 0.75, target - 500_000_000);
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(startVal + (target - startVal) * eased);
    el.textContent = val.toLocaleString('en-US');
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function startLiveViews() {
  const el = document.getElementById('viewsToday');
  if (!el) return;
  const now = new Date();
  const secsSinceMidnight = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  let val = Math.floor(secsSinceMidnight * 278 + Math.random() * 3000);
  el.textContent = val.toLocaleString('en-US');
  setInterval(() => {
    val += Math.floor(200 + Math.random() * 180);
    el.textContent = val.toLocaleString('en-US');
  }, 1000);
}

function setupReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

function setupScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-prog';
  document.body.appendChild(bar);
  function update() {
    const h = document.documentElement;
    const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = p + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderTicker();
  renderFooter();
  startLiveViews();
  setupReveals();
  setupScrollProgress();
});
