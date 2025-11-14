//---- introduction phrases ----

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


// ---- practise typing input ----

const textPractise = document.getElementById("practiseName");
const practiseSubmit = document.getElementById("outputPractise");

textPractise.addEventListener("change", updateValue);

function updateValue(event) {
    practiseSubmit.textContent = event.target.value;
}

// ---- toggle colours ----

const toggleBtn = document.getElementById('mode-toggle');
const docBody = document.body;

function applyTheme(theme) {
  if (theme === 'dark') {
    docBody.classList.add('dark-mode');
  } else {
    docBody.classList.remove('dark-mode');
  }
};

const mainTheme = localStorage.getItem('theme');
if (mainTheme) {
  applyTheme(mainTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

  applyTheme('dark');
} else {
  applyTheme('light');
};

toggleBtn.addEventListener('click', () => {
  if (docBody.classList.contains('dark-mode')) {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  } else {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  }
});