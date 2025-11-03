const URL_USUARIOS = '../data/usuarios.json'
const loginForm = document.getElementById('loginForm')
const userInfo = document.getElementById('userInfo')
const userNameDisplay = document.getElementById('userNameDisplay')
const logoutBtn = document.getElementById('logoutBtn')

// Mostrar el nombre de usuario almacenado al cargar la página
const currentUser = window.localStorage.getItem('usuario')
if (currentUser) {
  mostrarUsuario(currentUser)
} else {
  loginForm.style.display = 'block'
}

// Función para validar el login
const validarUsuario = async (username, password) => {
  try {
    const response = await fetch(URL_USUARIOS)
    const datos = await response.json()
    return datos.users.find(user => user.username === username && user.password === password)
  } catch (error) {
    console.error('Error al cargar el archivo de usuarios:', error)
    return null
  }
}

// Manejar el envío del formulario
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  const usuarioValido = await validarUsuario(username, password)
  if (usuarioValido) {
    window.localStorage.setItem('usuario', username)
    mostrarUsuario(username)
  } else {
    window.alert('Usuario o contraseña incorrectos')
  }
})

// Mostrar el nombre de usuario y el botón de cerrar sesión
function mostrarUsuario (username) {
  loginForm.style.display = 'none'
  userInfo.style.display = 'flex'
  userNameDisplay.textContent = `Bienvenido, ${username}`
}

// Manejar el cierre de sesión
logoutBtn.addEventListener('click', () => {
  window.localStorage.removeItem('usuario')
  userInfo.style.display = 'none'
  loginForm.style.display = 'block'
})
