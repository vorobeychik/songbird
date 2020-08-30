import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import SCCS from './scss/App.scss'

function App() {
  return (
      <div className={'wrapper'}>
          <div className={'main'}>
            <Header/>
            <Body />
          </div>
      </div>
  );
}

export default App;
