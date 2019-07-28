const state = {
  modalVisible: 0,
  modalEl: document.getElementById("modalBG"),
  modalImg: document.getElementById("modalImg")
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
