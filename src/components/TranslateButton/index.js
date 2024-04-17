import Image from '../../svg/Sort_alfa.svg'
import './TranslateButton.css'
function TranslateButton() {
    return (<button className='TranslateButton'>
        <img src={Image} alt='Button Icon'></img>
        Translate
    </button>)
}
export {TranslateButton};