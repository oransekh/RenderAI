const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const menuMobile = document.getElementById("mobile-menu");

//add menu
menuBtn.addEventListener("click", () => {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden");
    menuMobile.classList.add("flex");
  }
});

// close menu
closeBtn.addEventListener("click", () => {
  if (!menuMobile.classList.contains("hidden")) {
    menuMobile.classList.add("hidden");
    menuMobile.classList.remove("flex");
  }
});


