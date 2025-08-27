
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import {auth} from "./firebase";
export const doCreateUserWithEmailAndPassword = async (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
};
export const doSignInWithEmailAndPassword = async (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
};
export const doSignInWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result;
};
export const doUpdateUserProfile = (profile) => {
  return updateProfile(auth.currentUser, profile);
};
export const doSignOut=() =>{
    return auth.signOut();
};

