import Image from '../../svg/Sort_alfa.svg'
import './TranslateButton.css'
import React from 'react';
import { context } from '../Context';
function TranslateButton() {
    let {makeRequest} = React.useContext(context)
    return (<button className='TranslateButton' onClick={() => {
        makeRequest()
    }}>
        <img src={Image} alt='Button Icon'></img>
        Translate
    </button>)
}
export {TranslateButton};