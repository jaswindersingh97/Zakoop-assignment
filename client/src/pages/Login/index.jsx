import React from 'react'
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import Form from './../../components/Form/Form';
import Api from './../../Api/Api';
import styles from './index.module.css'
function Login() {
  const formFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      errorMessage: "Please enter a valid email address",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      validate: (value) => value.length >= 6,
      errorMessage: "Password must be at least 6 characters long",
    },
  ];
  const handleSubmit = async(data) => {
    const response =await Api({
      endpoint: "/a/login",
      method: "POST",
      data:data,
    });
    if(response.status === 200){
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("user",JSON.stringify(response.data.user));
      toast.success("Logged in sucessfully");
      window.location.href = "/"  
    }
  };

  return (
    <div className={styles.container}>
    <h1>Login</h1>
    <div className={styles.form}>
    <Form fields={formFields} onSubmit={handleSubmit} buttonLabel={"Login"}/>
    </div>
    <p>or</p>
    <p>Don't have an account <h3><Link to={"/register"}>Sign up</Link></h3></p>
    </div>
  )
}

export default Login
