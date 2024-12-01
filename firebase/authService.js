import {auth, signInWithEmailAndPassword, ConfirmationResult, createUserWithEmailAndPassword, UserCredential, 
    signInWithPopup, providers, signOut, RecaptchaVerifier, signInWithPhoneNumber } from './firebase';

async function sendOTP(number, recaptchaVerifier){
    try{
        const confirmationResult = await signInWithPhoneNumber(auth, number, recaptchaVerifier);
        return confirmationResult;
    }catch(error){
        console.log(error);
        throw error;  
    }
}

async function verifyOTP(code, confirmationResult){
    try{
        // confirm the OTP code
        const userCredential = await confirmationResult.confirm(code);

        // access the user information from the userCredential if needed
        const user = userCredential.user;
        
        // return user information or perform additional actions if necessary
        return user;
    }catch(error){
        console.log(error);
        throw error;  
    }
}

async function signInUsingEmailAndPassword(email, password){
    try{
        // call the signInWithEmailAndPassword function from firebase to login the user
        const loginUser = await signInWithEmailAndPassword(auth, email, password);
        return loginUser;
    }catch(error){
        console.error('Error signing in:', error);
        throw error;
    }
}

async function signInUsingGoogle(){
    try{
        const googleLoginResult = await signInWithPopup(auth, providers.googleAuthProvider);
        // get Google Access Token to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(googleLoginResult);
        // const token = credential?.accessToken;
        // signed-in user info
        const user = googleLoginResult?.user;
        console.log("user signed in successfully");
        return user;
    }catch(error){
        console.error('Error signing in:', error);
        throw error;
    }
}

async function signUpUsingEmailPassword(email, password){
    try{
        // call the Firebase function to create new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    }catch(error){
        console.error('Error signing up:', error);
        throw error;
    }
}

async function signOutFromFirebaseAuth(){
    try{
        await signOut(auth);
        return true;
    }catch(error){
        console.log("Signout error", error);  
        return false;
    }
}

async function getSignedInUser(){
    const user = auth.currentUser;
    return user;
}

export default {signInUsingEmailAndPassword, signInUsingGoogle, signUpUsingEmailPassword, signOutFromFirebaseAuth, sendOTP, verifyOTP, getSignedInUser};
