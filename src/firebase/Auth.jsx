import {auth} from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const handleSignOut = () => {return(auth.signOut())};

export const handleCreateUserWithEmailAndPassword = async (email, password) => {return(createUserWithEmailAndPassword(auth, email, password))};
export const handleSignInWithEmailAndPassword = (email, password) => {return(signInWithEmailAndPassword(auth, email, password))};

export const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    return res;
};