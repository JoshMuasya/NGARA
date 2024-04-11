import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "./firebase"

const provider = new GoogleAuthProvider()

export async function userlogin() {
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
    .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result)

        const token = credentials?.accessToken

        const user = result.user
        const username = user.displayName

        resolve({ username })
    }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)

        reject({ errorCode, errorMessage, email, credential })
    })
    })
}