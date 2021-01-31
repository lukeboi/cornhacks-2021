import { Link, routes } from '@redwoodjs/router'
//import { Navabr } from 'src/components/Navbar'
import UserViewLayout from 'src/layouts/UserViewLayout/UserViewLayout'
import AddContentLayout from 'src/layouts/AddContentLayout/AddContentLayout';
import TimelineLayout from 'src/layouts/TimelineLayout/TimelineLayout';

const HomePage = () => {
  return (
    <>
    <AddContentLayout></AddContentLayout>
    <TimelineLayout></TimelineLayout>
    </>
  )
}

export default HomePage
