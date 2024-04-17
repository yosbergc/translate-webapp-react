import './ToTranslate.css'
import { TranslateButton } from '../TranslateButton'
import {CharacterCounter} from '../CharactersCounter'
import { SmallButtonComponent } from '../SmallButonComponent'
import Sound from '../../svg/sound_max_fill.svg'
import Copy from '../../svg/Copy.svg'
function ToTranslate({currentText, setCurrentText}) {
    return (<section className="ToTranslate-Container">
        <section className="language-selector">
            
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