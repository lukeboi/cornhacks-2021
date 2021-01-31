import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProjectForm from 'src/components/ProjectForm'

import { QUERY } from 'src/components/ProjectsCell'

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProjectMutation($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
    }
  }
`

const NewProject = () => {
  const { addMessage } = useFlash()
  const [createProject, { loading, error }] = useMutation(
    CREATE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.projects())
        addMessage('Project created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    createProject({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Project</h2>
      </header>
      <div className="rw-segment-main">
        <ProjectForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProject
