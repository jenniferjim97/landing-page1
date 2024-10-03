// Global Variables
const navHeader = document.querySelector('.page__header');
const nav = document.getElementsByClassName('navbar__menu');
const ul = document.getElementById('navbar__list');
const divSections = document.getElementsByClassName('landing_page');
const sections = document.querySelectorAll("section");
//


for(const section of sections) {
  //create <li> for the <ul>//
  const li = document.createElement('li') ;
  //create 'a href' to scroll to each section
  const a = document.createElement('a');
  
  a.textContent = section.dataset.nav
  a.href=`#${section.id}`
  
  
  li.appendChild(a);
  ul.appendChild(li); 
}

function makeActive() {
  const VALUE = 150;
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach((section, index) => {
      const box = section.getBoundingClientRect();
      if (box.top <= VALUE && box.bottom >= VALUE) {
          section.classList.add('your-active-class'); // Add active class to the section
          navLinks[index].classList.add('your-active-class'); // Add active class to the corresponding nav link
      } else {
          section.classList.remove('you-active-class'); // Remove active class from the section
          navLinks[index].classList.remove('you-active-class'); // Remove active class from the corresponding nav link
      }
  });
};

// Call the function on scroll
document.addEventListener('scroll', makeActive);