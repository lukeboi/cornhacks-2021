import ProjectsLayout from 'src/layouts/ProjectsLayout'
import EditProjectCell from 'src/components/EditProjectCell'

const EditProjectPage = ({ id }) => {
  return (
    <ProjectsLayout>
      <EditProjectCell id={id} />
    </ProjectsLayout>
  )
}

export default EditProjectPage
