import { Link, routes } from '@redwoodjs/router'

import Projects from 'src/components/Projects'

export const QUERY = gql`
  query PROJECTS {
    projects {
      id
      name
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No projects yet. '}
      <Link to={routes.newProject()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ projects }) => {
  return <Projects projects={projects} />
}
