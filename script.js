// Animation d'apparition progressive au défilement
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
if (!entry.isIntersecting) return;
entry.target.style.opacity = 1;
entry.target.style.transform = 'translateY(0)';
observer.unobserve(entry.target);
});
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));