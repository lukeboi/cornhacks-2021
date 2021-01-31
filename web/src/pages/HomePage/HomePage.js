import { Link, routes } from '@redwoodjs/router'
// import { Navabr } from 'src/components/Navbar'
import UserViewLayout from 'src/layouts/UserViewLayout/UserViewLayout'

const HomePage = () => {
  return (
    <>
      <UserViewLayout></UserViewLayout>
      <h1>Rokkit Home</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      {/* <Navbar></Navbar> */}
    </>
  )
}

export default HomePage
