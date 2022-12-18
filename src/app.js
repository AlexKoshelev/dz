import { getRandomColor } from "./utils/utils";

function initApp() {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "Изменить цвет страницы";
  document.body.append(button);

  button.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}

export default initApp;
