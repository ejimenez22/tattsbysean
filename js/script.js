const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => observer.observe(el));

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent to TattsBySean!");
});