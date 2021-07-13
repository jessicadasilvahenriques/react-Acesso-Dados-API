import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
 
import './Login.css'

const Login = () => {

    const handleSubmit = values => console.log(values)
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (

        <>
        <div className="titulo-login">
            <h3>LOGIN</h3>
        </div>
            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit} 
                validationSchema={validations}>

                <Form className="Login">
                    <div className="Login-Group">
                    Email:
                        <Field 
                            name ="email" 
                            className="Login-Field"/>
                        <ErrorMessage 
                            component="span" 
                            name="email" 
                            className="Login-Error"/>
                    </div>

                    <div className="Login-Group">
                    <br/>
                    Password:
                        <Field 
                            name ="password" 
                            className="Login-Field"/>
                        <ErrorMessage 
                            component="span" 
                            name="password" 
                            className="Login-Error"/>
                    </div>

                    
                    <button className="Login-Btn" type="submit">Login</button>

                </Form>
            </Formik>
        </>
    )
}

export default Login