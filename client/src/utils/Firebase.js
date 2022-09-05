import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-g6dnrOSiepPUgdAdoV5ofbNS0Y-lHr8",
    authDomain: "video-call-app-64d55.firebaseapp.com",
    projectId: "video-call-app-64d55",
    storageBucket: "video-call-app-64d55.appspot.com",
    messagingSenderId: "1066065416452",
    appId: "1:1066065416452:web:52d1e107347316b9168051"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const Provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, Provider).then((result) => {
        const name = result.user.displayName;
        const profilepic = result.user.photoURL;
        localStorage.setItem("name", name)
        localStorage.setItem("profilepic", profilepic)
        return true
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

}