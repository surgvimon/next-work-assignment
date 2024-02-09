'use client'
import React from 'react'

export default function ListingItem({ listing }:any) {
  return (
    <li className='relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-[8px] overflow-hidden transition-shadow duration-150 m-[10px]'>
    <div className="contents">
        <img className='h-[170px] w-full object-cover' loading="lazy" src={listing.image} alt=""/>
        <div className="w-full p-[10px]">
            <div className="flex justify-center items-center space-x-1">
                <p className="font-bold text-lg mb-[2px] text-[#142B41] truncate">{ listing.title}</p>
            </div>
            <p className="font-[14px] text-[#457b9d] px-4 text-center">{listing.description}</p>
            <div className="flex items-center space-x-3 mt-[10px] justify-center">
              <button type="button" className="!mt-4 px-6 py-2 text-sm font-bold bg-[#021E42] text-white rounded-full hover:bg-[#222] transition duration-200 shadow-sm">Buy package</button>
            </div>
        </div>
    </div>

</li>

  )
}
