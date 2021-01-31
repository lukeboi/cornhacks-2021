// import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { routes,Redirect } from '@redwoodjs/router'


const LoginPage = () => {
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()

  if(isAuthenticated) {
    return <Redirect to={routes.home()} />
  }

  return (
    <div className="bg-yellow-200 flex h-screen border-black border-1 container">
      <div className="m-auto space-y-10 items-center justify-center">
        <h1 className="text-8xl text-center">🚀</h1>
        <h1 className="text-6xl text-center font-bold">Welcome To Rokkit</h1>
        <button
          onClick={logIn}
          className="
            font-semibold
            px-3 py-1
            bg-yellow-300
            transition duration-300 ease-in-out
            text-3xl
            shadow-sm
          ">
            Log In
          </button>
      </div>
      <div className="position-absolute top-0 bottom-0 left-0 right-0">
        {/* {isAuthenticated && <p>Logged in as {currentUser.email}</p>}
        {!isAuthenticated && <p>Logged out</p>} */}

      </div>

    </div>
  )
}

export default LoginPage
