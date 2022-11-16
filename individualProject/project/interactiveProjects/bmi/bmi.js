const tab = document.querySelectorAll(".tab")
const std = document.getElementById("standard")
const met = document.getElementById("metric")
const stdTab = document.getElementById("std")
const metTab = document.getElementById("met")

renderStandard()


function renderStandard() {
    stdTab.classList.add("active")
    stdTab.classList.remove("inactive")
    metTab.classList.remove("active")
    metTab.classList.add("inactive")

    met.innerHTML = ""
    std.innerHTML = `
        <div class="height">
            <div class="label">
                <span>Height</span>
            </div>
            <div class="inputs">
                <input id="ft" type="tel" placeholder="5">
                <label for="ft">Feet</label>
                <input id="in" type="tel" placeholder="9">
                <label for="in">Inches</label>
            </div>
        </div>
        <div class="weight">
            <div class="label">
                <span>Weight</span>
            </div>
            <div class="inputs">
                <input id="weight" type="tel" placeholder="145">
                <label for="weight">Pounds</label>
            </div>
        </div>
        <div>
            <span class="button" id="std-btn">Calculate</span>
        </div>
        <div class="bmi-result">
            <span id="result"></span>
        </div>
    `
}

function renderMetric() {
    stdTab.classList.add("inactive")
    stdTab.classList.remove("active")
    metTab.classList.remove("inactive")
    metTab.classList.add("active")

    std.innerHTML = ''
    met.innerHTML = `
        <div class="height">
            <div class="label">
                <span>Height</span>
            </div>
            <div class="inputs">
                <input id="m" type="tel" placeholder="1.7">
                <label for="m">Meters</label>
            </div>
        </div>
        <div class="weight">
            <div class="label">
                <span>Weight</span>
            </div>
            <div class="inputs">
                <input id="weight" type="tel" placeholder="65">
                <label for="weight">Kg</label>
            </div>
        </div>
        <div>
            <span class="button" id="met-btn">Calculate</span>
        </div>
        <div class="bmi-result">
            <span id="result"></span>
        </div>
    `
}


tab.forEach(element => {
    element.addEventListener("click", function() {
        if(element.classList.contains("std")) {
            renderStandard()
            const button1 = document.getElementById("std-btn")
            button1.addEventListener("click", BMI)
        }
        else if (element.classList.contains("met")) {
            renderMetric()
            const button2 = document.getElementById("met-btn")
            button2.addEventListener("click", BMI)
        }
    })
});


const button1 = document.getElementById("std-btn")
button1.addEventListener("click", BMI)




function BMI() {
    if (stdTab.classList.contains("active")) {
        const feet = document.getElementById("ft")
        const inches = document.getElementById("in")
        const weight = document.getElementById("weight")
        const result = document.getElementById("result")
        let inch = parseFloat(feet.value) * 12 + parseFloat(inches.value)
        let bmiCalc = (parseFloat(weight.value) / (inch * inch)) * 703
        result.textContent = "BMI = " + Math.round((bmiCalc + Number.EPSILON) * 100) / 100
    }
    else {
        const meters = document.getElementById("m")
        const weight = document.getElementById("weight")
        const result = document.getElementById("result")
        let bmiCalc = parseFloat(weight.value) / (parseFloat(meters.value) * parseFloat(meters.value))
        result.textContent = "BMI = " + Math.round((bmiCalc + Number.EPSILON) * 100) / 100
    }
}