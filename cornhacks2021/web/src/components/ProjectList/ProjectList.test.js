import { render } from '@redwoodjs/testing'

import ProjectList from './ProjectList'

describe('ProjectList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectList />)
    }).not.toThrow()
  })
})
