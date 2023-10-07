import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/logo.png'
import { BiGridAlt, BiListUl, BiGroup, BiCompass, BiSolidInbox, BiUser, BiBullseye, BiLogOut } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai'
import { useDispatch } from 'react-redux';

const AdminSidebar = ({ name,show }) => {
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSignOut = () => {
    }

    const handleDropDown = () => {
        setDropdown(!dropdown);
    }



    return (
        <div className={`${show?'hidden':'block'} relative w-[305px] transition-all duration-200`}>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r ">
                    <ul class="space-y-2 font-medium">
                        <div className='w-full pl-2 pr-7 pb-5 pt-4'>
                            <li className='flex items-center text-red-500 font-alegreya text-xl'>
                                <div className='w-16 h-16 mr-2'><img src={Logo} className='h-full w-full' alt="" /></div>
                                <div>HasthKala</div>
                            </li>
                        </div>
                        <Link to={'/admin-dashboard'}><li className='relative pl-3'>
                            <div className={`${name === 'dashboard' ? 'block' : 'hidden'} absolute bg-darkred w-1 h-full left-0`}></div>
                            <p class={`flex items-center p-2 ${name == 'dashboard' ? 'text-darkred' : 'text-gray-700'} dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group `}>
                                <BiGridAlt size={20} />
                                <span class="ml-3 ">Dashboard</span>
                            </p>
                        </li></Link>
                        <li className='relative pl-3'>
                            <div className={`${name === 'catalog' ? 'block' : 'hidden'} absolute bg-darkred w-1 h-full left-0`}></div>
                            <button onClick={handleDropDown} type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <p class={`flex items-center justify-between ${name == 'catalog' ? 'text-darkred' : 'text-gray-700'} rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${name === 'catalog' ? 'border-b-2' : ''}  border-darkred w-full pr-8`}>
                                    <div className='flex'>
                                        <BiListUl size={22} />
                                        <span class="flex-1 ml-3 text-left whitespace-nowrap" >Catalog</span>
                                    </div>
                                    <div><AiOutlineDown size={14} className='w-5 scale-x-110 font-semibold'/></div>
                                </p>
                            </button>
                            <ul id="dropdown-example" class={`${dropdown ? 'block' : 'hidden'} py-2 space-y-2`}>
                                <Link to={'/admin-products'}><li>
                                    <p class={`flex items-center w-full p-2 ${name == 'products' ? 'text-darkred' : 'text-gray-700'} transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Products</p>
                                </li></Link>
                                <Link to={'/admin-categories'}><li>
                                    <p class={`flex items-center w-full p-2  ${name == 'categories' ? 'text-darkred' : 'text-gray-700'} transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Category</p>
                                </li></Link>
                                <Link><li>
                                    <p class={`flex items-center w-full p-2  ${name == 'coupons' ? 'text-darkred' : 'text-gray-700'} transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Coupons</p>
                                </li></Link>
                            </ul>
                        </li>
                        <Link to={'/admin-customers'}><li className='relative pl-3 flex '>
                            <div className={`${name === 'customers' ? 'block' : 'hidden'} absolute bg-darkred w-1 h-full left-0`}></div>
                            <p class={`flex items-center p-2 ${name == 'customers' ? 'text-darkred' : 'text-gray-700'} rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                <BiGroup size={22} />
                                <span class="flex-1 sm:ml-3 whitespace-nowrap ">Customers</span>
                            </p>
                        </li></Link>
                        <Link to={'/admin-orders'}><li className='relative pl-3 flex'>
                            <div className={`${name === 'orders' ? 'block' : 'hidden'} absolute bg-darkred w-1 h-full left-0`}></div>

                            <p class={`flex items-center p-2 ${name == 'orders' ? 'text-darkred' : 'text-gray-700'} rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                <BiCompass size={22} />
                                <span class="flex-1 ml-3 whitespace-nowrap">Orders</span>
                            </p>
                        </li></Link>

                        <Link to={'/admin-settings'}><li className='relative pl-3 flex'>
                            <div className={`${name === 'settings' ? 'block' : 'hidden'} absolute bg-darkred w-1 h-full left-0`}></div>

                            <p class={`flex items-center p-2 ${name == 'settings' ? 'text-darkred' : 'text-gray-700'} rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                <AiOutlineSetting size={22} />
                                <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
                            </p>
                        </li>
                        </Link>
                        <Link to={'https://www.hhkgifts.com/'}><li className='relative pl-3 cursor-pointer flex w-full'>
                            <div className={`${name === 'store' ? 'block' : 'hidden'} absolute bg-darkred w-1 h-full left-0`}></div>

                            <p class={`flex items-center p-2 ${name == 'store' ? 'text-darkred' : 'text-gray-700'} rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                <BiBullseye size={22} />
                                <span class="flex-1 ml-3 whitespace-nowrap">Online Store</span>
                            </p>
                        </li></Link>                        
                        <li className='relative pl-3 cursor-pointer flex' onClick={userSignOut}>

                            <p class={`flex items-center p-2 text-black-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                <BiLogOut  size={22}  />
                                <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
                            </p>
                        </li>


                    </ul>
                </div>
            </aside>


        </div>
    )
}

export default AdminSidebar