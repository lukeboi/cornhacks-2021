import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'

describe('projects', () => {
  scenario('returns all projects', async (scenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async (scenario) => {
    const result = await createProject({
      input: {
        name: 'String',
        body: 'String',
        postId: scenario.project.one.post.id,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a project', async (scenario) => {
    const original = await project({ id: scenario.project.one.id })
    const result = await updateProject({
      id: original.id,
      input: { name: 'String1129246' },
    })

    expect(result.name).toEqual('String1129246')
  })

  scenario('deletes a project', async (scenario) => {
    const original = await deleteProject({ id: scenario.project.one.id })
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
