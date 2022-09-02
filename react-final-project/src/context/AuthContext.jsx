import {createContext, useState} from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) =>{


    const [inputEmail, setInputEmail] = useState("");
    const [inputPass, setInputPass] = useState("");


    const data={inputEmail, inputPass, setInputEmail, setInputPass};


    return <AuthContext.Provider value={ data }>
        {children}
    </AuthContext.Provider>
}

export {AuthProvider};

export default AuthContext;