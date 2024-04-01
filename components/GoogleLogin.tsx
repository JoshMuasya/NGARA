import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const provider = new GoogleAuthProvider()

export const handleSignIn = async () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential?.accessToken

        const user = result.user;

        console.log("Logged in:", user)
        console.log("Token:", token)
    })
    .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
    })
}


