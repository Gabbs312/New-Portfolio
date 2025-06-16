
const sections = document.querySelectorAll('.page-section');
  let currentSectionIndex = 0;


  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentSectionIndex = index;
    }
  }

  document.querySelector('.arrow2').addEventListener('click', () => {
    scrollToSection(currentSectionIndex + 1);
  });

  document.querySelector('.arrow1').addEventListener('click', () => {
    scrollToSection(currentSectionIndex - 1);
  });

  // Optional: update current section index on manual scroll
  window.addEventListener('scroll', () => {
    const offset = window.innerHeight / 2;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        currentSectionIndex = index;
      }
    });
  });


