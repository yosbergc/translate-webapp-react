import './App.css';
import Logo from '../../svg/logo.svg'
import { ToTranslate } from '../ToTranslate';
import { Translated } from '../Translated';
function AppUI() {
    return (<section className='app-container'>
    <header>
      <img src={Logo} alt='Logo'></img>
    </header>
    <section className='translateComponents'>
      <ToTranslate/>
      <Translated/>
    </section>
  </section>)
}
export {AppUI}