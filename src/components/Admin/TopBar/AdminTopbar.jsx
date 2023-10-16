import React from 'react'
import { BiMenu } from 'react-icons/bi'
import Img1 from '../../../assets/blog1.jpg'
import './AdminTopbar.css';
const AdminTopbar = () => {
  return (
    <div className='topbar min-h-20 max-h-20 w-full flex  relative justify-end items-center border-b'>
        <div className='pr-5'>
            <div className='w-9 h-9 cursor-pointer'><img className='h-full w-full rounded-full' src={localStorage.getItem('admin_avatar')} alt="" /></div>
        </div>
    </div>
  )
}

export default AdminTopbar