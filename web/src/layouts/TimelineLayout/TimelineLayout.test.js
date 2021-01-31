import { render } from '@redwoodjs/testing'

import TimelineLayout from './TimelineLayout'

describe('TimelineLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimelineLayout />)
    }).not.toThrow()
  })
})
