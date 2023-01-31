import './Signup.css';
import React, {useState} from 'react';

function SignupForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }


    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label><br></br>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} 
                  id="firstName" placeholder="First Name" required/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label><br></br>
                  <input  type="text" name="" id="lastName" value={firstName} onChange = {(e) => handleInputChange(e)} 
                   className="form__input" placeholder="LastName" required/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label><br></br>
                  <input  type="email" id="email" className="form__input" value={firstName} onChange = {(e) => handleInputChange(e)} 
                  placeholder="Email" required/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label><br></br>
                  <input className="form__input" type="password" value={firstName} onChange = {(e) => handleInputChange(e)} 
                   id="password" placeholder="Password" required/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label><br></br>
                  <input className="form__input" type="password" id="confirmPassword" value={firstName} onChange = {(e) => handleInputChange(e)}
                   placeholder="Confirm Password" required/>
              </div>
          </div>
          <div class="footer">
              <button onClick={()=>handleSubmit()} type="submit" class="btn">Sign Up</button>
          </div>
          <p className="lastParagraph">Already have an account?  Sign in <a href='www.example.com'>here</a> to start shopping!</p>
      </div>      
    )       
}
export default SignupForm;