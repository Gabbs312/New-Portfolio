const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.remove('visible');
      void entry.target.offsetWidth; 
      entry.target.classList.add('visible');
    } else {
      
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

items.forEach(item => observer.observe(item));
  


