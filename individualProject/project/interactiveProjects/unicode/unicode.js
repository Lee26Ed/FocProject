const input = document.getElementById("input")
const button = document.getElementById("convert-btn")
const unicodeValue = document.getElementById("unicode-value")

input.addEventListener("keypress", convertUni)
button.addEventListener("click", convertUni)


function convertUni(e){
    if(e.type=="click" || e.keyCode === 13){
        let unicode = input.value
        if(unicode == "") {
            unicodeValue.textContent = ""
        }
        else {
            input.value = ""
            unicodeValue.innerHTML = "&#x" + unicode 
        }
    }
}