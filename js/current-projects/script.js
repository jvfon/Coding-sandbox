const divsWithClass = document.getElementsByClassName("div-class");

const divsWithClassArray = Array.from(divsWithClass);

divsWithClassArray.forEach(div => (div.style.color = "green"));
