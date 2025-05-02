import React from 'react'

import { Outlet } from 'react-router'
import Navber from '../components/shared/Navber'

function Root() {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
    </div>
  )
}

export default Root