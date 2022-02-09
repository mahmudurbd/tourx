import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

// initialize firebase
initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
     const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Sign in with google
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider)
        /* .then(result => {
            console.log(result.user);
        })
        .catch((error) => {
            console.log(error.message);
        }) */
    }

    // Log out
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(setIsLoading(false))
    }

    // Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false); 
          });
    },[])

    return {
        user,
        googleSignIn,
        logOut,
        isLoading,
        setIsLoading
    }
}
export default useFirebase;