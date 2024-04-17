import './App.css';
import Logo from '../../svg/logo.svg'
import { ToTranslate } from '../ToTranslate';
import React from 'react';
function App() {
  let [currentText, setCurrentText] = React.useState('');
  return (
    <section className='app-container'>
      <header>
        <img src={Logo} alt='Logo'></img>
      </header>
      <section className='translateComponents'>
        
        <ToTranslate currentText={currentText} setCurrentText={setCurrentText}/>
      </section>
    </section>
  );
}

export default App;
