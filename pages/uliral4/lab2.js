
import { useState } from "react";
import { useRouter } from 'next/navigation';

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
    const router = useRouter();

    const filterData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-50">
            <div className="w-1/5 bg-white shadow-xl rounded-lg p-6">
                <div className="text-center">
                    <img src="https://nhs.edu.mn/favicon.ico" className="w-32 h-32 mx-auto rounded-full mb-4" />
                    <h2 className="text-indigo-600 text-2xl font-semibold">Nest Education IT School</h2>
                    <p className="text-gray-800 mt-2 text-lg font-semibold">Санчир Эрхэс</p>
                    <p className="text-gray-800 mt-1 text-lg">Анги: 11В</p>
                </div>
    
                <div className="mt-8 space-y-4">
                    <button
                        onClick={() => router.push('/uliral4/lab2')}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium transition duration-300 hover:bg-indigo-500 hover:shadow-lg focus:outline-none"
                    >
                        Go to Lab 2
                    </button>
                    <button
                        onClick={() => router.push('/uliral4/lab3')}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium transition duration-300 hover:bg-indigo-500 hover:shadow-lg focus:outline-none"
                    >
                        Go to Lab 3
                    </button>
                </div>
            </div>
    
            <div className="w-4/5 bg-gray-100 p-6 rounded-lg shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold text-lg">
                            Харилцагчид
                        </div>
    
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-12 px-4 py-2 w-96 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-300 outline-none"
                        />
                    </div>
                    <div className="bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg font-medium cursor-pointer">
                        Барааг бүртгэх
                    </div>
                </div>
    
                <div className="h-[80vh] bg-gray-200 rounded-lg p-4 overflow-auto">
                    <div className="space-y-6">
                        {filterData.length === 0 ? (
                            <div className="text-center text-gray-600">Nothing here</div>
                        ) : (
                            filterData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 rounded-lg flex justify-between items-center shadow-md"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="h-5 w-5 border border-yellow-300 rounded-sm"></div>
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
                                        <div className="w-[120px] text-gray-700 truncate">{item.name}</div>
                                        <div className="w-[100px] text-gray-700 truncate">{item.price}</div>
                                        <div className="w-[100px] text-gray-700 truncate">{item.color}</div>
                                    </div>
    
                                    <div className="flex space-x-4">
                                        <div className="w-[120px]">
                                            {item.items.map((subItem, subIndex) => (
                                                <div key={subIndex} className="text-gray-700 truncate">{subItem.name}</div>
                                            ))}
                                        </div>
                                        <div className="w-[120px]">
                                            {item.items.map((subItem, subIndex) => (
                                                <div key={subIndex} className="text-gray-700 truncate">{subItem.price}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );    
    
}


