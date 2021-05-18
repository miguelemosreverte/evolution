import ReactDOM from 'react-dom';

export const render = (className, component) =>
document.querySelectorAll(className).forEach(function (element) {
  return ReactDOM.render( component(), element);
});

