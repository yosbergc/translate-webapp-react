import './LanguageComponent.css'
function LanguageComponent({name, toTranslateID, currentToTranslate, setCurrentToTranslate}) {
    return (<button className={`languageSingle ${currentToTranslate === toTranslateID ? "activeLanguage" : undefined}`} onClick={() => {
        setCurrentToTranslate(toTranslateID)
    }}>
        {name}
    </button>)
}
export {LanguageComponent};