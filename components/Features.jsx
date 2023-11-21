import { Data } from '@/assets/card/CardData'

export default function Features() {
  return (
    <div className="bg-secondary">
      <div
        aria-hidden
        className="h-[3px] bg-gradient-to-r from-rose-500 to-purple-500"
      ></div>
      <div className="py-28">
        <h1 className="mx-auto max-w-2xl bg-gradient-to-br from-white to-[rgba(122,90,248,.3)]  bg-clip-text p-8 text-center text-4xl font-semibold text-transparent md:text-5xl lg:px-4 lg:text-6xl">
          Free, open source, and ready for extension.
        </h1>

        <div className="space-y-24 px-32 pt-20">
          {Data.map((card) => {
            return card
          })}
        </div>
      </div>
    </div>
  )
}
