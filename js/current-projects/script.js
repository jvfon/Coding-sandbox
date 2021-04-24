const dataAttributeElement = document.querySelector("[data-test]");

dataAttributeElement.style.color = "green";

console.log(dataAttributeElement);


const divsWithClasses = document.querySelectorAll(".div-class");

Array.from(divsWithClasses);
divsWithClasses.forEach(div => (div.style.color = "red"));

console.log(divsWithClasses);


const input = document.querySelector("body > input[type='text']");

console.log(input);
