
const input = document.querySelector('input[type="checkbox"]'),
 nav = document.querySelector('#nav'),
 themeText = document.querySelector('.toggle-text'),
 themeIcon = document.querySelector('#toggle-icon'),
 textBox = document.querySelector('#text-box'),
 images = document.querySelectorAll('.img'),
 iconF = document.querySelector('.fas');


 const darkMode = {
   navStyle: 'rgb(0 0 0 / 50%)',
   textBoxStyle: 'rgb(255 255 255 / 40%)',
   text: 'Dark mode',
   icon: iconF,
   imagesList: imagesMode('dark')
 };
 
 const lightMode = {
   navStyle: 'rgb(255 255 255 / 40%)',
   textBoxStyle: 'rgb(0 0 0 / 50%)',
   text: 'Light mode',
   icon: iconF,
   imagesList: imagesMode('light')
 };
 
function addTheme(theme) {
    nav.style.backgroundColor = theme.navStyle;
    textBox.style.backgroundColor = theme.textBoxStyle;
    themeText.textContent = theme.text;
    changeIcon(theme.icon);
    images.forEach((image, index) => {
    image.src = theme.imagesList[index];
  });
}
 
function changeIcon(obj){
    if (obj.classList.contains('fa-moon')){
        obj.classList.replace('fa-moon', 'fa-sun');
    }else {
        obj.classList.replace('fa-sun', 'fa-moon');
    }
}

function imagesMode(mode) {
  const imagesList = [
    `img/undraw_proud_coder_${mode}.svg`,
    `img/undraw_feeling_proud_${mode}.svg`,
    `img/undraw_conceptual_idea_${mode}.svg`
  ];
  return imagesList;
}
 

function switchTheme() {
  if (input.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    addTheme(darkMode);
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    addTheme(lightMode);
  }
}
 
input.addEventListener('click', switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        input.checked = true;
        addTheme(darkMode);
    }
}