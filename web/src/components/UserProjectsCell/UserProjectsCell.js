export const QUERY = gql`
  query ($id: Int!){
    user(id:$id){
      projects{
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  console.log({user});
  return user.projects.map(project =>
    <article key={project.id}>
      <div className="mt-3 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {project.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            placeholder
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {project.bodyText}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
