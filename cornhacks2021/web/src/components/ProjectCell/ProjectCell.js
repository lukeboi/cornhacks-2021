import Project from 'src/components/Project'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: Int!) {
    project: project(id: $id) {
      id
      name
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Project not found</div>

export const Success = ({ project }) => {
  return <Project project={project} />
}
