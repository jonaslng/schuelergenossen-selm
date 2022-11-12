import Navbar from "./_Navbar";
import { getCookie } from 'cookies-next';
import { useState } from "react";

export default function Cart() {
    
    const [giftCodes, setGiftCodes] = useState([]);
    const [giftCode, setGiftCode] = useState("");
    const [giftCodeError, setGiftCodeError] = useState(false);

    return (
        <>
        <Navbar />
        <div className="flex justify-center my-6">
            <div className="flex flex-col w-full rounded-lg p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                    <table className="w-full text-sm lg:text-base" cellSpacing="0">
                        <thead>
                        <tr className="h-12 uppercase">
                            <th className="hidden md:table-cell"></th>
                            <th className="text-left">Produkt</th>
                            <th className="lg:text-right text-left pl-5 lg:pl-0">
                            <span className="lg:hidden" title="Quantity">Anzahl</span>
                            <span className="hidden lg:inline">Anzahl</span>
                            </th>
                            <th className="hidden text-right md:table-cell">Einzelpreis</th>
                            <th className="text-right">Gesamtpreis</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cartItem()}
                        </tbody>
                    </table>
                    <hr className="pb-1 mt-6" />
                    <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
            <div className="p-4 bg-gray-100 rounded-full flex justify-center align-middle">
                <h1 className="ml-2 text-4xl font-bold">Gutscheincode</h1>
            </div>
            <div className="p-4">
                <p className="mb-4 italic">Wenn du einen Gutscheincode hast kannst du diesen hier eintragen</p>
                <div className="justify-center md:flex">
                    <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                        <input type="coupon" name="code" id="coupon" placeholder="Code eingeben" onChange={e => setGiftCode(e.target.value)} 
                                className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"/>
                        <button className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none" onClick={() => addGiftCode(giftCode,giftCodes,setGiftCodes,setGiftCode)}>
                            <svg aria-hidden="true" data-prefix="fas" data-icon="gift" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>
                            <span className="font-medium">Code einlösen</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-6 bg-gray-100 rounded-full flex justify-center align-middle">
                <h1 className="ml-2 font-bold text-4xl">Anmerkungen zur Bestellung</h1>
            </div>
            <div className="p-4">
                <p className="mb-4 italic">Wenn Sie Anmwerkungen zur Bestellung haben können sie diese hier eintragen</p>
                <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
            </div>
            </div>
            <div className="lg:px-2 lg:w-1/2">
            <div className="p-4 bg-gray-100 rounded-full flex justify-center align-middle">
                <h1 className="ml-2 text-4xl font-bold">Bestellung</h1>
            </div>
            <div className="p-4">
                <p className="mb-6 italic">Die angegebenen Versandkosten gelten für Inlandsversand (Deutschland), bei Versand ins Ausland können sie davon abweichen.</p>
                <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Zwischensumme
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    ??? €
                    </div>
                </div>
                    <div className="flex justify-between pt-4 border-b">
                    <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                        <button className="mr-2 mt-1 lg:mt-2">
                            <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"/></svg>
                        </button>
                        Gutscheincode
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                        -0€
                    </div>
                    </div>
                    <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Versandkosten
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        4,95€
                    </div>
                    </div>
                    <div className="flex justify-between pt-4">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Gesamtpreis
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        {getPrice()} €
                    </div>
                    </div>
                <a href="#">
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                    <span className="ml-2 mt-5px">Nächster Schritt</span>
                    </button>
                </a>
            </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const cartItem = () => {

    let c = getCookie("cart")
    console.log(c)
    if (c === undefined || c === null) {
        c =  []
    } else {
        c = JSON.parse(c)
    }

    let array = []

     c.map(p => {
        array.push(<tr key={p.id.toString()+p.variant.toString()}>
        <td className="hidden pb-4 md:table-cell">
            <a href="#">
                <img src={p.img} className="w-20 rounded" alt="Thumbnail" />
            </a>
        </td>
        <td className="justify-center md:justify-end md:flex mt-6">
            <div className="w-20 h-10">
                <div className="relative flex flex-row w-full h-8">
                    {p.name}
                </div>
            </div>
        </td>
        <td className="hidden text-right md:table-cell">
            <span className="text-sm lg:text-base font-medium">
                {p.amount}
            </span>
        </td>
        <td className="text-right">
            <span className="text-sm lg:text-base font-medium">
                {p.priceStr}
            </span>
        </td>
        <td className="text-right">
            <span className="text-sm lg:text-base font-medium">
                {(p.amount * p.price).toString().replace(".", ",")+" €"}
            </span>
        </td>
    </tr> )
     })

     return array;
}

function getPrice() {
    let c = getCookie("cart")
    if (c === undefined || c === null) {
        c =  []
    } else {
        c = JSON.parse(c)
    }

    let price = 0

    c.map(p => {
        price += p.amount * p.price
    })
    price += 4.95;

    return price
}

function getGiftCodes(codes) {
    let array = []

    codes.map(c => {
        array.push(<div className="flex justify-between pt-4 border-t">
        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
            <div className="flex">
                <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H32A32 32 0 0 0 0 64v48a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 320H64a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zm-96-96a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32z"/></svg>
                </button>
                {c}
            </div>
        </div>
        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
            -0€
        </div>
        </div>)
    })

    return array
}
function addGiftCode(code,codes,setCodes,setCode) {

    if(code === "Test") { //TODO: Check if code is valid

        console.log("Code is valid")
        let c = getCookie("giftCodes")
        setCodes([...codes,{code:code, value:10}])
        setCode("")

    }
    console.log(code)
    
}