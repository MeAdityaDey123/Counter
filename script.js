const increaseBtn = document.querySelector(".increase")
const decreaseBtn = document.querySelector(".decrease")
const number = document.querySelector(".number")

increaseBtn.addEventListener("click", () => {
    number.textContent = Number(number.textContent) + 1;
})

decreaseBtn.addEventListener("click", () => {
    if (number.textContent !== "0") {
        number.textContent = Number(number.textContent) - 1;
    }
})