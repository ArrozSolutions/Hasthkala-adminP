import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar';
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar';
import { BiCart, BiCheck, BiCoinStack, BiEdit, BiLogoStackOverflow, BiRotateRight, BiSolidTruck, BiTrash } from 'react-icons/bi';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { Chart } from 'react-charts'
import ReactApexCharts from 'react-apexcharts';
import { AdminAllOrders, AdminDeleteRecentOrders, AdminRecentOrders } from '../../actions/Admin/AdminAction';
import { useState } from 'react';

const AdminDashboard = () => {


  const [recentorders, setRecentOrders] = useState(null);
  const [ordersCount, setOrdersCount] = useState(null);
  const orders = useSelector(state => state.admin.recentorders);
  const allorderscount = useSelector(state => state.admin.totalorders);

  const auth = useSelector(state => state.admin);
  useEffect(() => {
    if (!auth?.authenticate) {
      navigate('/admin-login')
    }
  }, [auth?.authenticate])

  useEffect(() => {
    if (orders) {
      setRecentOrders(orders);
    }
    if (allorderscount) {
      setOrdersCount(allorderscount);
    }
  }, [orders, allorderscount])


  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        outerWidth: 40,
        innerWidth: 40,
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
        ],
        borderWidth: 1,
      },
    ],
  };


  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  const series = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AdminRecentOrders());
  }, [dispatch, AdminRecentOrders])

  useEffect(() => {
    dispatch(AdminAllOrders());
  }, [dispatch, AdminRecentOrders])


  const deleteRecentOrder = (oid) => {
    dispatch(AdminDeleteRecentOrders(oid)).then(() => {
      dispatch(AdminRecentOrders());
    })
  }

  return (
    <>
      <div className='flex w-full h-screen'>
        <AdminSidebar name={'dashboard'} />
        <div className='flex flex-col w-full h-screen '>
          <AdminTopbar />
          <div className='pt-5 pl-5 pr-5'>
            <h1 className='font-dmsans text-md '>Dashboard Overview</h1>
            <div className='flex justify-between mt-5'>
              <div className='pt-5 flex flex-col w-[300px] rounded-xl h-[190px] bg-[#36b8cf] items-center text-white'>
                <BiCoinStack size={45} />
                <p className='font-semibold mt-2'>Today Orders</p>
                <p className='text-2xl font-semibold mt-2'>₹0.00</p>
              </div>
              <div className='pt-5 flex flex-col w-[300px] rounded-xl h-[190px] bg-[#cf7b36] items-center text-white'>
                <BiCoinStack size={45} />
                <p className='font-semibold mt-2'>Yesterday Orders</p>
                <p className='text-2xl font-semibold mt-2'>₹0.00</p>
              </div>
              <div className='pt-5 flex flex-col w-[300px] rounded-xl h-[190px] bg-[#364dcf] items-center text-white'>
                <BiCoinStack size={45} />
                <p className='font-semibold mt-2'>This Month</p>
                <p className='text-2xl font-semibold mt-2'>₹0.00</p>
              </div>
              <div className='pt-5 flex flex-col w-[300px] rounded-xl h-[190px] bg-[#36cf45] items-center text-white'>
                <BiCoinStack size={45} />
                <p className='font-semibold mt-2'>All-Time Sales</p>
                <p className='text-2xl font-semibold mt-2'>₹0.00</p>
              </div>
            </div>
            <div className='flex justify-between mt-8'>
              <div className='flex  w-[300px] rounded-xl pl-4 h-[75px] border  items-center '>
                <div className='w-12 h-12 flex justify-center items-center rounded-full bg-[#2424be37] mr-4'>
                  <BiCart size={25} />
                </div>
                <div className='flex flex-col justify-center h-full'>
                  <p className='text-sm font-dmsans'>Total Orders</p>
                  <p className='text-2xl font-bold text-[#1a1a1d]'>{ordersCount}</p>
                </div>
              </div>
              <div className='flex  w-[300px] rounded-xl pl-4 h-[75px] border  items-center '>
                <div className='w-12 h-12 flex justify-center items-center rounded-full bg-[#2424be37] mr-4'>
                  <BiRotateRight size={25} />
                </div>
                <div className='flex flex-col justify-center h-full'>
                  <p className='text-sm font-dmsans'>Orders Pending</p>
                  <p className='text-2xl font-bold text-[#1a1a1d]'>00</p>
                </div>
              </div>
              <div className='flex  w-[300px] rounded-xl pl-4 h-[75px] border  items-center '>
                <div className='w-12 h-12 flex justify-center items-center rounded-full bg-[#2424be37] mr-4'>
                  <BiSolidTruck size={25} />
                </div>
                <div className='flex flex-col justify-center h-full'>
                  <p className='text-sm font-dmsans'>Orders Processing</p>
                  <p className='text-2xl font-bold text-[#1a1a1d]'>00</p>
                </div>
              </div>
              <div className='flex  w-[300px] rounded-xl pl-4 h-[75px] border  items-center '>
                <div className='w-12 h-12 flex justify-center items-center rounded-full bg-[#2424be37] mr-4'>
                  <BiCheck size={25} />
                </div>
                <div className='flex flex-col justify-center h-full'>
                  <p className='text-sm font-dmsans'>Orders Delivered</p>
                  <p className='text-2xl font-bold text-[#1a1a1d]'>00</p>
                </div>
              </div>
            </div>


            <div className='flex justify-between items-center mt-8'>
              <div className='w-[611px] rounded-xl h-[450px] border flex flex-col  items-center pt-5 pl-5'>
                <p className='font-dmsans text-lg w-full flex mb-10'>Weekly Sales</p>
                <div className='w-full p-5 mb-5'>
                  <ReactApexCharts options={options} series={series} type='line' />
                </div>
              </div>
              <div className='w-[611px] rounded-xl h-[450px] border flex flex-col  items-center pt-5 pl-5'>
                <p className='font-dmsans text-lg w-full flex mb-10'>Best Selling Products</p>
                <div >
                  <Doughnut data={data} />
                </div>
              </div>
            </div>


            <div className='flex flex-col mt-5'>
              <h1 className='font-dmsans text-lg'>Recent Orders</h1>
              {/* RECENT ORDERS TABLE  */}
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Invoice No
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Order Time
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Customer name
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {recentorders?.map((order, key) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          1010
                        </th>
                        <td class="px-6 py-4 flex">
                          <span>{order?.createdAt.split("T")[0].split("-")[2]}</span>
                          <span className='w-2'></span>
                          <span>{months[(parseInt(order?.createdAt.split("T")[0].split('-')[1]) + 9) - 10]}</span>

                        </td>
                        <td class="px-6 py-4">
                          {order?.uid?.fullname}
                        </td>
                        <td class="px-6 py-4 font-semibold text-black">
                          {order?.paymentmode}
                        </td>
                        <td class="px-6 py-4  font-semibold text-black">
                          ₹{order?.totalprice}
                        </td>
                        <td class="px-4 py-4">
                          <span className={`${order?.status == 'Delivered' ? 'bg-[#00b5186e]' : ''} ${order?.status == 'Pending' ? 'bg-[#cccf17b1]' : ''} rounded-xl px-2 font-semibold text-[#000000]`}>
                            {order?.status}
                          </span>
                        </td>
                        <td class="px-4 py-4 flex">
                          <span className='mb-2 cursor-pointer hover:scale-110 duration-300 transition-all'><BiEdit size={20} className='mr-2' color='blue' /></span>
                          <span className='mb-2 cursor-pointer hover:scale-110 duration-300 transition-all' onClick={() => {
                            deleteRecentOrder(order?._id);
                          }}><BiTrash size={20} color='darkred' /></span>
                        </td>

                      </tr>
                    ))

                    }


                  </tbody>
                </table>
              </div>
              <br />
              <br />
              {/* RECENT ORDERS TABLE  */}

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard