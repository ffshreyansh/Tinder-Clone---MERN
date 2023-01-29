import { useState } from "react";

const AuthModal = ({setShowModal, isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    console.log(email, password, confirmPassword)



    const handleClick = () =>{
        setShowModal(false)
    }


    const handleSubmit = (e) =>{
        e.preventDefault()

        try {
            if(isSignUp && (password !== confirmPassword)){
                setError("Password didn't match")
            }
            console.log("Make a post request to DB")
        } catch (error) {
            console.log(error )
        }
    }
    

    

  return (
    <div className="authModal">
        <div className="close-icon" onClick={handleClick}><i class="fa-regular fa-circle-xmark"></i></div>
        <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required />

            <input 
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required />

            {isSignUp && <input 
            type="password-check"
            name="password-check"
            id="password-check"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required />}

            <input className="secondary-btn" type="submit" />
            <p>{error}</p>


        </form>
    
    </div>
  )
}

export default AuthModal