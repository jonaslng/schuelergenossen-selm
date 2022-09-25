import Link from "../../node_modules/next/link"

const products = require("../../public/PRODUCTS.json")
  


  export default function Example() {

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">SGS Merchandise</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className={product.discount === false ? "min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80" : "min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"}>
                  <img
                    src={product.images[0]}
                    alt="Product"
                    className="min-h-80 object-cover object-center lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={product.href}><a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a></Link>
                    </h3>
                  </div>
                  {product.discount !== false ? <p className="text-sm font-medium text-gray-500 line-through">{product.discount.priceStr}</p> : null}<p className="text-sm font-medium text-gray-900">{product.priceStr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  