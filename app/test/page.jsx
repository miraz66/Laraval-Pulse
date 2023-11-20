import React from 'react'
import dashBordImage from '@/assets/dashboard-transparent-4f4f666c.png'
import heroImage from '@/assets/hero-background.png'
import Image from 'next/image'

export default function page() {
  return (
    <>
      <div className="relative bg-purple-700">
        <Image
          className="z-20"
          src={dashBordImage}
          height={2000}
          width={1500}
          alt="Hero Background"
        />

        <Image
          src={heroImage}
          height="auto"
          width="auto"
          alt="Hero Background"
          className="absolute w-[45%] bottom-[-20%] -right-0 height-auto lg:-bottom-1/2 lg:h-[1126px] lg:w-[1055px] opacity-75"
        />
      </div>
    </>
  )
}
