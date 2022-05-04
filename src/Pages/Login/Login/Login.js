import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css'

const Login = () => {
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

    if(user){
      navigate(from, {replace: true});
    }

    if(error) {

      errorElement = <div>
           <p className='text-danger'>Error: {error.message} </p>
     </div>
      
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    
  return (
    <div className="container login-form w-50 mt-5 mx-auto">
      <h2 className="text-center text-primary mt-2">Please Login !!!</h2>
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
