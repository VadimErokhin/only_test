const btnCollection = document.querySelectorAll(".btn");
const arrayOfButtons = Array.from(btnCollection);
const buttonWrapper = document.querySelector(".buttons_wrapper");

buttonWrapper.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  const btnPlus = btn.querySelector(".btn_plus");
  const btnMinus = btn.querySelector(".btn_minus");
  const buttonContent = document.getElementById(btn.dataset.name);

  buttonContent.classList.toggle("hidden");
  btnPlus.classList.toggle("hidden");
  btnMinus.classList.toggle("hidden");
});
