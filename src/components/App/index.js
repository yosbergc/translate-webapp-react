import './App.css';
import Logo from '../../svg/logo.svg'
import { ToTranslate } from '../ToTranslate';
import { Translated } from '../Translated';
import React from 'react';
function App() {
  let [currentText, setCurrentText] = React.useState('Hello, how are you');
  let [currentToTranslate, setCurrentToTranslate] = React.useState(1)
  let [currentTranslated, setCurrentTranslated] = React.useState(2)
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
        <Translated languageList={languageList} currentTranslated={currentTranslated} setCurrentTranslated={setCurrentTranslated}/>
      </section>
    </section>
  );
}

export default App;
