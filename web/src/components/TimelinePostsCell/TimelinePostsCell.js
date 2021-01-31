import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Posts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      bodyText
      createdAt
    }
  }
`

export const Loading = () => {
  return (
      <div className="mt-3 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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
      <div className="mt-3 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            No updates yet...
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            But you could change that...
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Make a new post and let people know what you've been up to!
              </dd>
            </div>
          </dl>
        </div>
      </div>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

function getTimeDifferenceMessage(time){
  var difference = (new Date()).getTime() - time
  difference /= 1000;
  if(difference < 60){
    difference = Math.round(difference);
    return 'Created '+difference+' second'+(difference === 1 ? '' : 's')+' ago';
  }
  difference = Math.floor(difference / 60)
  if(difference < 60){
    return 'Created '+difference+' minute'+(difference === 1 ? '' : 's')+' ago';
  }
  difference = Math.floor(difference / 60)
  if(difference < 24){
    return 'Created '+difference+' hour'+(difference === 1 ? '' : 's')+' ago';
  }
  difference = Math.floor(difference / 24)
  return 'Created '+difference+' day'+(difference === 1 ? '' : 's')+' ago';
}

export const Success = ({ posts }) => {
  console.log({posts});
  return posts.map(post =>
    <article key={post.id}>
      <div className="mt-3 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {post.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {getTimeDifferenceMessage(new Date(post.createdAt))}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {post.bodyText}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
