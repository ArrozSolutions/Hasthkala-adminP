import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminHome = () => {

  const auth = useSelector(state => state.admin)
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth?.authenticate){
      navigate('/admin-login');
    }
  }, [auth?.authenticate])

  useEffect(() => {
    if(auth?.authenticate){
      navigate('/admin-dashboard');
    }
  }, [auth?.authenticate])
  
  return (
    <div>AdminHome</div>
  )
}

export default AdminHome