import React from 'react'
import './Dashboard.css'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard'
import SideBar from '../SideBarDash/SideBar'
import HomeDashBoard from '../HomeDashBoard/HomeDashBoard'

export default function Dashboard() {
  return (
    <div className='Container'>
        <HeaderDashboard />
        <SideBar />
        <HomeDashBoard />
    </div>
  )
}
