import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';

import Toggle from './react-lab/SlideToggleReact';
import './react-lab/SlideToggleReact.css';

const App = () => (
  <div>
    <Navigation />
    <div className='wrapper'>
      <div className='frame'>
      </div>
    </div>
    <Toggle/>
  </div>
)
export default App;
