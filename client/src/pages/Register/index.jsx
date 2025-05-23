import React from 'react'
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import Form from './../../components/Form/Form';
import Api from './../../Api/Api';
import styles from './index.module.css'
function Register() {
  const formFields = [
    {
        name: "name",
        label: "Username",
        type: "text",
        required: true,
        validate: (value) =>value.length >= 3,
        errorMessage: "Username should be at least 3 characters",
    },
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
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      required: true,
      validate: (value, formValues) => value === formValues.password,
      errorMessage: "Passwords do not match",
    },
  ];
  const handleSubmit = async(data) => {
    const {confirmPassword,...finalData}=data; 
    const response =await Api({
      endpoint: "/a/register",
      method: "POST",
      data:finalData,
    });
    if(response.status === 201){
      toast.success("Account created successfully");}
  };

  return (
    <div className={styles.container}>
    <h1>Register User</h1>
    <div className={styles.form}>
    <Form fields={formFields} onSubmit={handleSubmit} buttonLabel={"Sign Up"}/>
    </div>
    <p>or</p>
    <p>Already have an accout <h3><Link to={"/login"}>Login</Link></h3></p>
    </div>
  )
}

export default Register
