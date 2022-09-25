import { useRouter } from 'next/router'
const data = require("../../public/PRODUCTS.json")
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { IconStar } from '@tabler/icons'
import Navbar from "../_Navbar"
import Link from 'next/link'
const axios = require('axios').default;



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const colorData = {
  "blau": "bg-blue-500",
  "grün": "bg-green-500",
  "rot": "bg-red-500",
  "gelb": "bg-yellow-400",
  "schwarz": "bg-black",
  "bordeaux": "bg-rose-900",
  "lila": "bg-purple-800",
  "orange": "bg-orange-500",
  "hellblau": "bg-sky-400",
  "weiß": "bg-white",
  "rosa": "bg-pink-500",
  "grau": "bg-gray-500",
}


export default function Product() {
    const router = useRouter()
    const reviews = { href: '#', average: 4, totalCount: 117 }
    const [selectedColor,setSelectedColor] = useState("blau");
    const [selectedSize,setSelectedSize] = useState("");
    const { id } = router.query
    let product = {};
    if(data !== undefined && id !== undefined) {
      product = {
        name: data[id-1].name,
        price: data[id-1].priceStr,
        href: "#",
        breadcrumbs: [
            { id: 1, name: 'Shop', href: '/shop' },
          ],
        images: data[id-1].images,
        description: data[id-1].description,
        highlights: data[id-1].highlights === undefined ? [] : data[id-1].highlights,
        details: data[id-1].details === undefined ? "" : data[id-1].details,
        variants: data[id-1].variants === undefined ? [] : data[id-1].variants,
        discount: data[id-1].discount === undefined ? false : data[id-1].discount,
    }
    }
    console.log(product);


    return (
        <>
        {id === undefined ? "Loading..." : <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <div key={breadcrumb.id}>
                  <div className="flex items-center">
                    <Link href={breadcrumb.href}><a className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a></Link>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                    <a href={breadcrumb.href} className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                      {product.name}
                    </a>
                  </div>
                </div>
              ))}
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden lg:block">
              <img
                src={"/"+product.images[0]}
                alt={product.images[0]}
                className="max-h-42 object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              {product.images.length > 1 ? <img
                src={"/"+product.images[1]}
                alt={product.images[1]}
                className="max-h-42 object-cover object-center"
              /> : null}
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              {product.images.length > 2 ? <img
                src={"/"+product.images[2]}
                alt={product.images[2]}
                className="max-h-42 object-cover object-center"
              /> : null}
            </div>
          </div>
  
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
  
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight line-through text-gray-300">{product.discount === false ? "" : product.discount.priceStr}</p><p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
              <p className='text-gray-400 text-l'>Endpreis, zzg. Versandkosten</p>
  
                
                {product.variants.includes("blau") ? <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
  
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                    <RadioGroup.Label className="sr-only"> Wähle eine Farbe </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.variants.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {' '}
                            {color.name}{' '}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 border border-black border-opacity-10 rounded-full',
                              colorData[color]
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> : null}
                
  
                
                {product.variants.length > 0 && !product.variants.includes("blau") ? <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Größe</h3>
                  </div>
  
                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Größe</RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.variants.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          className={({ active }) =>
                            classNames('bg-white shadow-sm text-gray-900 cursor-pointer',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                              
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                              </div> : null}
                
  
                <button
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => addToCart(data[id-1])}
                >
                  Zum Warenkorb hinzufügen
                </button>
            </div>
  
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Info</h3>
  
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
  
              <div className="mt-10">
                {product.highlights.length !== [] ? <h3 className="text-sm font-medium text-gray-900">Highlights</h3> : null}
  
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  </div> 
  
              {product.details === "" ? null : <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>}
      </>
      )
}

async function addToCart(product) {
  console.log("ADD TO CART")
  axios({
    method: 'post',
    url: '/api/addtocart',
    data: product
  }).then(res => {
    console.log(res)
  })
}