import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext =createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createRegister =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth ,currentUser =>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }

        
    },[])
    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    

    const authInfo={
        user,
        createRegister,
        signIn,
        logout,
        setUser

    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;