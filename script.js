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




(function () {
    const skillsMap = {
      python: 'python 2s forwards',
      javascript: 'javascript 2s forwards',
      html: 'html 2s forwards',
      css: 'css 2s forwards'
    };

    const skillBars = document.querySelectorAll('.skillbar .bar span');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const bar = entry.target;
          if (entry.isIntersecting) {
            const classList = Array.from(bar.classList);
            const skillClass = classList.find(cls => skillsMap[cls]);
            if (skillClass) {
              bar.style.animation = 'none'; // reset first
              void bar.offsetWidth; // force reflow
              bar.style.animation = skillsMap[skillClass];
            }
          } else {
            bar.style.animation = 'none'; // reset when out of view
          }
        });
      }, {
        threshold: 0.5
      });

      skillBars.forEach(bar => observer.observe(bar));
    }
  })();


