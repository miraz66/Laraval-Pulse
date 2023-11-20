import Image from 'next/image'
import deshboardImage from '@/assets/dashboard-transparent-4f4f666c.png'
import { PalseIcons } from '@/assets/Icon/Svg'
import heroBackground from '@/assets/hero-background.png'

export default function Headers() {
  return (
    <div>
      {/* <div
        aria-hidden
        className="h-[3px] bg-gradient-to-r from-rose-500 to-purple-500"
      ></div> */}
      {/* <div className="mx-auto max-w-7xl">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 py-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD92F5] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <PalseIcons />
          <span className="text-primary text-2xl font-medium">
            Laravel Pulse
          </span>
        </a>

        <div className="flex justify-between py-10">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
            <h1 className="self-center bg-gradient-to-br from-white to-[rgba(122,90,248,.3)] bg-clip-text text-6xl font-semibold text-transparent md:text-8xl">
              Vital signs in{' '}
              <span className="whitespace-nowrap">real-time</span>
            </h1>
            <div className="self-center">
              <div className="max-w-lg lg:ml-auto">
                <div className="inline-block rounded bg-rose-400 px-2 py-1 text-sm font-bold leading-none tracking-wide text-rose-950">
                  DROPPING SOON ON GITHUB
                </div>
                <p className="mt-4 text-lg text-gray-200">
                  Pulse delivers at-a-glance insights into your application's
                  performance and usage. Track down bottlenecks like slow jobs
                  and endpoints, find your most active users, and more.
                </p>
                <a
                  href="#features"
                  className="bg-muted text-secondary mt-8 inline-flex rounded-xl px-6 py-2 font-semibold transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD92F5] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="mt-10 relative overflow-hidden">
        <Image
          className="mx-auto z-20 relative"
          src={deshboardImage}
          alt="Picture of the deshbord"
          width={1700}
          height={800}
        />

        <Image
          src={heroBackground}
          height="auto"
          width="auto"
          alt="Hero Background"
          className="absolute z-10 w-[45%] bottom-[-40%] -right-0 height-auto lg:-bottom-[64%] lg:h-[1126px] lg:w-[1055px] opacity-75"
        />
      </div> */}
    </div>
  )
}
