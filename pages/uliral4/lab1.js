import { imageConfigDefault } from "next/dist/shared/lib/image-config";

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
            }
        ],
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
            }
        ],
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
            }
        ],
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
            }
        ],
    },
]




export default function Lab1() {
    return (
        <div className="flex gap-x-4 p-4 bg-gray-300 h-screen">
        <div className="w-[20%] bg-white h-[95vh] rounded-xl">
            <img src="https://nhs.edu.mn/favicon.ico" className="mt-[30px] ml-[80px] w-40 h-40"/>
            <p className="text-indigo-800 ml-[40px] mt-[10px] text-xl font-bold">Nest Education IT School</p>
            <p className="text-black ml-[90px] mt-[10px] text-xl font-bold">Санчир Эрхэс</p>
            <p className="text-black ml-[110px] mt-[10px] text-xl font-bold">Анги: 11В</p>
            </div> 
        <div className="w-[80%] bg-white h-[95vh] rounded-xl"></div>
        </div>
    );
}