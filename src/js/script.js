const btn = document.getElementsByTagName('button'),
  overlay = document.querySelector(".overlay"),
  signUp = document.querySelectorAll(".sign-up"),
  recall = document.querySelector(".recall"),
  closeBtn = document.querySelectorAll(".modal__close"),
  modalSignUp = document.getElementById("sign-up"),
  modalRecall = document.getElementById("recall");


signUp.forEach(function (item) {
  item.addEventListener("click", function (event) {
    overlay.style.display = "block";
    modalSignUp.style.display = "flex";
  });
});

recall.addEventListener("click", function () {
  overlay.style.display = "block";
  modalRecall.style.display = "flex";
});



overlay.addEventListener('click', function (event) {
  if (event.target == overlay || event.target == closeBtn) {
    closeBtn.forEach(function (item) {
      item.addEventListener("click", function () {
        overlay.style.display = "none";
        modalSignUp.style.display = "none";
        modalRecall.style.display = "none";
      });
    });
    overlay.style.display = "none";
    modalSignUp.style.display = "none";
    modalRecall.style.display = "none";
  }
});