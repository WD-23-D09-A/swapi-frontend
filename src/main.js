const body = document.querySelector("body");
const header = () => {
  const _headerElement = document.createElement("header");
  const h2 = document.createElement("h2");
  _headerElement.appendChild(h2);
  h2.textContent = "Hello";
  return _headerElement;
};

body.appendChild(header());

const button = (text) => {
  const _button = document.createElement("button");
  _button.textContent = text;
  return _button;
};

const buttons = ["button 1", "button 2", "button 3"];

buttons.forEach((_button) => {
  body.appendChild(button(_button));
});
