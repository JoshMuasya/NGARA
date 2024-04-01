'use server'

// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { collection, doc, setDoc } from "firebase/firestore"
// import { auth, db } from "./firebase"

export async function signup(formData: FormData) {
    // try {
    //     const email = formData.get('email')
    //     const password = formData.get('password')
    //     const username = formData.get('username')
    //     const phonenumber = formData.get('phonenumber')

    //     const userCredential = await createUserWithEmailAndPassword(auth, email as string, password as string)
    //     const user = userCredential.user

    //     await setDoc(doc(collection(db, "users"), user.uid), {
    //         email: email,
    //         role: "admin",
    //         username: username,
    //         phonenumber: phonenumber,
    //     })

    //     return 'Success'

    // } catch (error) {
    //     console.log(error)
    //     if (error) {
    //         console.log(error)
    //         return 'Something went wrong.'
    //     }
    //     throw error
    // }
}