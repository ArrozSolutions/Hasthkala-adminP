import React from 'react'
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar';
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar';
import { BiDownload, BiEdit, BiTrash } from 'react-icons/bi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AdminAllOrders, AdminDeleteRecentOrders, AdminRecentOrders } from '../../actions/Admin/AdminAction';
import { useNavigate } from 'react-router-dom';
const AdminOrders = () => {

  const navigate = useNavigate();
  const [orders, setOrders] = useState(null);
  const [ordersCount, setOrdersCount] = useState(null);
  const allorders = useSelector(state => state.admin.allorders)
  const allorderscount = useSelector(state => state.admin.totalorders)

  const auth = useSelector(state => state.admin);
  const authenticate = localStorage.getItem('admin_authenticate');
  useEffect(() => {
    if(!authenticate){
      navigate('/admin-login');
    }
  }, [authenticate])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AdminAllOrders());
  }, [dispatch, AdminAllOrders])

  useEffect(() => {
    if (allorders) {
      setOrders(allorders);
    }
    if (allorderscount) {
      setOrdersCount(allorderscount)
    }
  }, [allorders, allorderscount])

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const deleteOrder = (oid) => {
    dispatch(AdminDeleteRecentOrders(oid)).then(() => {
      dispatch(AdminRecentOrders());
    })
  }
  return (
    <>
      <div className='flex w-full h-screen'>
        <AdminSidebar name={'orders'} />
        <div className='flex flex-col w-full h-screen '>
          <AdminTopbar />
          <div className='flex flex-col pt-5 pl-5 pr-10'>
            <h1 className='font-dmsans text-lg font-semibold'>Orders</h1>
            <div className='w-full border rounded-lg mt-5 h-20 items-center flex pl-4 pt-4 pb-4 justify-between pr-5'>
              <input type="text" placeholder='Search by Customer Name' className='font-dmsans rounded-md pl-3 h-12 border border-[#1a1a1d08] bg-[#1a1a1d12] text-sm w-[360px]' />
              <select name="" className='rounded-md pl-3 h-12 border font-dmsans border-[#1a1a1d08] bg-[#1a1a1d12] text-sm w-[360px]' id="">
                <option value="" hidden defaultChecked={true}>Status</option>
                <option value="">Delivered</option>
                <option value="">Pending</option>
                <option value="">Processing</option>
              </select>
              <button className=' bg-darkred  h-full w-[360px] rounded-md flex justify-center items-center text-sm text-white font-dmsans'>Download All Order <span className='ml-2'><BiDownload size={18} /></span></button>
            </div>
            <div className='flex-col mt-5'>

              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 p-4 w-20">
                        <span className='flex w-[70px]'>Invoice No</span>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Order Time
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Customer Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Method
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders?.map((order, key) => (

                        <tr key={key} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            10101
                          </td>
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-col">
                            <span>
                              {order?.createdAt.split('T')[0].split('-')[2]},
                              {months[(parseInt(order?.createdAt.split('T')[0].split('-')[1]) + 9) - 10]}&nbsp;&nbsp;
                              {order?.createdAt.split('T')[0].split('-')[0]}
                            </span>
                            <span className="text-xs mt-1 text-[#787878]">
                              {order?.createdAt.split("T")[1].split(':')[0]}:
                              {order?.createdAt.split("T")[1].split(':')[1]}:
                              {order?.createdAt.split("T")[1].split(':')[2].split('.')[0]}
                            </span>
                          </th>
                          <td class="px-6 py-4">
                            {order?.uid?.fullname}
                          </td>
                          <td class="px-6 py-4">
                            {order?.paymentmode}
                          </td>
                          <td class="px-6 py-4">
                            ₹{order?.totalprice}
                          </td>
                          <td class="px-6 py-4">
                            <span className='bg-[#00b5186e] rounded-xl px-2 font-semibold text-[#218a2f]'>
                              {order?.status}
                            </span>
                          </td>
                          <td class="px-4 py-4 flex">
                            <span className='mb-2 cursor-pointer hover:scale-110 duration-300 transition-all'><BiEdit size={20} className='mr-2' color='blue' /></span>
                            <span className='mb-2 cursor-pointer hover:scale-110 duration-300 transition-all' onClick={() => {
                              deleteOrder(order?._id);
                            }}><BiTrash size={20} color='darkred' /></span>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
                <nav class="flex items-center justify-between pt-4 pl-3 pr-3 mb-3" aria-label="Table navigation">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">{ordersCount}</span></span>
                  <ul class="inline-flex -space-x-px text-sm h-8">
                    <li>
                      <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                      <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminOrders