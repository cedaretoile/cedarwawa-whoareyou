document.getElementById("nameInput").addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = document.getElementById("userInfo");
    const outputPara = document.getElementById("outputName");

    const userName = userInput.value;
    outputPara.textContent = 
    `${userName} ʔukʷaqiłs (u-kwa-qilths)`;
});

document.getElementById("homeInput").addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = document.getElementById("homeInfo");
    const outputPara = document.getElementById("outputHome");

    const userHome = userInput.value;
    outputPara.textContent = 
    `ʔiyax̣taqšiƛs (eeyax-taq-shitls) ${userHome}`;
});

document.getElementById("locationInput").addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = document.getElementById("locationInfo");
    const outputPara = document.getElementById("outputLocation");

    const userLocation = userInput.value;
    outputPara.textContent = 
    `ʔiyax̣aʔtax̣s (eeya-xa-taxs) ${userLocation}`;
});




// ---- practise input ----

const textPractise = document.getElementById("practiseName");
const practiseSubmit = document.getElementById("outputPractise");

textPractise.addEventListener("change", updateValue);

function updateValue(event) {
    practiseSubmit.textContent = event.target.value;
}