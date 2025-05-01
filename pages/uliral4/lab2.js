
import { useState } from "react";

const data = [
    {
        id: 1,
        name: "Iphone",
        color: "blue",
        price: 2000000,
        items:[
            {
            id: 6,
            name:"Case",
            price: 20000,
            },
            {
                id: 11,
                name:"Camera",
                price: 20000,
                }
        ],
        image:
        "https://m.media-amazon.com/images/I/51TaXvzHHqL.jpg",
    },
    {
        id: 2,
        name: "Book",
        color: "Black",
        price: 45000,
        items:[
            {
            id: 7,
            name:"Bookmark",
            price: 8000,
            },
            {
                id: 12,
                name:"Pages",
                price: 20000,
                }
        ],
        image:
        "https://cdn2.penguin.com.au/covers/original/9780241678893.jpg"
    },
    {
        id: 3,
        name: "Key",
        color: "Gray",
        price: 20000,
        items:[
            {
            id: 8,
            name:"Keychain",
            price: 5000,
            },
            {
                id: 13,
                name:"Bayern",
                price: 20000,
                }
        ],
        image:
        "https://mobileimages.lowes.com/productimages/9ac9fc52-1ae7-495d-aaf9-3c3acfdf5002/65232316.jpg?size=pdhism"
    },
    {
        id: 4,
        name: "Wallet",
        color: "Black",
        price: 200000,
        items:[
            {
            id: 9,
            name:"Tugrik",
            price: 20000,
            },
            {
                id: 14,
                name:"Cards",
                price: 20000,
                }
        ],
        image:
        "https://m.media-amazon.com/images/I/81WIcyHQ7oL._AC_UY1100_.jpg"
    },
    {
        id: 5,
        name: "Backpack",
        color: "Black",
        price: 300000,
        items:[
            {
            id: 10,
            name:"Notbook",
            price: 2000,
            },
            {
                id: 15,
                name:"Book",
                price: 20000,
                }
        ],
        image:
        "https://www.positivepromotions.com/images/1000/AOS4363_1.webp?v=2"
    },
]




export default function Lab2() {
    const [search, setSearch] = useState(""); 

    const filterData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex gap-x-4 p-4 bg-white h-screen">
            <div className="w-[20%] bg-gray-100 h-[95vh] rounded-xl shadow-md">
                <img src="https://nhs.edu.mn/favicon.ico" className="mt-[30px] ml-[80px] w-40 h-40" />
                <p className="text-indigo-600 ml-[40px] mt-[10px] text-xl font-bold">Nest Education IT School</p>
                <p className="text-gray-800 ml-[90px] mt-[10px] text-xl font-bold">Санчир Эрхэс</p>
                <p className="text-gray-800 ml-[110px] mt-[10px] text-xl font-bold">Анги: 11В</p>
            </div>

            <div className="w-[80%] h-[95vh] bg-gray-100 rounded-2xl p-6 flex flex-col gap-8 shadow-lg">
                <div className="flex gap-6 items-center">
                    <div className="flex items-center justify-center h-12 w-48 bg-gray-700 rounded-lg text-white font-semibold">
                        Харилцагчид
                    </div>

                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="h-12 w-[480px] px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />

                    <div className="h-12 w-[360px] flex items-center justify-center bg-yellow-500 text-white rounded-lg font-medium">
                        Барааг бүртгэх
                    </div>
                </div>

                <div className="flex-1 bg-gray-200 p-4 rounded-xl overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        {filterData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-4 flex flex-wrap items-center justify-between shadow-md"
                            >
                                <div className="h-5 w-5 border border-yellow-300 rounded-sm"></div>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-12 w-12 object-cover rounded"
                                />

                                <div className="w-[120px] text-gray-700 truncate">{item.name}</div>
                                <div className="w-[100px] text-gray-700 truncate">{item.price}</div>
                                <div className="w-[100px] text-gray-700 truncate">{item.color}</div>
                                <div className="w-[120px] text-gray-700 truncate">{item.items.map((item) => (
                                     <div className="w-[100px] text-gray-700 truncate">{item.name}</div>
                                ))}</div>
                                <div className="w-[120px] text-gray-700 truncate">{item.items.map((item) => (
                                     <div className="w-[100px] text-gray-700 truncate">{item.price}</div>
                                ))}</div>

                                
                            </div>
                        ))}
                        {filterData.length === 0 && (
                            <div className="text-white">Nothing here</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


