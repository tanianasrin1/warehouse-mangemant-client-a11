import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import axios from 'axios';
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [user1] = useAuthState(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate(); 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElement;

   
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() =>{
      if(user1){
        navigate(from, {replace: true});
      }

    },[user1])

    if(loading || sending){
      return <Loading></Loading>
    }

   

    if(error) {

      errorElement = <div>
           <p className='text-danger'>Error: {error.message} </p>
     </div>
      
    }

    const handleSubmit = async(event) => {
       
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://mysterious-bastion-52209.herokuapp.com/getToken', {email});
        localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, {replace: true});
        console.log(data)
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    
   

    const resetPassword = async() => {
      const email = emailRef.current.value;
      if(email) {
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }  
      else {
        toast('Please enter your email address')
      } 
        
    }
    
  return (
    <div className="container login-form w-50  mx-auto">
      <h2 className="text-center  text-primary mt-2">Please Login !!!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
        </Form.Group>
      
        <Button className="login-button w-50 mx-auto d-block mb-2" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to website? <span className="text-danger" onClick={navigateRegister}>Please Register</span> </p>
      <p>Forget Password? <span className="text-danger" onClick={resetPassword}>Reset Password</span> </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
