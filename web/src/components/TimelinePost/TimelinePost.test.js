import { render } from '@redwoodjs/testing'

import TimelinePost from './TimelinePost'

describe('TimelinePost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimelinePost />)
    }).not.toThrow()
  })
})
