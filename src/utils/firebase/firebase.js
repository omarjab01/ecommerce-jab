import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyA02T4q5Jd9riuSg26iHIixDfv-YTZKEYA",
    authDomain: "jabmarket-fa46b.firebaseapp.com",
    projectId: "jabmarket-fa46b",
    storageBucket: "jabmarket-fa46b.appspot.com",
    messagingSenderId: "579209182209",
    appId: "1:579209182209:web:630ba7be56cb6fe831d400"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if(!userAuth) return ;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt,
                ...additionalInformation,
            })
        }
        catch(error){
            console.log("errore durante la creazione dell'account")
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return 
    return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return 
    return await signInWithEmailAndPassword(auth, email, password)
}