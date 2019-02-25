// import _ from 'lodash';

import '../scss/app.scss';
import './components/global.js';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hellooooooo', 'webpack2'], ' ');

  return element;
}

document.body.appendChild(component());