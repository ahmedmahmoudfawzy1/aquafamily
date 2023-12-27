import React from 'react'
import './SideBar.css'
import {BsCart3 , BsGrid1X2Fill , BsFillArchiveFill , BsFillGrid3X3GapFill , BsPeopleFill , BsListCheck , BsMenuButtonWideFill , BsFillGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function SideBar() {
  return (
    <aside id='sidebar'>
      <div className='sideBar__title'>
        <div className="sideBr__brand">
          <BsGrid1X2Fill className='icon_header'/> Dashboard
        </div>
        <span className='icon close_icon'>X</span>
      </div>
      <ul className='sidebar__list'>
        <li className='sidebar__list__item'>
            <Link to="#">
            <BsCart3 className='icon'/> Shop
            </Link>
        </li>
        <li className='sidebar__list__item'>
            <Link to="#">
            <BsFillArchiveFill className='icon'/> Products
            </Link>
        </li>
        <li className='sidebar__list__item'>
            <Link to="#">
            <BsFillGrid3X3GapFill className='icon'/> Categries
            </Link>
        </li>
        <li className='sidebar__list__item'>
            <Link to="#">
            <BsPeopleFill className='icon'/> Customers
            </Link>
        </li>
        <li className='sidebar__list__item'>
            <Link to="#">
            <BsListCheck className='icon'/> Inventory
            </Link>
        </li>
        <li className='sidebar__list__item'>
            <Link to="#">
            <BsMenuButtonWideFill className='icon'/> Reports
            </Link>
        </li>
        <li className='sidebar__list__item'>
            <Link to="#">
            <BsFillGearFill className='icon'/> Settings
            </Link>
        </li>
      </ul>
    </aside>
  )
}
