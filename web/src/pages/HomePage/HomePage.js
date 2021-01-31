import { Link, routes } from '@redwoodjs/router'
// import { Navabr } from 'src/components/Navbar'
import UserViewLayout from 'src/layouts/UserViewLayout/UserViewLayout'
import TimelineLayout from 'src/layouts/TimelineLayout/TimelineLayout';
import AddContentLayout from 'src/layouts/AddContentLayout/AddContentLayout';

const HomePage = () => {
  return (
    <>
      <UserViewLayout></UserViewLayout>
      <div class="mt-3 grid grid-cols-3 justify-items-auto">
        <div class="col-start-2 col-span-1">
          <AddContentLayout></AddContentLayout>
          <TimelineLayout></TimelineLayout>
        </div>
        <div class="col-start-1 col-span-1"> 
        
        </div>
      </div>
      {/* <Navbar></Navbar> */}
    </>
  )
}

export default HomePage
