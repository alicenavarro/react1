import React from 'react';
import Menu from './menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Menu />
      <h1>Bienvenido a mi sitio web</h1>
      <p>¡Gracias por visitarnos!</p>
    </div>
  );
}

export default App;