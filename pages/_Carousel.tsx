import Link from "../node_modules/next/link";

export default function Carousel() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto sm:text-center lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-300">
                  Triff uns auf dem Selmer Weihnachtsmarkt vom 25.-27. November
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <rect
                      fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Die</span>
                </span>{' '}
                Potato Company
              </h2>
            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img
                className="h-full rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src="logoPotato.png"
                alt=""
              />
            </div>
            <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
            Unter dem Dach der Schülergenossen eSG, jedoch komplett selbstständig betrieben wird die Potato Company. Inspiriert von anderen Anbietern sollen nun auch in Selm und Umgebung Kartoffelspiralen angeboten werden. Die Kartoffeln werden von lokalen Erzeugern bezogen und mit hochwertigen Gewürzen verfeinert. Verkauft werden die Kartoffelspiralen im Rahmen von diversen lokalen Veranstaltungen zu einem Preis von 2,50 EUR.
            </p>
          </div>
        </div>
      );
}