import Nav from "../components/Nav";
import '../index.css';
import { useState } from "react";
import AuthModal from "../components/AuthModal";





const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authToken = false;
  const handleClick = () => {
    console.log('clicked');
    setShowModal(true);
    setIsSignUp(true);
  }

  return (
    <div className="overlay">
      <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} setIsSignUp={setIsSignUp}  showModal={showModal}/>
      <div className="home">
        <h1>Start Something Epic</h1>
        <button className="primary-btn" onClick={handleClick}>
          {authToken ? 'Sign Out' : 'Create an Account'}
        </button>

        {showModal && (<AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />)}
      </div>
    </div>
  )
}

export default Home