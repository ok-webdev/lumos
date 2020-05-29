const overlay = document.querySelector(".overlay"),
  signUp = document.querySelectorAll(".sign-up"),
  recall = document.querySelector(".recall"),
  closeBtn = document.querySelectorAll(".modal__close"),
  modalSignUp = document.getElementById("sign-up"),
  modalRecall = document.getElementById("recall");


signUp.forEach(function (item) {
  item.addEventListener("click", function () {
    overlay.style.display = "block";
    modalSignUp.style.display = "flex";
  });
});

recall.addEventListener("click", function () {
  overlay.style.display = "block";
  modalRecall.style.display = "flex";
});

closeBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    overlay.style.display = "none";
    modalSignUp.style.display = "none";
    modalRecall.style.display = "none";
  });
});

