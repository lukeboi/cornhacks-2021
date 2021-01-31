import { Link, routes, Redirect } from '@redwoodjs/router'
// import { Navabr } from 'src/components/Navbar'
import { useAuth } from '@redwoodjs/auth'
import UserViewLayout from 'src/layouts/UserViewLayout/UserViewLayout'
import TimelineLayout from 'src/layouts/TimelineLayout/TimelineLayout';
import AddContentLayout from 'src/layouts/AddContentLayout/AddContentLayout';
import UserProjectListLayout from 'src/layouts/UserProjectListLayout/UserProjectListLayout';

const HomePage = () => {
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()

  if(isAuthenticated) {
    return <Redirect to={routes.profile()} />
  }

  return (
    <>
      <UserViewLayout></UserViewLayout>

      {/* <Navbar></Navbar> */}
    </>
  )
}

export default HomePage
