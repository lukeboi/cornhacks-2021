export const QUERY = gql`
  query TimelinePostsQuery {
    timelinePosts {
      post(projectID: `+projectID+`) {
        id
        bodyText
        createdAt
        project {
          name
        }
        projectID
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ timelinePosts }) => {
  return posts.map((post) => (
    <article key={post.id}>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {post.project.name}
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            {post.createdAt}
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {post.bodyText}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  ))
}
