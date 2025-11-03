import { createContext, useState } from "react";

const AuthContext = createContext();



const AuthProvider = ({children}) =>{
    const fetchUsers = async () => {
      try {
        const response = await fetch('/data/usuarios.json');
        const data = await response.json();
        return data.users;
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        return [];
      }
    };


    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const validateUserName = (userName) => {
        const withoutSpaces = userName.trim();
        if (withoutSpaces.length > 2) {
            setUserName(withoutSpaces);
            return true;
        } else {
        return false;
        }
    }   

    
    const validatePassword = (password) => {
        const withoutSpaces = password.trim();
        const passwordAsArray = withoutSpaces.split("");
        
        const hasNumber = passwordAsArray.some((character) => {
            // Si el valor es NaN, no es un numero
            if (isNaN(character)) {
            return false;
            } else {
            return true;
            }
        });
        
        if (withoutSpaces.length > 5 && hasNumber) {
            setPassword(password);
        } 
        else {
            return false;
        }

    };

    return(
        <AuthContext.Provider value={{validateUserName, validatePassword, }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
