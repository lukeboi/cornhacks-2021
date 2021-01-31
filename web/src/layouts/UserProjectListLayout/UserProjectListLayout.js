import UserInfoHomePageCell from 'web/src/components/UserInfoHomePageCell/UserInfoHomePageCell'
import UserProjectsCell from 'web/src/components/UserProjectsCell/UserProjectsCell'

const UserProjectListLayout = ({ userId }) => {
  return (
    <div className=" grid grid-rows-6 justify-items-auto grid-cols-3">
      <div className="row-start-1 row-end-3 col-start-1 col-end-4">
        <UserInfoHomePageCell id={parseInt(userId)} />
      </div>
      <div className="row-start-3 row-end-6 col-start-1 col-end-4 overflow-y-auto">
        <UserProjectsCell id={parseInt(userId)}/>
      </div>
      <div className="row-start-6 row-end-7 col-start-3 col-end-4">
        <form>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create Project
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserProjectListLayout
