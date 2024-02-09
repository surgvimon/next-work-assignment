'use client'
import BannerPage from "@/components/home/BannerPage"
import ListingItem from "@/components/home/ListingItem"

const sampleData = [
  {
      id: '1',
      image: '../images/list-image-1.png',
      title: 'Lorem ipsum',
      description: 'One-stop Platform community for Agents and Operator in Thailand',
  },
  {
      id: '2',
      image: '../images/list-image-2.png',
      title: 'Lorem ipsum',
      description: 'One-stop Platform community for Agents and Operator in Thailand',
  },
  {
      id: '3',
      image: '../images/list-image-3.png',
      title: 'Lorem ipsum',
      description: 'One-stop Platform community for Agents and Operator in Thailand',
  },
  {
      id: '4',
      image: '../images/list-image-4.png',
      title: 'Lorem ipsum',
      description: 'One-stop Platform community for Agents and Operator in Thailand',
  }
];
export default function Home() { 
  return (
    <main>
      <BannerPage />
      <div className="max-w-screen-2xl mx-auto pt-4 space-y-6">
        {sampleData && sampleData.length > 0 && (
            <div className="pb-[80px]">
              <h2 className="py-5 text-3xl font-bold text-center text-[#2A4B6A]">Lorem ipsum</h2>
              <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {sampleData?.map((listing:any)=>(
                  <ListingItem key={listing.id} listing={listing} id={listing.id}/>
                ))}
              </ul>
            </div>
        )}
      </div>
    </main>
  )
}
