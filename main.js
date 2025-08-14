document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");
  const closeBtn = document.querySelector(".close-btn");

  burger.addEventListener("click", function () {
    navMenu.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
});
