import React from 'react'
import { signInWithGooglePopup, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase'
import GoogleButton from 'react-google-button'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { async } from '@firebase/util'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignInForm from '../../components/sign-in-form/SignInForm'

const SignIn = () => {

    // useEffect(() => {
    //     const risposta = async () => {
    //         const response = await getRedirectResult(auth);

    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    //     }
    //     risposta();
    // }, []);


    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)
    }

  return (
    <div className='max-w-7xl mx-auto grid grid-cols-2 p-2 gap-36'>
        <SignInForm />
        
      <SignUpForm />
    </div>
  )
}

export default SignIn