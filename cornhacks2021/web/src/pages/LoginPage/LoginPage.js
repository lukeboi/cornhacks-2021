// import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'


const LoginPage = () => {
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()

  return (
    <>
      <h1>LoginPage</h1>
      {isAuthenticated && <p>Logged in as {currentUser.email}</p>}
      {!isAuthenticated && <p>Logged out</p>}
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </>
  )
}

export default LoginPage
