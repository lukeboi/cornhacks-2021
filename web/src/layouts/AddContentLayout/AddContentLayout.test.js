import { render } from '@redwoodjs/testing'

import AddContentLayout from './AddContentLayout'

describe('AddContentLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddContentLayout />)
    }).not.toThrow()
  })
})
