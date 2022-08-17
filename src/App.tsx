import { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ExtensionCounter from './components/ExtensionCounter';

function App() {


  return (
    <Router>
      <ExtensionCounter />
    </Router>
  );
}

export default App;
