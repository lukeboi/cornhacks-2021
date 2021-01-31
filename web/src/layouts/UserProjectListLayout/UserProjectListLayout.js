import UserInfoHomePageCell from 'web/src/components/UserInfoHomePageCell/UserInfoHomePageCell'

const UserProjectListLayout = ({ userId }) => {
  return (
    <div class="mt-3 grid grid-rows-6 justify-items-auto">
      <div class="row-start-1 row-end-3">
        <UserInfoHomePageCell id={parseInt(userId)} />
      </div>
      <div class="row-start-3 row-end-6">

      </div>
      <div class="row-start-6 row-end-7">
        <form>
          <button type="submit" onclick="placeholder" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create Project
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserProjectListLayout
