import '@/style/card.css'
import clsx from 'clsx'
import Image from 'next/image'

export default function ExtensionCard({
  cardTypes,
  label,
  description,
  images,
}) {
  return (
    <div className="relative mx-auto h-[330px] max-w-6xl">
      <div className={clsx('rounded-2xl', cardTypes)}></div>
      <div className="absolute grid h-full w-full grid-cols-5 rounded-2xl bg-primary">
        <div className="col-span-3 flex flex-col justify-center px-20">
          <h1 className="text-3xl font-semibold tracking-wide text-primary md:text-4xl">
            {label}
          </h1>
          <p className="mt-6 text-lg text-secondary">{description}</p>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-r-3xl object-cover"
            src={images}
            alt="Application Usage"
            height={360}
            width={600}
          />
        </div>
      </div>
    </div>
  )
}
