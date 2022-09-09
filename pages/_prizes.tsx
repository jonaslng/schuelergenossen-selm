/* This example requires Tailwind CSS v2.0+ */

const features = [
  {
    name: '1. Platz "Gründung an Schulen" (WFG Gründerpreis)',
    img: "prize1.jpeg",
    size: "11"
  },
  {
    name: 'Schüler Business Award (Beste Schülerfirma Deutschlands)',
    img: "prize2.png",
    size: "11"
  },
  {
    name: 'EasyCredit Preis 2018',
    img: "prize3.png",
    size: "10"
  },
  {
    name: "Schülergenossenschaftspreis 2016",
    img: "prize4.png",
    size: "10"
  },
  {
    name: "IHK Schulpreis",
    img: "prize5.png",
    size: "12"
  }
]

export default function Example() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Schülergenossen Selm</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Unsere Auszeichnungen
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-15 items-center justify-center rounded-md text-white">
                    <img src={feature.img} className={"h-"+feature.size} />
                  </div>
                  <p className="text-lg font-medium leading-6 text-gray-900" style={{marginLeft: "110px"}}>{feature.name}</p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
