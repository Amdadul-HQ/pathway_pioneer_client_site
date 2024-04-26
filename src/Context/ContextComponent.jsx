import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)

const ContextComponent = ({children}) => {

    const [user,setUser] = useState();
    const [loading , setLoading] = useState(true)
    const[touristsSpots,setTouristsSpots] = useState([])
    const [country,setCountry] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/country')
    .then(res => res.json())
    .then(data => {
      setCountry(data)
      console.log(data);
    })
        fetch('http://localhost:5000/touristspot')
        .then(res=> res.json())
        .then(data => {
            setTouristsSpots(data)
            console.log(data);
        })
    },[])

    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const logInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (fullName,photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: fullName,
            photoURL:photo
        });
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser => {
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser);
            }
            else{
                setUser(null)
                setLoading(false)
            }
        });
        return () => unSubcribe()
    },[])



    const info ={ createUser , loginUser , logOut , logInWithGoogle , logInWithGitHub , updateUserProfile , user , loading , touristsSpots , country }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;