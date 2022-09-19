/* This example requires Tailwind CSS v2.0+ */

const features = [
    {
      name: 'Volksbank',
      img: "partner1.png",
      size: "11"
    },
    {
        name: "Genossenschaftsverband NRW",
        img: "partner2.jpeg",
        size: "12"
    }
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Unsere Partner
            </p>
          </div>
  
          <div className="mt-10 flex justify-center">
            <dl className="space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative" style={{marginTop: "10px"}}>
                  <dt>
                    <div className="absolute flex h-12 w-15 items-center justify-center rounded-md text-white">
                      <img src={feature.img} className={"h-"+feature.size} />
                    </div>
                    <p className="text-lg font-medium leading-6 text-gray-900" style={{marginLeft: "115px"}}>{feature.name}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  