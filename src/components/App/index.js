import './App.css';
import Logo from '../../svg/logo.svg'
import { ToTranslate } from '../ToTranslate';
import React from 'react';
function App() {
  let [currentText, setCurrentText] = React.useState('');
  let [currentToTranslate, setCurrentToTranslate] = React.useState(0)
  let languageList = [
    {
      languageName: "English",
      languageISOStandard: "en",
      ID: 1
    },
    {
      languageName: "French",
      languageISOStandard: "fr",
      ID: 2
    },
    {
      languageName: "Spanish",
      languageISOStandard: "es",
      ID: 3
    }
  ]
  return (
    <section className='app-container'>
      <header>
        <img src={Logo} alt='Logo'></img>
      </header>
      <section className='translateComponents'>
        
        <ToTranslate currentText={currentText} setCurrentText={setCurrentText} languageList={languageList} currentToTranslate={currentToTranslate} setCurrentToTranslate={setCurrentToTranslate}/>
      </section>
    </section>
  );
}

export default App;
