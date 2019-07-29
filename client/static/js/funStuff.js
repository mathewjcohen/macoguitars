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

// hero fader
(function() {
  if (document.getElementById("hero1")) {
    const size = () => {
      if (document.documentElement.clientWidth > 650) {
        return "large";
      }
      return "small";
    };
    const hero1 = document.getElementById("hero1");
    const hero2 = document.getElementById("hero2");
    const photoArray = [
      `/images/guitars/${size()}/andromeda/3.jpg`,
      `/images/guitars/${size()}/hera/2.jpg`,
      `/images/guitars/${size()}/pegasus/2.jpg`,
      `/images/guitars/${size()}/casseopeia/7.jpg`,
      `/images/guitars/${size()}/tele/5.jpg`,
      `/images/guitars/${size()}/andromeda/6.jpg`,
      `/images/guitars/${size()}/hera/8.jpg`,
      `/images/guitars/${size()}/pegasus/7.jpg`,
      `/images/guitars/${size()}/casseopeia/3.jpg`,
      `/images/guitars/${size()}/tele/16.jpg`
    ];

    let photoIdx1 = 2;
    let photoIdx2 = 3;
    let hero2Visible = 0;

    function fadeIn(el) {
      el.classList.add("show");
      el.classList.remove("hide");
    }

    function fadeOut(el) {
      el.classList.add("hide");
      el.classList.remove("show");
    }

    setInterval(() => {
      if (photoIdx1 >= photoArray.length || photoIdx2 >= photoArray.length) {
        photoIdx1 = 0;
        photoIdx2 = 1;
      }
      if (hero2Visible === 0) {
        fadeOut(hero1);
        fadeIn(hero2);
        setTimeout(() => {
          hero1.style.backgroundImage = `url('${photoArray[photoIdx1]}')`;
        }, 1500);
        hero2Visible = 1;
        photoIdx1 = photoIdx1 + 2;
      } else {
        fadeIn(hero1);
        fadeOut(hero2);
        setTimeout(() => {
          hero2.style.backgroundImage = `url('${photoArray[photoIdx2]}')`;
        }, 1500);
        hero2Visible = 0;
        photoIdx2 = photoIdx2 + 2;
      }
      clearTimeout();
    }, 4500);
  }
})();
