import { render } from '@redwoodjs/testing'

import AddPost from './AddPost'

describe('AddPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddPost />)
    }).not.toThrow()
  })
})
