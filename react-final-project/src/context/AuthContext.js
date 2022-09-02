import { createContext } from "react";

/*create the context */
const AuthContext = createContext();

/*container that wraps the values needed*/
const AuthProvider = ({children} ) =>{

    const data = {};
     //provider shares the data, value contains the data we'll share
    return <AuthContext.Provider value={data} > {children} </AuthContext.Provider>;

}

export {AuthProvider};
export default AuthContext;