/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, ReceiptTaxIcon, ShieldCheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Sufficient Properties',
    description:
      'Every type of property you are looking for is here.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Varified by us',
    description:
      'Every property is varified by us and it has 100% real photos.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'High Response Rate',
    description:
      ' We pick sellers for you who give you priority',
    icon: ReceiptTaxIcon,
  },
  {
    name: 'Rated & Reviewed',
    description:
      'Testimonials from genuine buyers are the best way to judge a seller.',
    icon: AnnotationIcon,
  },
]

export default function FeatureSec() {
  return (
    <>
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 uppercase font-extrabold tracking-tight text-emerald-600 sm:text-4xl sm:text-center">
          Hey ! We are here for you
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className=" border-solid border-2 border-emerald-600 rounded-md flex flex-col items-center justify-center p-5">
                <dt className='flex flex-col items-center justify-center'>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-lg leading-6 font-bold text-gray-600">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-center text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    
    </>
  )
}
