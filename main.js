const toggleBtns = document.querySelector(".nav-toggle");

const list = document.querySelector(".listClose");

toggleBtns.addEventListener("click", (e) => {
  list.classList.toggle("listOpen");
  e.currentTarget.classList.toggle("rotate");
});
