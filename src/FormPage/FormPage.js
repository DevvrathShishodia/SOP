import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import logo from "./logo.png"
import "./FormPage.css"

function FormPage({setConfirmed,choose}) {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setConfirmed(true)
    emailjs.sendForm('service_omdp09e', 'template_zckwjl4', form.current, 'RfzoojrBz0IvY6vnV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
        <div  className='logo'>
      <img src={logo} alt="" />
    </div>
      <h1 className='heading'>SOP - Genration Tool</h1>
      <h2>We provide
        <span> Canadian immigration and education </span>
         solutions!</h2>
      <form className="main" ref={form} name='form' onSubmit={sendEmail} >
            <div className='formInput'>
              <label>Email*</label>
              <input className="input" type="email" name="user_email" required />
              <label>Full Name</label>
              <input placeholder='Your Answer' className="input" type="text" name="user_name" required />
              <label>age</label>
              <input className="input" type='number' name='user_age' required />
              <label>Highest Level of Education</label>
              <select name='user_qualifications' required>
                <option disabled defaultValue={choose}>Choose</option>
                <option value="Grade12">Grade 12</option>
                <option value="BachelorsDegree ">Bachelors</option>
                <option value="Diploma">Diploma Degeree</option>
                <option value="MasterDegree">Master Degeree</option>
                <option value="PHD">PHD</option>
              </select>
              <label>Institute where you completed your highest level of Education</label>
              <input className="input" type="text" name='user_school' required />
              <label>What did you Study</label>
              <input className="input" type="text"name='user_study' required />
              <label>Do you have any relevant work experience?
                *
                Write None if no work experience. Provide the following details if yes:
                Job Title
                Company Name
                Job duties
                Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.</label>
              <input className="input" type="text" name='user_workExperience' required />
              <label>What institute did you get admitted to in Canada?</label>
              <input className="input" type="text" name='canada_institute' required />
              <label>What is your program of study in Canada?</label>
              <input className="input" type="text" name='canada_program' required />
              <label>Which country are you applying from?</label>
              <input className="input" type="text" name='applying_country' required/>
              <label>What are your future goals?</label>
              <input className="input" type="text" name='future_goals' required/>
              <label>English Scores - Listening</label>
              <input className="input" type="text" name='listening_scores' required/>
              <label>English Scores - Reading</label>
              <input className="input" type="text" name='reading_scores' required/>
              <label>English Scores - Speaking</label>
              <input className="input" type="text" name='speaking_scores' required/>
              <label>English Scores - Writiing</label>
              <input className="input" type="text" name='writing_scores' required/>
              <div className='option' >
                <p>Did you pay your first year tuition?</p>
                <input  name="opt1" type="radio" id='Yes' value="YES" required />
                <label htmlFor='Yes'>Yes</label>
                <input  name="opt1" type="radio" id='No' value="NO" required />
                <label htmlFor='No'>No</label>
              </div>
              <label>How much tuition fee did you pay?</label>
              <input className="input" type="text" name='tution_fee' required />
              <div className='option' >
                <p>Did you do a GIC?</p>
                <input  name="opt2" type="radio" value="Yes" required />
                <label>Yes</label>
                <input name="opt2"  type="radio" value="No" required />
                <label>No</label>
              </div>
              <label>How much did you pay towards GIC? </label>
              <input className="input" type="text" name='paytoGIC' required />
            </div>


            <button id='btn' type='submit' >
              Confirm</button>
          </form>
    </div>
  )
}

export default FormPage
