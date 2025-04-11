let count = 0;

const countBtn = document.querySelector("#countBtn");
const resetBtn = document.querySelector("#resetBtn");

countBtn.innerText = count;

countBtn.addEventListener("click", () => {
  countBtn.innerText = ++count;
});

resetCount.addEventListener("click", () => {
  count = 0;
  countBtn.innerText = count;
});
