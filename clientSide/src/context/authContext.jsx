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
    const logout=() => {
        setUser("")
    }
    return (

        <AuthContext.Provider value={{user,login,logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider};

