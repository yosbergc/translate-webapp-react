import './CharacterCounter.css'
function CharacterCounter({characterCount}) {
    return (<p className="characterCount">{characterCount}/500</p>)
}
export {CharacterCounter}