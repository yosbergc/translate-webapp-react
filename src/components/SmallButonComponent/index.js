import './SmallButtonComponent.css'
function SmallButtonComponent({imgSrc, onClick}) {
    return (<button onClick={() => {
        onClick()
    }} className='smallButtonComponent'>
        <img src={imgSrc} alt="Small Button Component"></img>
    </button>)
}
export {SmallButtonComponent}