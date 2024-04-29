import React from 'react'
import { Outlet } from 'react-router-dom'
import BarSide from './BarSide'


const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      
      <BarSide/>
      <Outlet />
    </div>
  )
}

export default DashboardLayout