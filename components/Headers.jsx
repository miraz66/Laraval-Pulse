import Image from 'next/image'
import deshboardImage from '@/assets/dashboard-transparent-4f4f666c.png'
import { PalseIcons } from '@/assets/Icon/Svg'
import heroBackground from '@/assets/hero-background.png'

export default function Headers() {
  return (
    <header>
      <div
        aria-hidden
        className="h-[3px] bg-gradient-to-r from-rose-500 to-purple-500"
      ></div>
      <div className="mx-8 max-w-7xl 2xl:mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 py-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD92F5] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <PalseIcons />
          <span className="text-2xl font-medium text-primary">
            Laravel Pulse
          </span>
        </a>

        <div className="flex justify-between py-10">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
            <h1 className="self-center bg-gradient-to-br from-white to-[rgba(122,90,248,.3)] bg-clip-text text-6xl font-semibold tracking-wide text-transparent md:text-8xl">
              Vital signs in{' '}
              <span className="whitespace-nowrap">real-time</span>
            </h1>
            <div className="self-center">
              <div className="max-w-lg lg:ml-auto">
                <div className="inline-block rounded bg-rose-400 px-2 py-1 text-sm font-bold leading-none tracking-wide text-rose-950">
                  DROPPING SOON ON GITHUB
                </div>
                <p className="mt-4 text-lg tracking-wide text-gray-200">
                  Pulse delivers at-a-glance insights into your applications
                  performance and usage. Track down bottlenecks like slow jobs
                  and endpoints, find your most active users, and more.
                </p>
                <a
                  href="#features"
                  className="mt-8 inline-flex rounded-xl bg-muted px-6 py-2 font-semibold text-secondary transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD92F5] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <Image
          className="relative z-20 mx-auto max-w-sm px-8 md:max-w-[45rem] lg:max-w-[62rem] xl:max-w-[87rem] 2xl:max-w-[110rem]"
          src={deshboardImage}
          alt="Picture of the deshbord"
          height="auto"
          width="auto"
        />

        <Image
          src={heroBackground}
          height="auto"
          width="auto"
          alt="Hero Background"
          className="absolute -right-0 bottom-[-40%] z-10 w-[45%] opacity-75 lg:-bottom-[64%] lg:h-[1126px] lg:w-[1055px]"
        />
      </div>
    </header>
  )
}
