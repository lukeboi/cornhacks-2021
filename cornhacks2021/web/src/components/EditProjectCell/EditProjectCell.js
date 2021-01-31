import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProjectForm from 'src/components/ProjectForm'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: Int!) {
    project: project(id: $id) {
      id
      name
      userId
    }
  }
`
const UPDATE_PROJECT_MUTATION = gql`
  mutation UpdateProjectMutation($id: Int!, $input: UpdateProjectInput!) {
    updateProject(id: $id, input: $input) {
      id
      name
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ project }) => {
  const { addMessage } = useFlash()
  const [updateProject, { loading, error }] = useMutation(
    UPDATE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.projects())
        addMessage('Project updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    updateProject({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Project {project.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProjectForm
          project={project}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
