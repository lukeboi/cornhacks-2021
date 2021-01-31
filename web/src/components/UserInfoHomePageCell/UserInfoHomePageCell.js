export const QUERY = gql`
  query ($id: Int!) {
    user(id: $id) {
      name
      email
    }
  }
`

export const Loading = () => {
  return (
      <div class="mt-3 bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Loading...
              </dd>
            </div>
          </dl>
        </div>
      </div>
  )
}

export const Empty = () => {
  return (
      <div class="mt-3 bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Error: no data on this profile id
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            You shouldn't be seeing this
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Turn back now
              </dd>
            </div>
          </dl>
        </div>
      </div>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ userInfoHomePage }) => {
  return userInfoHomePage.map((user) => 
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {userInfo.name}
        </h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Email
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userInfo.email}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
