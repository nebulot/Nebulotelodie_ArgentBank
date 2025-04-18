import React from 'react'
import Form from '../components/Form'

/**
 * Creates signInContent content component
 * @returns { HTMLElement }
 */
const SignInContent = () => {
  return (
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
      </section>
  )
}

export default SignInContent