// Import the functions from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, 
    signInWithPopup, getIdToken, signOut, isSignInWithEmailLink, signInWithEmailLink
} from "firebase/auth";

// Import Firebase configs
import firebaseConfig from "./config";

let app;
let auth;
let providers;
try {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    console.log("Firebase connection successful!");
    // Initialize Firebase Authentication and get a reference to the service
    auth = getAuth(app);

    providers = {
        googleAuthProvider: new GoogleAuthProvider()
    };
} catch (error) {
    console.error("Error initializing Firebase:", error);
}

// Export the necessary items
export { app, auth, providers, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getIdToken, signOut, RecaptchaVerifier,
    signInWithPhoneNumber, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink
};
