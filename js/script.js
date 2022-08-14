{
  const welcome = () => {
    console.log(
      "Hej! Tu jest podstawowe info o Kazachstanie, mojej ojczyźnie."
    );
  };

  const toggleButtonText = () => {
    const button = document.querySelector(".js-section__button");

    button.addEventListener("click", () => {
      button.innerText =
        button.innerText === "Stolicą jest miasto Nur-Sultan;"
          ? "Miejscowi wolą nazwę 'Astana'!"
          : "Stolicą jest miasto Nur-Sultan;";
    });
  };
  const init = () => {
    welcome();
    toggleButtonText();
  };

  init();
}
