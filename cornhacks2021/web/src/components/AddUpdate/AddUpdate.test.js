import { render } from '@redwoodjs/testing'

import AddUpdate from './AddUpdate'

describe('AddUpdate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddUpdate />)
    }).not.toThrow()
  })
})
