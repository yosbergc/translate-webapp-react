import './ToTranslate.css'
import { TranslateButton } from '../TranslateButton'
import {CharacterCounter} from '../CharactersCounter'
import { SmallButtonComponent } from '../SmallButonComponent'
import { LanguageComponent } from '../LanguageComponent'
import Sound from '../../svg/sound_max_fill.svg'
import Copy from '../../svg/Copy.svg'

function ToTranslate({currentText, setCurrentText, currentToTranslate, setCurrentToTranslate, languageList}) {
    return (<section className="ToTranslate-Container">
        <section className="language-selector">
            <LanguageComponent currentToTranslate={currentToTranslate} name={"Detect Language"} setCurrentToTranslate={setCurrentToTranslate} toTranslateID={0}/>
            {languageList.map(language => {
                return <LanguageComponent 
                    currentToTranslate={currentToTranslate}
                    name={language.languageName}
                    setCurrentToTranslate={setCurrentToTranslate}
                    toTranslateID={language.ID}
                    key={language.ID}
                />
            })}
        </section>
        <section className="text-container">
            <textarea maxLength={500} rows={4} onChange={(event) => {
                setCurrentText(event.target.value)
            }} value={currentText}></textarea>
        </section>
        <section className='ToTranslateBottom'>
            <div className='ToTranslateBottomLeft'>
                <SmallButtonComponent imgSrc={Sound}/>
                <SmallButtonComponent imgSrc={Copy}/>
            </div>
            <div className='ToTranslateBottomRight'>
                <CharacterCounter characterCount={currentText.length}/>
                <TranslateButton/>
            </div>
        </section>
    </section>)
}
export {ToTranslate}