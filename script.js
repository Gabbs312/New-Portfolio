
const sections = document.querySelectorAll('.page-section');
  let currentSectionIndex = 0;


  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentSectionIndex = index;
    }
  }
  document.querySelector('.harrow').addEventListener('click', () => {
    scrollToSection(currentSectionIndex + 1);
  });
  document.querySelector('.arrow2').addEventListener('click', () => {
    scrollToSection(currentSectionIndex + 1);
  });

  document.querySelector('.arrow1').addEventListener('click', () => {
    scrollToSection(currentSectionIndex - 1);
  });

  


