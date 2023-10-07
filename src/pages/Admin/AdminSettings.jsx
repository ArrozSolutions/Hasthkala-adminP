import React, { useEffect } from 'react'
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar';
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminSettings = () => {

  const navigate = useNavigate();
  const auth = useSelector(state => state.admin);
  useEffect(() => {
    if (!auth?.authenticate) {
      navigate('/admin-login')
    }
  }, [auth?.authenticate])

  return (
    <>
      <div className='flex w-full h-screen'>
        <AdminSidebar name={'settings'} />
        <div className='flex flex-col w-full h-screen '>
          <AdminTopbar />
        </div>
      </div>
    </>
  )
}

export default AdminSettings