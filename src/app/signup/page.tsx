import SignUpForm from '@/components/signup/SignUpForm'
import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="max-w-screen-xl items-center justify-between mx-auto p-8">
        <div className='relative flex items-center'>
          <p className="text-[15px] bg-white text-gray-300 absolute px-2 top-[-10px] left-[18px] font-semibold">Sign-up</p>
          <div className='px-14 pb-8 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded-[20px] outline-none shadow-md'>
              <SignUpForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
