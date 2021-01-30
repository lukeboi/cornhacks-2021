import { render } from '@redwoodjs/testing'

import UserViewLayout from './UserViewLayout'

describe('UserViewLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserViewLayout />)
    }).not.toThrow()
  })
})
