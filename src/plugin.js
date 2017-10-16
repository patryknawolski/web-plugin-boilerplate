import './styles/plugin.scss';

const init = function () {
  const body = document.getElementsByTagName('body')[0];
  const element = document.createElement('h1');
  const text = 'Hello world';
  const textNode = document.createTextNode(text);

  element.appendChild(textNode);
  body.appendChild(element);
}

module.exports = {
  init: init
}
