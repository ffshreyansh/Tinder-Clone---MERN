import Nav from "../components/Nav";
import '../index.css';
import { useState } from "react";
import AuthModal from "../components/AuthModal";





const Home=()=> {
  
  const [showModal, setShowModal] = useState(false);
  const authToken = false;
const handleClick =()=>{
    console.log('clicked');
    setShowModal(true);
}

  return (
    <div className="overlay">
    <Nav minimal={false} authToken={authToken}/>
    <div className="home">
        <h1>Swipe Right™</h1>
        <button className="primary-btn" onClick={handleClick}>
            {authToken ? 'Sign Out' : 'Create an Account'}
            </button>
    
    {showModal && (<AuthModal setShowModal={setShowModal}/>)}
    </div>
    </div>
  )
}

export default Home