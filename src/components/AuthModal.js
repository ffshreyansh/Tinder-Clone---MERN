import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';

const AuthModal = ({setShowModal, isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies('user')

    let navigate = useNavigate()



    const handleClick = () =>{
        setShowModal(false)
    }


    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            if(isSignUp && (password !== confirmPassword)){
                setError("Password didn't match")
                return
            }
            const response = await axios.post(`http://localhost:5000/${isSignUp ? 'signup' : 'login'}`, {email, password})

            setCookie('Email', response.data.email)
            setCookie('UserId', response.data.userId)
            setCookie('AuthToken', response.data.token)



            const success = response.status === 201



            if(success && isSignUp) navigate ('/onboarding')
            if(success && !isSignUp) navigate ('/dashboard')

            window.location.reload()
        } catch (error) {
            console.log(error )
        }
    }
    

    

  return (
    <div className="authModal">
        <div className="close-icon" onClick={handleClick}>ⓧ</div>
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