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
    <div className="relative mx-auto h-[40rem] max-w-sm md:max-w-2xl lg:h-[320px] lg:max-w-6xl">
      <div className={clsx('rounded-2xl', cardTypes)}></div>
      <div className="absolute h-full w-full rounded-2xl bg-primary">
        <div className="grid-cols-5 lg:grid">
          <div className="col-span-3 flex flex-col justify-center px-8 pb-16 pt-10 lg:px-20 lg:py-0">
            <h1 className="text-3xl font-semibold tracking-wide text-primary md:text-4xl">
              {label}
            </h1>
            <p className="mt-6 text-lg tracking-wide text-secondary">
              {description}
            </p>
          </div>
          <div className="relative col-span-2">
            <Image
              className="inset-0 h-[300px] rounded-r-2xl object-cover object-left-bottom max-lg:rounded-b-2xl md:h-96 lg:h-80"
              src={images}
              alt="Application Usage"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
