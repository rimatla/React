import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={2} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
