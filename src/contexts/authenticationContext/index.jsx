import React, { useEffect, useState, useContext } from "react";
import { auth } from "../../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, initializeUser);
        return unsub;

        async function initializeUser(user){
            if(user){
                setUser({...user})
                setUserLoggedIn(true);
            }else{
                setUser(null);
                setUserLoggedIn(false);
            }
            setLoading(false);
        }

        const val = {
            user,
            userLoggedIn,
            loading
        }
    })
}

export function useAuth() {
    return useContext(AuthContext);
}