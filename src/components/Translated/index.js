import { SmallButtonComponent } from "../SmallButonComponent"
import { LanguageComponent } from '../LanguageComponent'
import Change from '../../svg/Horizontal_top_left_main.svg'
import Sound from '../../svg/sound_max_fill.svg';
import Copy from '../../svg/Copy.svg'
import './Translated.css'

function Translated({languageList, currentTranslated, setCurrentTranslated}) {
    return (<section className="translated">
        <section className="language-selector translatedLanguage">
            <section className="innerLanguages">
                {languageList.map(language => {
                    return <LanguageComponent name={language.languageName} currentToTranslate={currentTranslated} setCurrentToTranslate={setCurrentTranslated} toTranslateID={language.ID} key={language.ID}/>
                })}
            </section>
            <SmallButtonComponent imgSrc={Change}/>
        </section>
        <section className="text-container">
            <p className="textResult"></p>
        </section>
        <section className="TranslatedBottom">
            <SmallButtonComponent imgSrc={Sound}/>
            <SmallButtonComponent imgSrc={Copy}/>
        </section>
    </section>)
}
export {Translated}