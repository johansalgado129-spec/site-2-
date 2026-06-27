
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => revealObserver.observe(item));

const filterButtons = document.querySelectorAll('.filter-btn');
const missionCards = document.querySelectorAll('.mission-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    missionCards.forEach(card => {
      const match = selected === 'all' || card.dataset.act === selected;
      card.classList.toggle('is-hidden', !match);
    });
  });
});

const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navAnchors.forEach(anchor => {
      anchor.classList.toggle('active', anchor.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0.02 });

sections.forEach(section => activeObserver.observe(section));
