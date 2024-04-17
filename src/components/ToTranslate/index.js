import './ToTranslate.css'
import { TranslateButton } from '../TranslateButton'
import {CharacterCounter} from '../CharactersCounter'
function ToTranslate({currentText, setCurrentText}) {
    return (<section className="ToTranslate-Container">
        <section className="language-selector">

        </section>
        <section className="text-container">
            <textarea maxLength={500} rows={8} onChange={(event) => {
                setCurrentText(event.target.value)
            }} value={currentText}></textarea>
        </section>
        <section className='ToTranslateBottom'>
            <div className='ToTranslateBottomLeft'>

            </div>
            <div className='ToTranslateBottomRight'>
                <CharacterCounter characterCount={currentText.length}/>
                <TranslateButton/>
            </div>
        </section>
    </section>)
}
export {ToTranslate}