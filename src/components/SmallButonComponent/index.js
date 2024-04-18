import './SmallButtonComponent.css'
function SmallButtonComponent({imgSrc, onClick, state}) {
    return (<button onClick={() => {
        onClick(state)
    }} className='smallButtonComponent'>
        <img src={imgSrc} alt="Small Button Component"></img>
    </button>)
}
export {SmallButtonComponent}