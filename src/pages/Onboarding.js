import { useState } from "react"
import Nav from "../components/Nav"
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom'
import axios from "axios";


const OnBoarding = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [formData, setFormData] = useState({
 
    user_id: cookies.UserId,
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: 'false',
    gender_id: 'male',
    interests_gender: 'female',
    url: '',
    about: '',
    matches: []

  })

let navigate = useNavigate()

  const handleSubmit = async(e) => {

    e.preventDefault()
    try{                                
      const response = await axios.put('http://localhost:5000/user', {formData})
      console.log(response)
      const success = response.status === 200
      if(success) navigate('/dashboard')

    }catch(err){
      console.log(err)
    }
   }
  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    const name = e.target.name
    

    setFormData((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }

  console.log(formData)

  return (
    <>
      <Nav
        minimal={true}
        setShowModal={() => { }}
        showModal={false}

      />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>

          <section>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" id="first_name" onChange={handleChange} value={formData.first_name} placeholder="First Name" required />

            <label htmlFor="birthday">Birthday</label>
            <div className="multiple-input-container">
              <input type="number" name="dob_day" id="dob_day" onChange={handleChange} placeholder="Day" value={formData.dob_day} required />
              <input type="number" name="dob_month" id="dob_month" onChange={handleChange} placeholder="Month" value={formData.dob_month} required />
              <input type="number" name="dob_year" id="dob_year" onChange={handleChange} placeholder="Year" value={formData.dob_year} required />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">

              <input type="radio" name="gender_id" id="male" value="male" onChange={handleChange} checked={formData.gender_id === 'male'} />
              <label htmlFor="male">Male</label>

              <input type="radio" name="gender_id" id="female" value="female" onChange={handleChange} checked={formData.gender_id === 'female'} />
              <label htmlFor="female">Female</label>

              <input type="radio" name="gender_id" id="other" value="other" onChange={handleChange} checked={formData.gender_id === 'other'} />
              <label htmlFor="other">Other </label>
            </div>


            <label htmlFor="show_gender">Show gender on my profile</label>
            <input type="checkbox" name="show_gender" id="show_gender" onChange={handleChange} checked={formData.show_gender} />


            <label>Interests</label>
            <div className="multiple-input-container">


            <input type="radio" name="interests_gender" id="male_interests" value="male" onChange={handleChange} checked={formData.interests_gender === 'male'} />
              <label htmlFor="male_interests">Male</label>

              <input type="radio" name="interests_gender" id="female_interests" value="female" onChange={handleChange} checked={formData.interests_gender === 'female'} />
              <label htmlFor="female_interests">Female</label>

              <input type="radio" name="interests_gender" id="other_interests" value="other" onChange={handleChange} checked={formData.interests_gender === 'other'} />
              <label htmlFor="other_interests">Other </label>


            </div>

            <label htmlFor="about">About me</label>
            <input type="text" name="about" id="about" required={true} value={formData.about} placeholder="I love fiction books" onChange={handleChange} />
            <input type="submit" />

          </section>
          <section>

            <label htmlFor="url">Profile Picture</label>
            <input type="url" name="url" id="url" onChange={handleChange} required={true} />
            <div className="photo-container">
             { formData.url && < img src={formData.url} alt="profile-img" />}
            </div>
          </section>

        </form>
      </div>
    </>
  )
}

export default OnBoarding