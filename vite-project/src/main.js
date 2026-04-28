
import './style.scss'

import('./counter.js').then(({ setupCounter }) => {
  setupCounter(document.querySelector('button'));
});


confetti();
