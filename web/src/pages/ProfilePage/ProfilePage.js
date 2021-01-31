import { Link, routes } from '@redwoodjs/router'
import AddContentLayout from 'web/src/layouts/AddContentLayout/AddContentLayout'
import TimelineLayout from 'web/src/layouts/TimelineLayout/TimelineLayout'
import UserProjectListLayout from 'web/src/layouts/UserProjectListLayout/UserProjectListLayout'
import UserViewLayout from 'src/layouts/UserViewLayout/UserViewLayout'


const ProfilePage = ({ id }) => {
  return (
    <>
      <UserViewLayout>
        <div class="grid grid-cols-5 grid-rows-3 justify-items-auto mt-3">
          <div class="col-start-3 col-end-5 row-start-1 ow-end-2">
            <AddContentLayout/>
          </div>
          <div class="col-start-3 col-end-5 row-start-2 ow-end-4">
            <TimelineLayout/>
          </div>
          <div class="col-start-1 col-end-3">
            <UserProjectListLayout userId={id}/>
          </div>
        </div>
      </UserViewLayout>
    </>
  )
}

export default ProfilePage
