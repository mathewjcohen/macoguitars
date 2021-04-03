const header = document.getElementById("header");
const about = document.getElementById("about");
const nav = document.getElementsByTagName("nav")[0];
const photos = document.getElementById("photos");
const custom = document.getElementById("custom");

const state = {
  modalVisible: 0,
  modalEl: document.getElementById("modalBG"),
  modalImg: document.getElementById("modalImg")
};

(function() {
  const currentYear = new Date().getFullYear();
  const copyEl = document.getElementById("dateCopyright");
  copyEl.innerHTML = `&copy; MaCo Guitars, ${currentYear}. All rights reserved.`;
})();

window.onscroll = function() {
  if (document.documentElement.scrollTop > header.offsetHeight / 2) {
    header.style.position = "fixed";
  } else {
    header.style.position = "relative";
  }
};
// modal logic
state.modalEl.addEventListener("click", clearImgInModal);

function toggleModal() {
  if (state.modalVisible === 0) {
    state.modalVisible = 1;
    state.modalEl.style.top = `${window.scrollY}px`;
    state.modalEl.style.visibility = "visible";
  } else {
    state.modalVisible = 0;
    state.modalEl.style.visibility = "hidden";
  }
}

function placeImgInModal(imgElement) {
  if (document.documentElement.clientWidth < 650) {
    state.modalImg.src = imgElement.src;
  } else {
    state.modalImg.src = imgElement.getAttribute("data-img-src");
  }
  state.modalImg.alt = imgElement.getAttribute("alt");
  toggleModal();
}

function clearImgInModal() {
  state.modalImg.src = "";
  state.modalImg.alt = "";
  toggleModal();
}

// TODO: add custom build form and validate
// function validateForm() {}

function scrollToEl(el) {
  window.scrollTo({
    top: el.offsetTop - nav.offsetHeight,
    left: 0,
    behavior: "smooth"
  });
}
