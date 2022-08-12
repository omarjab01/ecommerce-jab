import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const defaultFormFields = {
    nome : '',
    cognome: '',
    email: '',
    password: '',
    confirmPass: '',
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { nome, cognome, email, password, confirmPass } = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPass){
            alert("Le password sono diverse")
            return;
        }

        try{

            const {user} = createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {nome})
            resetFormFields();

        }catch(error){
            console.log(error)
        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }


  return (
    <div className='grid grid-cols-1 shadow-md p-8 rounded-lg'>
        <h1 className='text-2xl font-semibold text-center'>Non hai ancora un account?</h1>
        <form className='grid grid-cols-1 gap-3 mt-8' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-8'>
                <div className='grid grid-cols-1'>
                <label for="nome">Nome</label>
                <input name="nome"  type="text" required onChange={handleChange} value={nome} className='border p-2 rounded-md'/>
                </div>
                <div className='grid grid-cols-1'>
                <label for="cognome">Cognome</label>
                <input name="cognome"  type="text" required onChange={handleChange} value={cognome} className='border p-2 rounded-md'/>
                </div>
            </div>
            <div className='grid grid-cols-1'>
            <label for="email">Email</label>
            <input name="email"  type="email" required onChange={handleChange} value={email} className='border p-2 rounded-md'/>
            </div>
            <div className='grid grid-cols-1'>
            <label for="password">Password</label>
            <input name="password"  type="password" required onChange={handleChange} value={password} className='border p-2 rounded-md'/>
            </div>
            <div className='grid grid-cols-1'>
            <label for="confirmPass">Conferma Password</label>
            <input name="confirmPass"  type="password" required onChange={handleChange} value={confirmPass} className='border p-2 rounded-md'/>
            </div>

            <button type="submit" className='px-8 py-4 rounded-xl bg-purple-700 text-white mt-4'>Crea Account</button>
        </form>

    </div>
  )
}

export default SignUpForm