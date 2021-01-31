import { Link, routes } from '@redwoodjs/router'
// import { Navabr } from 'src/components/Navbar'
import UserViewLayout from 'src/layouts/UserViewLayout/UserViewLayout'
import TimelineLayout from 'src/layouts/TimelineLayout/TimelineLayout';
import AddContentLayout from 'src/layouts/AddContentLayout/AddContentLayout';
import UserProjectListLayout from 'src/layouts/UserProjectListLayout/UserProjectListLayout';

const HomePage = () => {
  return (
    <>
      <UserViewLayout></UserViewLayout>
      
      {/* <Navbar></Navbar> */}
    </>
  )
}

export default HomePage
