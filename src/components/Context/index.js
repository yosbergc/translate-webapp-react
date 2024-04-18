import React from "react";
let context = React.createContext();
function TranslateContext({children}) {
let [currentText, setCurrentText] = React.useState('Hello, how are you');
  let [currentToTranslate, setCurrentToTranslate] = React.useState(1)
  let [currentTranslated, setCurrentTranslated] = React.useState(2)
  let [translatedText, setTranslatedText] = React.useState('')
  const API_URL = 'https://api.mymemory.translated.net/get';
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
  function SwipeLanguages() {
    let toTranslate = currentToTranslate;
    setCurrentToTranslate(currentTranslated)
    setCurrentTranslated(toTranslate);
  }
  function getLanguageISO(currentID) {
    return languageList.find(language => language.ID === currentID).languageISOStandard;
  }
  function makeRequest() {
    try {
      let text = currentText.trim();
      let ToTranslateISO = getLanguageISO(currentToTranslate);
      let TranslatedISO = getLanguageISO(currentTranslated)
      if (text.length === 0) {

      } else {
        fetch(`${API_URL}?q=${text}&langpair=${ToTranslateISO}|${TranslatedISO}`)
        .then(res => res.json())
        .then(data => setTranslatedText(data.responseData.translatedText))
      }
    } catch(error) {
      console.error(error)
    }
  }
    return (<context.Provider value={
        {currentText,
        setCurrentText,
        currentToTranslate,
        setCurrentToTranslate,
        currentTranslated,
        setCurrentTranslated,
        languageList,
        SwipeLanguages,
        translatedText,
        makeRequest}}
        >
        {children}
    </context.Provider>)
}
export {TranslateContext, context};