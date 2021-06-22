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
            <h1>Login</h1>
            <p>bla bla bla</p>
            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit} 
                validationSchema={validations}>

                <Form className="Login">
                    <div className="Login-Group">
                        <Field 
                            name ="email" 
                            className="Login-Field"/>
                        <ErrorMessage 
                            component="span" 
                            name="email" 
                            className="Login-Error"/>
                    </div>
                    <div className="Login-Group">
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