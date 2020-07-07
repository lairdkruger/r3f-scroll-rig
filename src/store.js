import { createRef } from 'react'

// sections: how many block sections there are
// pages: length of the scroll area (1 = 1vh)
const state = {
  sections: 3,
  pages: 3,
  zoom: 1,
  top: createRef()
}

export default state
