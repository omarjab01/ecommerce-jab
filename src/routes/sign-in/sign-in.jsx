import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase'
import GoogleButton from 'react-google-button'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const SignIn = () => {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }

  return (
    <>
    <div>Registrati</div>
    <GoogleButton onClick={logGoogleUser}>
        Accedi con google
    </GoogleButton>
    </>
  )
}

export default SignIn