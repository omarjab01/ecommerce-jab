import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import { signInWithGooglePopup } from '../../utils/firebase/firebase'
import GoogleButton from 'react-google-button'

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    




    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
            console.log(response)

        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className='grid grid-cols-1 shadow-md p-8 rounded-lg'>
            <h1 className='text-2xl font-semibold text-center'>Hai già un account? Accedi</h1>
            <form className='grid grid-cols-1 gap-3 mt-8' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1'>
                    <label for="email">Email</label>
                    <input name="email" type="email" required className='border p-2 rounded-md' onChange={handleChange} />
                </div>
                <div className='grid grid-cols-1'>
                    <label for="password">Password</label>
                    <input name="password" type="password" required className='border p-2 rounded-md' onChange={handleChange} />
                </div>

                <div className='flex flex-row justify-between items-center mt-8'>
                    <button type="submit" className='px-8 py-4 rounded-xl bg-purple-400 text-white'>Accedi</button>
                    <h3>Oppure</h3>
                    <GoogleButton onClick={signInWithGoogle}/>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;