const input = document.getElementById("input")
const button = document.getElementById("convert-btn")
const hexValue = document.getElementById("hex-value")

input.addEventListener("keypress", convertBinary)
button.addEventListener("click", convertBinary)


function convertBinary(e){
    if(e.type=="click" || e.keyCode === 13){
        let binary = input.value
        if(binary == "") {
            hexValue.textContent = ""
            
        }
        else {
            input.value = ""
            if (checkString(binary)){
                let decimal = toDecimal(binary)
                let hex = decimal.toString(16)
                hexValue.textContent = hex.toUpperCase()
            }
            else {
                hexValue.textContent = "Number is Not Binary"
            } 
        }
    }
}


function toDecimal(binary) {
    let revNumber = reverseString(binary)
    let multiplier = 1
    let decimal = 0
    for (let i = 0; i < revNumber.length; i++) {
        decimal += revNumber[i] * multiplier
        multiplier *= 2
    }
    return decimal
}

function checkString(str) {
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" || str[i] === "1") {
            isBinary = true;
        } else {
            return false;
        }
    }
    return isBinary;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}