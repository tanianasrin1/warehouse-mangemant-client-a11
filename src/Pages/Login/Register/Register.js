// import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';


const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true}); 
    const navigate = useNavigate(); 
    let errorElement;
    
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
    
    if(loading){
      return <Loading></Loading>
    }

    if(user){
      navigate('/home')
    }

    if(error) {

      errorElement = <div>
           <p className='text-danger'>Error: {error.message} </p>
     </div>
      
    }

    return (
      <div className='register-form mt-5'>
      <h2 style={{textAlign: 'center'}} className="text-primary">Please Register!!!</h2>
      <form className='mt-4 register' onSubmit={handleRegister} >
          <input type="text" name="name" id="" placeholder='Your name' />
          
          <input type="email" name="email" id="" placeholder='Your email' required/>
          
          <input type="password" name="password" id=""  placeholder='Your password' required/>
          <input className='btn btn-primary w-50 mx-auto' type="submit" value="Register" />
      </form>

      {errorElement}
     
      <p>Already have an account? <span className="text-danger" onClick={navigateLogin}>Please Login</span> </p>
      
      <SocialLogin></SocialLogin>
  </div>
    );
};

export default Register;