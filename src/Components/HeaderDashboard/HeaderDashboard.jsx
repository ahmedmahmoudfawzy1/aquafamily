import React from 'react'
import './HeaderDashboard.css'
import {BsFillBagFill  , BsPersonCircle , BsFillBellFill , BsSearch} from 'react-icons/bs'

export default function HeaderDashboard() {
  return (
    <header className='header'>
    <div className='menu-icon'>
        <BsFillBellFill  className='icon'/>
    </div>
    <div className="header__left">
        <BsSearch className='icon' />
    </div>
    <div className="header__right">
        <BsFillBellFill  className='icon'/>
        <BsPersonCircle  className='icon'/>
        <BsFillBagFill  className='icon'/>
    </div>
</header>
  )
}
