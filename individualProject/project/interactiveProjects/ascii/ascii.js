const input = document.getElementById("input")
const button = document.getElementById("convert-btn")
const asciiValue = document.getElementById("ascii-value")

input.addEventListener("keypress", convertBinary)
button.addEventListener("click", convertBinary)


function convertBinary(e){
    if(e.type=="click" || e.keyCode === 13){
        let decimal = input.value 
        if (decimal === "") {
            asciiValue.textContent = ""
        }
        else if (parseInt(decimal) >= 0 && parseInt(decimal) <= 127) {
            let asciiVal = String.fromCharCode(parseInt(decimal))
            asciiValue.textContent = asciiVal
            input.value = ""
        }
        else {
            asciiValue.textContent = "Please enter a valid decimal"
            input.value = ""
        }

    }
}