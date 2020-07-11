import { createRef } from 'react'

// sections: how many block sections there are
// pages: length of the scroll area (1 = 1vh)
const state = {
  sections: 5,
  pages: 5,
  zoom: 1,
  top: createRef()
}

export default state
