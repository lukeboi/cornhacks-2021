import { render } from '@redwoodjs/testing'

import UserProjectListLayout from './UserProjectListLayout'

describe('UserProjectListLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserProjectListLayout />)
    }).not.toThrow()
  })
})
