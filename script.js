document.getElementById("nameInput").addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = document.getElementById("userInfo");
    const outputPara = document.getElementById("outputName");

    const userName = userInput.value;
    outputPara.textContent = `${userName} ʔukʷaqiłs`;
});

document.getElementById("homeInput").addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = document.getElementById("homeInfo");
    const outputPara = document.getElementById("outputHome");

    const userHome = userInput.value;
    outputPara.textContent = `ʔiyax̣taqšiƛs ${userHome}`;
});

document.getElementById("locationInput").addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = document.getElementById("locationInfo");
    const outputPara = document.getElementById("outputLocation");

    const userLocation = userInput.value;
    outputPara.textContent = `ʔiyax̣aʔtax̣s ${userLocation}`;
});