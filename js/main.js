const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
  navMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const words = ["Hi!,", "i'm a Junior ", "front-end ","Developer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 150; // سرعة الكتابة
const element = document.getElementById("changing-text");

function typeEffect() {
  currentWord = words[i];
  
  if (isDeleting) {
    element.textContent = currentWord.substring(0, j--);
  } else {
    element.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500); // استنى ثانية قبل ما يبدأ يمسح
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length; // يروح للكلمة اللي بعدها
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();


