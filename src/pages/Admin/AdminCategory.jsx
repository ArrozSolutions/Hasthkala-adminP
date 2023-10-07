import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar';
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar';
import { BiDownload, BiEdit, BiPlus, BiTrash } from 'react-icons/bi';
import Img from '../../assets/cat2.jpg';
import { AdminAllCategory, AdminDeleteCategoryOrders } from '../../actions/Admin/AdminAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const AdminCategory = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [categoryCount, setCategoryCount] = useState(null);
  const allcategory = useSelector(state => state.admin.category);
  const allcategorycount = useSelector(state => state.admin.totalcategory);

  const auth = useSelector(state => state.admin);
  // useEffect(() => {
  //   if (!auth?.authenticate) {
  //     navigate('/admin-login')
  //   }
  // }, [auth?.authenticate])


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AdminAllCategory());
  }, [dispatch])

  useEffect(() => {
    if (allcategory) {
      setCategory(allcategory);
    }
    if (allcategorycount) {
      setCategoryCount(allcategorycount);
    }
  }, [allcategory, allcategorycount])


  const deleteCategory=(cid)=>{
    dispatch(AdminDeleteCategoryOrders(cid)).then(()=>{
      dispatch(AdminAllCategory());
    })
  }



  return (
    <>
      <div className='flex w-full h-screen'>
        <AdminSidebar name={'categories'} />
        <div className='flex flex-col w-full h-screen '>
          <AdminTopbar />
          <div className='flex flex-col pt-5 pl-5 pr-10'>
            <h1 className='font-dmsans text-lg font-semibold'>Category</h1>
            <div className='w-full border rounded-lg mt-5 h-20 items-center flex pl-4 pt-4 pb-4 justify-between pr-5'>
              <div className='flex h-10'>
                <button className='border h-full w-[100px] rounded-md mr-3 flex justify-center items-center text-sm'><span className='mr-2 rotate-180'><BiDownload size={15} /></span> Export</button>
                <button className='border h-full w-[100px] rounded-md flex justify-center items-center text-sm'><span className='mr-2'><BiDownload size={15} /></span>Import</button>
              </div>
              <Link to={'/admin-add-category'}><button className='text-white h-11 hover:scale-110 transition-all duration-300 w-[200px] rounded-md flex justify-center items-center text-sm font-dmsans  bg-darkred'>Add Category<span className='ml-2'><BiPlus size={15} /></span></button></Link>

            </div>

            <div className='w-full border rounded-lg mt-5 h-20 items-center flex pl-4 pt-4 pb-4 justify-between pr-5'>
              <input type="text" className='bg-[#1a1a1d12] border-[#1a1a1d00] text-sm font-dmsans pl-3 rounded-lg h-12 w-full' placeholder='Search by Category Name' />
            </div>
            <div className='flex-col mt-5'>

              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        id
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Icon
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='text-black'>
                    {
                      category?.map((cat, key) => (

                        <tr key={key} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {cat?._id}
                          </th>
                          <td class="px-5 p-4 flex  items-center">
                            <div className='w-10 h-10 rounded-full flex mr-2'><img className='w-full h-full rounded-full' src={cat?.images[0]?.img} alt="" /></div>
                          </td>
                          <td class="px-6 py-4">
                            {cat?.name}
                          </td>
                          <td class="px-4 py-4 flex">
                            <span className='mb-2 cursor-pointer hover:scale-110 duration-300 transition-all'><BiEdit size={20} className='mr-2' color='blue' /></span>
                            <span className='mb-2 cursor-pointer hover:scale-110 duration-300 transition-all' onClick={() => {
                              deleteCategory(cat?._id);
                            }}><BiTrash size={20} color='darkred' /></span>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
                <nav class="flex items-center justify-between pt-4 pl-3 pr-3 mb-3" aria-label="Table navigation">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-{categoryCount < 10 ? categoryCount : 10}</span> of <span class="font-semibold text-gray-900 dark:text-white">{categoryCount}</span></span>
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

export default AdminCategory