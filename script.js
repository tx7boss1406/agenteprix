// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll(".fade-section").forEach(el => observer.observe(el));

// Sticky CTA bar — aparece após 300px de scroll, some quando #oferta está visível
const stickyCTA = document.getElementById("sticky-cta");
const ofertaSection = document.getElementById("oferta");

function updateStickyCTA() {
  if (!stickyCTA || !ofertaSection) return;
  const scrollY = window.scrollY;
  const ofertaRect = ofertaSection.getBoundingClientRect();
  const isNearOferta = ofertaRect.top < window.innerHeight && ofertaRect.bottom > 0;
  if (scrollY > 300 && !isNearOferta) {
    stickyCTA.classList.add("visible");
  } else {
    stickyCTA.classList.remove("visible");
  }
}

window.addEventListener("scroll", updateStickyCTA, { passive: true });
updateStickyCTA();
