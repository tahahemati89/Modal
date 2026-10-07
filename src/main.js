// Elements
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-box");

// show Modal Box
openBtn.addEventListener("click", () => {
  modal.classList.remove("opacity-0", "pointer-events-none");
  modalBox.classList.remove("opacity-0", "scale-75");
});

// close Modal Box
closeBtn.addEventListener("click", () => {
  modal.classList.add("opacity-0", "pointer-events-none");
  modalBox.classList.add("opacity-0", "scale-75");
});
