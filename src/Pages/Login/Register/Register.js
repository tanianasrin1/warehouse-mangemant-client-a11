// import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth); 
    const navigate = useNavigate(); 
    
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(event.target)
    

        createUserWithEmailAndPassword( email, password)
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    if(user){
      navigate('/home')
    }

    return (
      <div className='register-form mt-5'>
      <h2 style={{textAlign: 'center'}} className="text-primary">Please Register!!!</h2>
      <form className='mt-4 register' onSubmit={handleRegister} >
          <input type="text" name="name" id="" placeholder='Your name' />
          
          <input type="email" name="email" id="" placeholder='Your email' required/>
          
          <input type="password" name="password" id=""  placeholder='Your password' required/>
          <input  type="submit" value="Register" />
      </form>
     
      <p>Already have an account? <span className="text-danger" onClick={navigateLogin}>Please Login</span> </p>
      <SocialLogin></SocialLogin>
  </div>
    );
};

export default Register;