export const button = (text) => {
  const _button = document.createElement('button');
  let _text;
  /* was passiert wenn der Text keinen Text ist*/
  if (typeof text !== 'string') {
    _text = 'Click';
  }
  /* was passiert wenn es keinen Text gibt */
  _text = text || 'Click';
  /* was passiert wenn der Text zu lang */
  _text.slice(0, 10);

  _button.textContent = _text;
  return _button;
};
