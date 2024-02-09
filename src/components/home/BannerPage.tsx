import React from 'react'

export default function BannerPage() {
  return (
    <div className="mx-auto">
        <div className="bg-cover bg-center min-h-[635px] text-white py-24 px-10 object-fill" style={{backgroundImage:"url(../images/banner-background.jpg)"}}>
            <div className="z-10 min-h-[300px] relative h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                <h2 className="text-[48px] mb-4 font-bold shadow-sm">Lorem ipsum dolor sit amet consectetur. </h2>
                <p className="text-[32px] leading-none">One-stop Platform community for Agents and Operator in Thailand.</p>
            </div>  
        </div>
    </div>
  )
}
