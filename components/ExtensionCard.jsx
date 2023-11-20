import '@/style/card.css'

export default function ExtensionCard() {
  return (
    <div className="max-w-7xl relative mx-auto h-[20rem]">
      <div className="card rounded-lg"></div>
      <div className="absolute rounded-lg w-full bg-primary h-full"></div>
    </div>
  )
}
