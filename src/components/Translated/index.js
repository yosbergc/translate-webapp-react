import React from "react";
import { SmallButtonComponent } from "../SmallButonComponent"
import { LanguageComponent } from '../LanguageComponent'
import { Loading } from '../Loading'
import Change from '../../svg/Horizontal_top_left_main.svg'
import Sound from '../../svg/sound_max_fill.svg';
import Copy from '../../svg/Copy.svg'
import './Translated.css'
import { context } from "../Context";

function Translated() {
    let {languageList, currentTranslated, setCurrentTranslated, SwipeLanguages, translatedText, isLoading, selectText} = React.useContext(context);
    return (<section className="translated">
        <section className="language-selector translatedLanguage">
            <section className="innerLanguages">
                {languageList.map(language => {
                    return <LanguageComponent 
                    name={language.languageName}
                    currentToTranslate={currentTranslated}
                    setCurrentToTranslate={setCurrentTranslated}
                    toTranslateID={language.ID}
                    key={language.ID}/>
                })}
            </section>
            <SmallButtonComponent imgSrc={Change} onClick={() => {
                SwipeLanguages()
            }}/>
        </section>
        <section className="text-container">
            {isLoading && <Loading/>}
            <p className="textResult">{translatedText}</p>
        </section>
        <section className="TranslatedBottom">
            <SmallButtonComponent imgSrc={Sound}/>
            <SmallButtonComponent imgSrc={Copy} onClick={selectText} state={translatedText}/>
        </section>
    </section>)
}
export {Translated}