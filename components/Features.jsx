import ExtensionCard from './ExtensionCard'

export default function Features() {
  return (
    <div className="bg-secondary">
      <div
        aria-hidden
        className="h-[3px] bg-gradient-to-r from-rose-500 to-purple-500"
      ></div>
      <div className="">
        <h1 className="mx-auto max-w-2xl bg-gradient-to-br from-white to-[rgba(122,90,248,.3)]  bg-clip-text text-center text-4xl font-semibold text-transparent md:text-5xl lg:px-4 lg:text-6xl p-8">
          Free, open source, and ready for extension.
        </h1>
        <ExtensionCard />
      </div>
    </div>
  )
}
