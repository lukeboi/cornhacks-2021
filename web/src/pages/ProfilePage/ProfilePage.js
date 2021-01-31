import { Link, routes } from '@redwoodjs/router'
import AddContentLayout from 'web/src/layouts/AddContentLayout/AddContentLayout'
import TimelineLayout from 'web/src/layouts/TimelineLayout/TimelineLayout'
import UserProjectListLayout from 'web/src/layouts/UserProjectListLayout/UserProjectListLayout'
import UserViewLayout from 'src/layouts/UserViewLayout/UserViewLayout'


const ProfilePage = ({ id }) => {
  return (
      <UserViewLayout>
        <div className="grid grid-cols-5 grid-rows-3 justify-items-auto mt-3 h-screen gap-4 content-start">
          <div className="col-start-3 col-end-5 row-start-1 row-end-2">
            <AddContentLayout/>
          </div>
          <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-y-auto">
            <TimelineLayout/>
          </div>
          <div className="col-start-1 col-end-3 row-start-1 row-end-4">
            <UserProjectListLayout userId={id}/>
          </div>
        </div>
      </UserViewLayout>
  )
}

export default ProfilePage
