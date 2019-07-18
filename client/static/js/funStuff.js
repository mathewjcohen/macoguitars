// const state = {
//   // modalVisible: 0,
//   // modalEl: document.getElementById("modalBG"),
// };

// modal logic
// document.getElementById("customForm").addEventListener("click", toggleModal);
// document.getElementById("closeModal").addEventListener("click", toggleModal);

// function toggleModal() {
//   if (state.modalVisible === 0) {
//     state.modalVisible = 1;
//     state.modalEl.style.top = `${window.scrollY}px`;
//     state.modalEl.style.visibility = "visible";
//   } else {
//     state.modalVisible = 0;
//     state.modalEl.style.visibility = "hidden";
//   }
// }

// TODO: add custom build form and validate
// function validateForm() {}

var nav = document.getElementsByTagName("nav")[0];
var about = document.getElementById("about");
var photos = document.getElementById("photos");
var custom = document.getElementById("custom");

function scrollToEl(el) {
  window.scrollTo({
    top: el.offsetTop - nav.offsetHeight,
    left: 0,
    behavior: "smooth"
  });
}
