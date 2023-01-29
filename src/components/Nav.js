import logo from '../images/tinder-logo.png'
import logoW from '../images/tinder-white.png';


const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

  const handleClick=()=>{
    setShowModal(true)
    setIsSignUp(false)
  }

  return (
    <div className="">
      <nav>
        <div className="logo-container">
          <img className='logo' src={minimal ? logo : logoW} alt="tinder logo" />
        </div>

        {!authToken && !minimal && <button 
        onClick={handleClick} 
        className='navBtn'
        disabled={showModal}
        >Log In</button>}
      </nav>
    </div>
  )
}

export default Nav