 lucide.createIcons();

    // ── Smooth scroll ────────────────────────────────────────────
    function goTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      const menu = document.getElementById('mobileMenu');
      menu.classList.remove('open');
      document.getElementById('menuIcon').setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    }

    // ── Mobile menu ──────────────────────────────────────────────
    let menuOpen = false;
    function toggleMenu() {
      menuOpen = !menuOpen;
      document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
      document.getElementById('menuIcon').setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
      lucide.createIcons();
    }

    // ── Active nav on scroll ─────────────────────────────────────
    const navSections = ['home', 'over-mij', 'projecten', 'skills', 'contact'];

    function updateNav() {
      const pos = window.scrollY + 200;
      let current = 'home';
      navSections.forEach(id => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) current = id;
      });
      document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.nav === current);
      });
      document.querySelectorAll('[data-nav-m]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.navM === current);
      });
    }

    window.addEventListener('scroll', updateNav, { passive: true });

    // ── Hero parallax on scroll ──────────────────────────────────
    function heroParallax() {
      const heroH = document.getElementById('home').offsetHeight;
      const p = Math.min(window.scrollY / heroH, 1);
      const txt = document.getElementById('heroText');
      const ph  = document.getElementById('heroPhoto');
      if (txt) { txt.style.transform = `translateY(${p * 200}px)`; txt.style.opacity = Math.max(0, 1 - p * 2); }
      if (ph)  { ph.style.transform  = `translateY(${p * -100}px) scale(${1 - p * 0.1})`; ph.style.opacity = Math.max(0, 1 - p * 2); }
    }

    window.addEventListener('scroll', heroParallax, { passive: true });


    // ── Skills bars ──────────────────────────────────────────────
    const softwareSkills = [
      { name: 'HTML',               level: 70 },
      { name: 'CSS',                level: 75 },
      { name: 'JavaScript',         level: 60 },
      { name: 'Adobe Photoshop',    level: 80 },
      { name: 'Adobe Illustrator',  level: 75 },
      { name: 'Adobe InDesign',     level: 70 },
      { name: 'Adobe Premiere Pro', level: 65 },
      { name: 'Figma',              level: 85 },
      { name: 'Canva',              level: 90 }
    ];

    const langSkills = [
      { name: 'Nederlands', level: 100, label: 'Moedertaal'   },
      { name: 'Engels',     level: 85,  label: 'Professioneel' },
      { name: 'Frans',      level: 40,  label: 'Basis'         }
    ];

    function skillBarHTML(name, level, label, extraClass) {
      return `
        <div class="skill-item">
          <div class="skill-label">
            <span>${name}</span>
            <span>${label}</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill ${extraClass}" data-level="${level}"></div>
          </div>
        </div>`;
    }

    document.getElementById('softwareSkills').innerHTML =
      softwareSkills.map(s => skillBarHTML(s.name, s.level, s.level + '%', '')).join('');
    document.getElementById('langSkills').innerHTML =
      langSkills.map(s => skillBarHTML(s.name, s.level, s.label, 'lang')).join('');

    let barsAnimated = false;
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !barsAnimated) {
        barsAnimated = true;
        document.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, i * 80);
        });
      }
    }, { threshold: 0.2 }).observe(document.getElementById('skills'));

    function showInfo(type) {

  document.querySelectorAll('.cat-btn').forEach(button => {
    button.classList.remove('active');
  });

  document.querySelectorAll('.info-content').forEach(content => {
    content.classList.remove('visible');
  });

  document.getElementById(`btn-${type}`).classList.add('active');

      document.getElementById(`info-${type}`).classList.add('visible');
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(function(reveal) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();