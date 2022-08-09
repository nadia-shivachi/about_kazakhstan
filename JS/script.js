console.log("Hej! Tu jest podstawowe info o Kazachstanie, mojej ojczyźnie.");

let button = document.querySelector(".js-section__button");

button.addEventListener("click", () => {
    if (button.innerText === "Stolicą jest miasto Nur-Sultan;") {
        button.innerText = "Miejscowi wolą nazwę 'Astana'!";
    }
    else {
        button.innerText = "Stolicą jest miasto Nur-Sultan;"
    }
})
