export const header = () => {
  const _headerElement = document.createElement('header');
  const h2 = document.createElement('h2');
  _headerElement.appendChild(h2);
  h2.textContent = 'Hello';
  return _headerElement;
};
