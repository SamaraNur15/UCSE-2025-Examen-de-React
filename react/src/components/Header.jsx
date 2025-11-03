import React, { useContext, useState } from 'react'
import AuthContext  from '../context/AuthContext.jsx';

export default function Header() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  //const {validateUserName, validatePassword} = useContext(AuthContext);
  
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    //const isUserNameValid = validateUserName(userName);
    //const isPasswordValid = validatePassword(password);
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log("Iniciando sesión...");
  };

  return (
    <>
    <header>
      <div className="title">
        <h1 className="red-text logo-title">TRAILERFLIX</h1>
      </div>
      <div className="login-container">
        <form  id="loginForm" style={{display: "flex"}}>
          <input type="text" value={userName}  onChange={onChangeUserName}id="username" placeholder="Usuario" required />
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            id="password"
            placeholder="Contraseña"
            required
          />
          <button type="submit">Ingresar</button>
        </form>
        <div id="userInfo" style={{display: "flex"}}>
          <span id="userNameDisplay"></span>
          <button onClick={onSubmitForm} id="logoutBtn">Cerrar sesión</button>
        </div>
      </div>
    </header>
    </>
  )
}
