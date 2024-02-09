'use client'
import { signInUser } from '@/redux/authReducer';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


export default function SignUpForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [image , setImage] =useState("../user.png");
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    images: {},
    email: "",
    name: "",
    pass: "",
    company: "",
    tax_id: "",
    full_name: "",
    country: "",
    phone_dropdown: "",
    phone_num: 1,
    website: "",
    address: "",
    province: "",
    sub_district: "",
    district: "",
    zip: '',
  });
  const onChange = (e:any) => {
    let boolean:any = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
      setImage("../lisa.png")
    }
    
    // Text/Boolean/Number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  const  onSubmit = (e:any) => {
    e.preventDefault(); 
    router.push('/')
    dispatch(signInUser(formData));
  };

  return (
    <>
    <form onSubmit={onSubmit}>
      <div className="mx-auto">
        {image !== '../user.png' ? (
          <>
         <div className="py-[24px] text-center">
            <div className="group border-[1px] border-[#021E42] rounded-full relative inline-block overflow-hidden hover:bg-black hover:bg-opacity-25 focus:outline-none text-white transition duration-200 ease-in">
              <img src={image} className="h-[150px] w-[150px] rounded-full object-cover" alt=" Logo"/>
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-[25px]">
                  <button type='button' className='rounded-full p-2 text-transparent group-hover:text-white transition duration-200 ease-in' onClick={() => setOpenModal(!openModal)}>
                  <i className="ri-eye-line"></i>
                  </button>
                  <button type='button' className='rounded-full p-2  text-transparent group-hover:text-white transition duration-200 ease-in'>
                  <i className="ri-delete-bin-line"></i>
                  </button>
              </div>
            </div>  
          </div>
          {openModal && (
            <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-1 relative">
              <div className="absolute top-0 right-0 mr-[2rem] mt-[2rem] p-2 bg-black rounded-full" onClick={() => setOpenModal(!openModal)}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 cursor-pointer shrink-0 fill-white hover:fill-red-500 float-right transition duration-200 ease-in" viewBox="0 0 320.591 320.591">
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
                </svg>
              </div>
              
              <div className="text-center bg-black">
                  <img src={image} className="h-full w-full object-cover" alt=" Logo"/>
              </div>
            </div>
          </div>
          )}
          
          </>
        ) : (
          <div className="py-[24px] text-center">
            <label className="cursor-pointer">
              <div className="group h-[150px] w-[150px] p-8 border-[1px] border-[#021E42] rounded-full relative inline-block overflow-hidden hover:bg-black hover:bg-opacity-25 focus:outline-none text-white transition duration-200 ">
                  <input type="file" name="photo" id="fileInput" accept='image/*' className='hidden w-full h-full' onChange={onChange} />
                  <svg width="47" height="47" viewBox="0 0 47 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='h-full w-full object-cover'>
                    <path d="M46.5834 7.66663V12.5H39.3334V19.75H34.5001V12.5H27.2501V7.66663H34.5001V0.416626H39.3334V7.66663H46.5834ZM26.0417 24.5833C27.0035 24.583 27.9257 24.2006 28.6055 23.5203C29.2853 22.8401 29.6671 21.9176 29.6667 20.9559C29.6664 19.9941 29.2841 19.0719 28.6038 18.3921C27.9235 17.7123 27.0011 17.3306 26.0393 17.3309C25.5631 17.331 25.0916 17.425 24.6517 17.6074C24.2118 17.7897 23.8122 18.057 23.4756 18.3938C23.139 18.7307 22.872 19.1305 22.6899 19.5705C22.5078 20.0105 22.4142 20.4821 22.4143 20.9583C22.4145 21.4345 22.5084 21.906 22.6908 22.3459C22.8732 22.7858 23.1404 23.1854 23.4773 23.5221C23.8141 23.8587 24.214 24.1256 24.654 24.3077C25.094 24.4898 25.5655 24.5835 26.0417 24.5833ZM34.5001 32.3988L33.2603 31.0213C32.8071 30.5166 32.2526 30.1129 31.633 29.8366C31.0135 29.5603 30.3427 29.4175 29.6643 29.4175C28.986 29.4175 28.3152 29.5603 27.6956 29.8366C27.0761 30.1129 26.5216 30.5166 26.0683 31.0213L24.483 32.7879L12.7501 19.75L5.50008 27.8047V12.5H22.4167V7.66663H5.50008C4.2182 7.66663 2.98882 8.17585 2.0824 9.08228C1.17597 9.9887 0.666748 11.2181 0.666748 12.5V41.5C0.666748 42.7818 1.17597 44.0112 2.0824 44.9176C2.98882 45.8241 4.2182 46.3333 5.50008 46.3333H34.5001C35.782 46.3333 37.0113 45.8241 37.9178 44.9176C38.8242 44.0112 39.3334 42.7818 39.3334 41.5V24.5833H34.5001V32.3988Z" fill="#021E42"/>
                  </svg>
              </div>  
            </label>        
          </div>
        )}
        
      </div>
      {/* row 1*/}
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <label className="mb-2 text-[16px] text-black block">Email</label>
          <div className="relative flex items-center">
            <input type='text' id="email" name="email" placeholder='Enter name' onChange={onChange}
              className="pr-4 pl-11 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" required />
            <div className="absolute left-4">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.25 6.97519e-09H16.75C17.5801 -5.43467e-05 18.3788 0.317554 18.9822 0.887671C19.5856 1.45779 19.948 2.23719 19.995 3.066L20 3.25V12.75C20.0001 13.5801 19.6824 14.3788 19.1123 14.9822C18.5422 15.5856 17.7628 15.948 16.934 15.995L16.75 16H3.25C2.41986 16.0001 1.62117 15.6824 1.01777 15.1123C0.414367 14.5422 0.0519987 13.7628 0.00500012 12.934L6.97518e-09 12.75V3.25C-5.43467e-05 2.41986 0.317554 1.62117 0.887672 1.01777C1.45779 0.414367 2.23719 0.0519987 3.066 0.00500012L3.25 6.97519e-09ZM18.5 5.373L10.35 9.663C10.258 9.71161 10.1568 9.74054 10.053 9.74795C9.94921 9.75535 9.84499 9.74106 9.747 9.706L9.651 9.664L1.5 5.374V12.75C1.50002 13.1892 1.66517 13.6123 1.96268 13.9354C2.26019 14.2585 2.6683 14.4579 3.106 14.494L3.25 14.5H16.75C17.1893 14.5 17.6126 14.3347 17.9357 14.037C18.2588 13.7392 18.4581 13.3309 18.494 12.893L18.5 12.75V5.373ZM16.75 1.5H3.25C2.81081 1.50002 2.38768 1.66517 2.06461 1.96268C1.74154 2.26019 1.54214 2.6683 1.506 3.106L1.5 3.25V3.679L10 8.152L18.5 3.678V3.25C18.5 2.81065 18.3347 2.38739 18.037 2.06429C17.7392 1.74119 17.3309 1.5419 16.893 1.506L16.75 1.5Z" fill="#021E42"/>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 text-[16px] text-black block">Password</label>
          <div className="relative flex items-center">
            <input type='password' id='pass' name='pass' placeholder='Enter name' onChange={onChange}
              className="pr-4 pl-11 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" />
            <div className="absolute left-4">
              <svg width="16" height="21" viewBox="0 0 16 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z" fill="#021E42"/>
              </svg>
            </div>
            <div className="absolute right-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 9.005C13.0608 9.005 14.0782 9.42643 14.8284 10.1766C15.5785 10.9267 15.9999 11.9441 15.9999 13.005C15.9999 14.0659 15.5785 15.0833 14.8284 15.8334C14.0782 16.5836 13.0608 17.005 11.9999 17.005C10.9391 17.005 9.92166 16.5836 9.17151 15.8334C8.42137 15.0833 7.99994 14.0659 7.99994 13.005C7.99994 11.9441 8.42137 10.9267 9.17151 10.1766C9.92166 9.42643 10.9391 9.005 11.9999 9.005ZM11.9999 10.505C11.3369 10.505 10.701 10.7684 10.2322 11.2372C9.76333 11.7061 9.49994 12.342 9.49994 13.005C9.49994 13.668 9.76333 14.3039 10.2322 14.7728C10.701 15.2416 11.3369 15.505 11.9999 15.505C12.663 15.505 13.2989 15.2416 13.7677 14.7728C14.2365 14.3039 14.4999 13.668 14.4999 13.005C14.4999 12.342 14.2365 11.7061 13.7677 11.2372C13.2989 10.7684 12.663 10.505 11.9999 10.505ZM11.9999 5.5C16.6129 5.5 20.5959 8.65 21.7009 13.064C21.7493 13.2569 21.7191 13.4612 21.6169 13.6319C21.5147 13.8025 21.3489 13.9256 21.1559 13.974C20.963 14.0224 20.7587 13.9922 20.5881 13.89C20.4174 13.7878 20.2943 13.6219 20.2459 13.429C19.7829 11.5925 18.7201 9.96306 17.226 8.79913C15.7318 7.6352 13.8919 7.00338 11.9979 7.00384C10.1039 7.0043 8.26426 7.63701 6.77067 8.80167C5.27709 9.96632 4.21505 11.5962 3.75294 13.433C3.72911 13.5286 3.68668 13.6186 3.62807 13.6978C3.56946 13.777 3.49583 13.8439 3.41138 13.8946C3.32692 13.9454 3.2333 13.979 3.13585 13.9935C3.03841 14.0081 2.93904 14.0033 2.84344 13.9795C2.74784 13.9557 2.65787 13.9132 2.57866 13.8546C2.49946 13.796 2.43258 13.7224 2.38183 13.6379C2.33108 13.5535 2.29747 13.4599 2.2829 13.3624C2.26834 13.265 2.27311 13.1656 2.29694 13.07C2.83926 10.9073 4.08859 8.98777 5.84654 7.61627C7.6045 6.24476 9.77028 5.49991 11.9999 5.5Z" fill="#021E42"/>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 text-[16px] text-black block">Confirmed Password</label>
          <div className="relative flex items-center">
            <input type='password' id='conf-pass' name='conf-pass' placeholder='Enter name' onChange={onChange} 
              className="pr-4 pl-11 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" />
            <div className="absolute left-4">
              <svg width="16" height="21" viewBox="0 0 16 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z" fill="#021E42"/>
              </svg>
            </div>
            <div className="absolute right-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 9.005C13.0608 9.005 14.0782 9.42643 14.8284 10.1766C15.5785 10.9267 15.9999 11.9441 15.9999 13.005C15.9999 14.0659 15.5785 15.0833 14.8284 15.8334C14.0782 16.5836 13.0608 17.005 11.9999 17.005C10.9391 17.005 9.92166 16.5836 9.17151 15.8334C8.42137 15.0833 7.99994 14.0659 7.99994 13.005C7.99994 11.9441 8.42137 10.9267 9.17151 10.1766C9.92166 9.42643 10.9391 9.005 11.9999 9.005ZM11.9999 10.505C11.3369 10.505 10.701 10.7684 10.2322 11.2372C9.76333 11.7061 9.49994 12.342 9.49994 13.005C9.49994 13.668 9.76333 14.3039 10.2322 14.7728C10.701 15.2416 11.3369 15.505 11.9999 15.505C12.663 15.505 13.2989 15.2416 13.7677 14.7728C14.2365 14.3039 14.4999 13.668 14.4999 13.005C14.4999 12.342 14.2365 11.7061 13.7677 11.2372C13.2989 10.7684 12.663 10.505 11.9999 10.505ZM11.9999 5.5C16.6129 5.5 20.5959 8.65 21.7009 13.064C21.7493 13.2569 21.7191 13.4612 21.6169 13.6319C21.5147 13.8025 21.3489 13.9256 21.1559 13.974C20.963 14.0224 20.7587 13.9922 20.5881 13.89C20.4174 13.7878 20.2943 13.6219 20.2459 13.429C19.7829 11.5925 18.7201 9.96306 17.226 8.79913C15.7318 7.6352 13.8919 7.00338 11.9979 7.00384C10.1039 7.0043 8.26426 7.63701 6.77067 8.80167C5.27709 9.96632 4.21505 11.5962 3.75294 13.433C3.72911 13.5286 3.68668 13.6186 3.62807 13.6978C3.56946 13.777 3.49583 13.8439 3.41138 13.8946C3.32692 13.9454 3.2333 13.979 3.13585 13.9935C3.03841 14.0081 2.93904 14.0033 2.84344 13.9795C2.74784 13.9557 2.65787 13.9132 2.57866 13.8546C2.49946 13.796 2.43258 13.7224 2.38183 13.6379C2.33108 13.5535 2.29747 13.4599 2.2829 13.3624C2.26834 13.265 2.27311 13.1656 2.29694 13.07C2.83926 10.9073 4.08859 8.98777 5.84654 7.61627C7.6045 6.24476 9.77028 5.49991 11.9999 5.5Z" fill="#021E42"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* row 2*/}
      <h2 className='py-[25px] text-[#255FA8] font-semibold text-[20px]'>Information</h2>
      <div className="">        
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-8">

        <div>
          <label className="mb-2 text-[16px] text-black block">Company Name</label>
          <div className="relative flex items-center">
            <input type='text' id="company" name="company" placeholder='Enter name' onChange={onChange}
              className="pr-4 pl-4 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" />
          </div>
        </div>
        
        <div>
          <label className="mb-2 text-[16px] text-black block">Tax ID</label>
          <div className="relative flex items-center">
            <input type='text' id="tax_id" name="tax_id" placeholder='Enter name' onChange={onChange}
              className="pr-4 pl-4 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" />
          </div>
        </div>
        <div>
          <label className="mb-2 text-[16px] text-black block">Full Name</label>
          <div className="relative flex items-center">
            <input type='text' id="full_name" name="full_name" placeholder='Enter name' onChange={onChange}
              className="pr-4 pl-4 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" />
          </div>
        </div>
        <div>
          <label className="mb-2 text-[16px] text-black block">Country</label>
          <div className="relative flex items-center">
            <div className="relative w-full">
              <select defaultValue="thailand" id="country" name='country' aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} >
                  <option value="thailand">Thailand</option>
                  <option value="France">France </option>
                  <option value="us">United States</option>
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <label className="mb-2 text-[16px] text-black block">Phone Number</label>
          <div className="relative flex items-center">
            <div className="w-1/3 mx-2">
              <select defaultValue="+66" id="phone_dropdown" name='phone_dropdown' aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} >
                  <option key="66"  value="+66">+66</option>
                  <option key="10" value="+10">+10 </option>
                  <option key="2" value="+2">+2</option>
              </select>
            </div>
            <div className="w-full">
              <input 
                type='text' 
                id="phone_num" 
                name="phone_num" 
                placeholder='Enter Phone number' 
                onChange={onChange} 
                // pattern="/[^0-9.]/g"
                // autoComplete="cc-number"
                // inputMode="numeric"
                className="pr-4 pl-4 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" 
              />

            </div>
          </div>
        </div>
        <div>
          <label className="mb-2 text-[16px] text-black block">Website</label>
          <div className="relative flex items-center">
            <input type='text' id="website" name="website" placeholder='Enter name' onChange={onChange}
              className="pr-4 pl-4 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" />
          </div>
        </div>
        <div className='row-span-3'>
          <label className="mb-2 text-[16px] text-black block">Address</label>
          <div className="relative flex items-center">
            <textarea id='address' name='address' className="pr-4 pl-4 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full h-[9rem] outline-[#007bff] resize" onChange={onChange} ></textarea>
          </div>
        </div>
        <div>
          <label className="mb-2 text-[16px] text-black block">State/Province</label>
          <div className="relative flex items-center">
            <select defaultValue="primary" id="province" name='province' aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} >
              <option key="primary" value="primary">Choose Province</option>
              <option key="bangkok" value="bangkok">Bangkok </option>
              <option key="bungkan" value="bungkan">Bungkan</option>
            </select>
          </div>
        </div><div>
          <label className="mb-2 text-[16px] text-black block">Sub-District</label>
          <div className="relative flex items-center">
            <select defaultValue="primary" id="sub_district" name='sub_district' aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} >
              <option key="primary" value="primary">Choose Sub-District</option>
              <option key="din_daeng" value="din-daeng">Din Daeng </option>
              <option key="huai_khwang" value="huai-khwang">Huai Khwang</option>
              <option key="mueang" value="mueang">Mueang</option>
              <option key="so_phi_sai" value="so-phi-sai">So Phi Sai</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-2 text-[16px] text-black block">City/District</label>
          <div className="relative flex items-center">
            <select defaultValue="primary" id="city" name='city' aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} >
                <option key="primary" value="primary">Choose District</option>
                <option key="th" value="th">Thailand </option>
                <option key="us" value="us">United States</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-2 text-[16px] text-black block">Zip Code</label>
          <div className="relative flex items-center">
            <input type='text' id="zip" name="zip" placeholder='Enter name' onChange={onChange}
              className="pr-4 pl-4 py-2.5 text-sm text-black rounded bg-white border border-gray-300 w-full outline-[#007bff]" />
          </div>
        </div>


        </div>
        <div className="flex justify-between">
          <button type="button" className="!mt-8 px-8 py-3 text-[20px] font-semibold bg-[#021E42] text-white rounded-full hover:bg-[#222] transition duration-200 shadow-md">Cancel</button>
          <button type="submit" className="!mt-8 px-8 py-3 text-[20px] font-semibold bg-[#5FC198] text-white rounded-full hover:bg-[#55b48d] transition duration-200 shadow-md">Submit</button>
        </div>
      </div>

    </form>
    </>
  )
}
