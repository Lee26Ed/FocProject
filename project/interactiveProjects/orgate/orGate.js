const Btn1 = document.getElementById("btn1")
const message1 = document.getElementById("input-message1")
const Btn2 = document.getElementById("btn2")
const message2 = document.getElementById("input-message2")
const output = document.getElementById("output")
const outputMessage = document.getElementById("output-message")

Btn1.addEventListener("click", () => {
    Btn1.classList.toggle("clicked-input")
    if (Btn1.classList.contains("clicked-input")) {
        message1.textContent = "ON"
        output.classList.add("clicked-output")
        outputMessage.textContent = "ON"
    }
    else if (!Btn1.classList.contains("clicked-input") && !Btn2.classList.contains("clicked-input")) {
        message1.textContent = "OFF"
        output.classList.remove("clicked-output")
        outputMessage.textContent = "OFF"
    }
    else if (!Btn1.classList.contains("clicked-input")) {
        message1.textContent = "OFF"
    }
})

Btn2.addEventListener("click", () => {
    Btn2.classList.toggle("clicked-input")
    if (Btn2.classList.contains("clicked-input")) {
        message2.textContent = "ON"
        outputMessage.textContent = "ON"
        output.classList.add("clicked-output")
    }
    else if (!Btn2.classList.contains("clicked-input") && !Btn1.classList.contains("clicked-input")) {
        message2.textContent = "OFF"
        outputMessage.textContent = "OFF"
        output.classList.remove("clicked-output")
    }
    else if (!Btn2.classList.contains("clicked-input")) {
        message2.textContent = "OFF"
    }
})