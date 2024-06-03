import { createContext, useContext,useState } from "react";


export const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
})
export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = (props) => {
    const [user,setUser]=useState({});

        const login=(userDetail) => {
        setUser(userDetail)
    }
<<<<<<< HEAD
    const logout=() => {
        setUser("")
    }
    return (

        <AuthContext.Provider value={{user,login,logout}}>
=======
    return (

        <AuthContext.Provider value={{user,login}}>
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider};

