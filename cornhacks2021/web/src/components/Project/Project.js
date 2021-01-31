import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/ProjectsCell'

const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProjectMutation($id: Int!) {
    deleteProject(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Project = ({ project }) => {
  const { addMessage } = useFlash()
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      navigate(routes.projects())
      addMessage('Project deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete project ' + id + '?')) {
      deleteProject({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Project {project.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{project.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{project.name}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{project.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProject({ id: project.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(project.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Project
