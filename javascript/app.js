// Global Variables
const navHeader = document.querySelector('.page__header')
const nav = document.getElementsByClassName('navbar__menu');
const ul = document.getElementById('navbar__list');
const divSections = document.getElementsByClassName('landing_page');
const sectionTags = document.getElementsByTagName('section');
//


for(let i = 0; i<divSections.length; i++) {
  
  const sectionId = sectionTags[i].id
  const sectionAttributes = divSections[i].childNodes[1].textContent.trim()
  const li = document.createElement('li') ;
  const a = document.createElement('a');
  
  
  
  a.textContent = `${sectionAttributes}`
  a.href=`#${sectionId}`
  
  
  li.appendChild(a);
  ul.appendChild(li); 
}