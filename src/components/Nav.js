import logo from '../images/tinder-logo.png'
import logoW from '../images/tinder-white.png';


const Nav = ({minimal, authToken})=> {
    return (
      <div className="overlay">
      <nav>
        <div className="logo-container">
          <img className='logo' src={minimal ? logo : logoW} alt="tinder logo" />
        </div>

        {!authToken && !minimal && <button className='navBtn'>Log in</button>}
      </nav>
      </div>
    )
  }
  
  export default Nav