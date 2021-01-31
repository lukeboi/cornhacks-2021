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
      <div className="m-auto space-y-5 items-center justify-center">
        <h1 className="text-8xl text-center">🚀</h1>
        <h1 className="text-6xl text-center font-bold">Welcome To Rokkit</h1>
        <h2 className="text-2xl text-center font-semibold">A place to do stuff</h2>
        <div className="flex justify-evenly mt-10">
          {/* <div>test</div> */}
          <div>
            <button
              onClick={logIn}
              className="
                font-semibold
                px-3 py-1
                bg-yellow-300
                transition duration-300 ease-in-out
                text-4xl
                shadow
                rounded-lg
                shadow-md">
              Get Started
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LoginPage
