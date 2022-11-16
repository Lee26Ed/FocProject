const inputBtn = document.getElementById("input")
const offOn = document.getElementById("input-message")
const outputEl = document.getElementById("output")
const outputMessage = document.getElementById("output-message")

inputBtn.addEventListener("click", function() {
    inputBtn.classList.toggle("clicked-input")
    if (inputBtn.classList.contains("clicked-input")) {
        offOn.textContent = "ON"
        outputEl.classList.remove("clicked-output")
        outputMessage.textContent = "OFF"
    }
    else {
        offOn.textContent = "OFF"
        outputEl.classList.add("clicked-output")
        outputMessage.textContent = "ON"
    }
})