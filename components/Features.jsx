import Image from 'next/image'
import { Data } from '@/assets/card/CardData'
import featuresBackground from '@/assets/features-background.png'

export default function Features() {
  return (
    <div id="features" className="relative overflow-hidden bg-secondary">
      <div
        aria-hidden
        className="h-[3px] bg-gradient-to-r from-rose-500 to-purple-500"
      ></div>
      <div className="relative z-20 py-28">
        <h1 className="mx-auto max-w-2xl bg-gradient-to-br from-white to-[rgba(122,90,248,.3)]  bg-clip-text p-8 text-center text-4xl font-semibold text-transparent md:text-5xl lg:px-4 lg:text-6xl">
          Free, open source, and ready for extension.
        </h1>

        <div className="space-y-24 px-4 pt-20 lg:px-16">
          {Data.map((card) => {
            return card
          })}
        </div>
      </div>
      <Image
        className="absolute -bottom-24 -left-1/4 z-10 h-[814px] w-[640px] max-w-none lg:h-[1211px] lg:w-[960px]"
        src={featuresBackground}
        alt="Features-background Style svg"
      />
    </div>
  )
}
