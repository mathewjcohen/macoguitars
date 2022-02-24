(function() {
  const currentYear = new Date().getFullYear();
  const copyEl = document.getElementById("dateCopyright");
  copyEl.innerHTML = `&copy; MaCo Guitars, ${currentYear}. All rights reserved.`;
})();

// TODO: add custom build form and validate
// function validateForm() {}
