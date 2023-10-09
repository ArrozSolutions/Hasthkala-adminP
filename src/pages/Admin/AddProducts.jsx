import React, { useEffect, useRef, useState } from 'react'
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar'
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar'
import { BiPlus, BiPlusCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { AdminAllCategory, AdminCreateProduct } from '../../actions/Admin/AdminAction';
import Img from '../../assets/banner.jpg'
import { useNavigate } from 'react-router-dom'


const AddProducts = () => {
    const navigate = useNavigate();
    const [name,setName] = useState(null);
    const [description,setDescription] = useState(null);
    const [price,setPrice] = useState(null);
    const [quantity,setQuantity] = useState(null);
    const [discountprice,setDiscountPrice] = useState(null);
    const [category,setCategory] = useState(null);
    const [tags,setTags] = useState(null);
    const [countyoforigin,setCountryOfOrigin] = useState(null);
    const [material,setMaterial] = useState(null);
    const [dimensions,setDimensions] = useState(null);
    const [images,setImages] = useState(null);

    const auth = useSelector(state => state.admin);
    const authenticate = localStorage.getItem('admin_authenticate');
    useEffect(() => {
      if(!authenticate){
        navigate('/admin-login');
      }
    }, [authenticate])
  

    const [isChecked, setIsChecked] = useState(false)
    const [hamburger,setHamburger] =useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    const toggleHamburger =()=>{
        setHamburger(!hamburger);
    }
    const [categories, setCategories] = useState(null);
    const allcategory = useSelector(state => state.admin.category);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AdminAllCategory());
    }, [dispatch])

    useEffect(() => {
        if (allcategory) {
            setCategories(allcategory)
        }
    }, [allcategory])

    const handleAddProduct=(e)=>{
        e.preventDefault();
        const productObj={
            name,
            price,
            description,
            quantity,
            discountprice,
            category,
            tags,
            countyoforigin,
            material,
            dimensions,
            images,
        }
        dispatch(AdminCreateProduct(productObj)).then(()=>{
            navigate('/admin-products')
        })

    }

    return (
        <>
            <div className='flex w-full h-screen'>
            {hamburger &&
                <AdminSidebar name={'products'} />
            }
                <div className='flex flex-col w-full h-screen'>
                    <AdminTopbar />
                    <div className='w-full h-full pl-10 pt-5 pr-5'>
                        <div className='flex justify-between pr-10'>
                            <h1 className='font-dmsans text-lg'>Add Product</h1>
                            <div className='flex items-center font-dmsans text-darkred text-lg'>
                                Does this product have variants?
                                <div className='relative'>
                                    <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                                        <input
                                            type='checkbox'
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            className='sr-only'
                                        />
                                        <span
                                            className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-darkred' : 'bg-[#CCCCCE]'
                                                }`}
                                        >
                                            <span
                                                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                                                    }`}
                                            ></span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='mt-10 mb-6 border-b flex justify-center border-darkred w-[100px] text-md font-dmsans'>Basic Info</p>
                            <p className={`${isChecked ? 'flex' : 'hidden'} cursor-pointer mt-10 mb-6 border-b justify-center  w-[100px] text-md font-dmsans`}>Variants</p>
                        </div>
                        <form onSubmit={handleAddProduct}>
                            <div className='mt-4'>
                                <div className='relative w-[500px] h-[200px]'>
                                    <div>

                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">Max 5 Images Accepted!</p>
                                                </div>
                                                <input id="dropzone-file" type="file"  onChange={(e)=>{setImages(e.target.files)}} multiple={true} maxLength={5} class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div className='pr-[500px] mb-20'>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Name</p>
                                        <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Product name' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' required/>
                                    </div>
                                    <div className='items-center justify-between flex mt-5 text-black font-dmsans '>
                                        <p className='mr-10'>Description</p>
                                        <textarea  onChange={(e)=>{setDescription(e.target.value)}} name="" className='w-[500px] text-sm rounded-lg bg-[#1a1a1d0d] border-[#1a1a1d15] h-40' placeholder='Product Description' required></textarea>
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Price</p>
                                        <input type="number"  onChange={(e)=>{setPrice(e.target.value)}} placeholder='Product Price' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' required/>
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Sale Price</p>
                                        <input type="number"  onChange={(e)=>{setDiscountPrice(e.target.value)}} placeholder='Product Sale Price' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' required/>
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Category</p>
                                        <select  onChange={(e)=>{setCategory(e.target.value)}} name="" id="" className='w-[500px] h-12 text-gray bg-[#1a1a1d0d] border-[#1a1a1d15] text-sm rounded-lg' required>
                                            <option value="" hidden defaultChecked={true}>Product Category</option>
                                            {
                                                categories?.map((cat, key) => (
                                                    <option value={cat?._id}>{cat?.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Quantity</p>
                                        <input  onChange={(e)=>{setQuantity(e.target.value)}} type="number" placeholder='Product Quantity ' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' required/>
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Material</p>
                                        <input  onChange={(e)=>{setMaterial(e.target.value)}} type="text" placeholder='Product Material' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' />
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Dimensions</p>
                                        <input  onChange={(e)=>{setDimensions(e.target.value)}} type="text" placeholder='Product Dimensions' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' />
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Product Tags</p>
                                        <input  onChange={(e)=>{setTags(e.target.value)}} type="text" placeholder='Product Tags' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' />
                                    </div>
                                    <div className='items-center justify-between flex mt-10 text-black font-dmsans'>
                                        <p className='mr-10'>Country Of Origin</p>
                                        <input  onChange={(e)=>{setCountryOfOrigin(e.target.value)}} type="text" placeholder='Product Country Of Origin' className='rounded-lg  text-sm pl-3 bg-[#1a1a1d0d] border-[#1a1a1d15] h-12 w-[500px]' required/>
                                    </div>
                                    <div className='items-center flex mt-10 text-black font-dmsans'>
                                        <button className='w-[100px] h-10 flex justify-center items-center border rounded-md shadow text-sm font-dmsans text-darkred' type='button' onClick={()=>{navigate('/admin-products')}}>Cancel</button>
                                        <button className='w-[100px] h-10 flex justify-center items-center border rounded-md shadow text-sm font-dmsans bg-darkred text-white ml-5' type='Submit'>Submit</button>
                                    </div>

                                    <br /><br />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProducts