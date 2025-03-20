import { useState } from "react";

const exampleData = [
  {
    id: 1,
    lastname: "Amarbold",
    firstname: "Azzaya",
    alive: true,
    height: 160,
    items: [
      {
        id: 11,
        name: "Book"
      },
    ],
    image: "https://i.pinimg.com/736x/af/7f/77/af7f77f9c21f53ca3623f0f6a4d8338d.jpg"
  },
  {
    id: 2,
    lastname: "Nurbolsin",
    firstname: "Aidaulet",
    alive: true,
    height: 165,
    items: [
      {
        id: 11,
        name: "Surron"
      },
    ],
    image: "https://i.pinimg.com/736x/9a/6b/08/9a6b08408a34376c7e03ae6674005a10.jpg"
  },
  {
    id: 3,
    lastname: "Amarbold",
    firstname: "Ayden-Anand",
    alive: true,
    height: 180,
    items: [
      {
        id: 11,
        name: "Key"
      },
    ],
    image: "https://i.pinimg.com/736x/07/94/6b/07946b376b981a0b6b622869f85df707.jpg"
  },
  {
    id: 4,
    lastname: "Altankhuyag",
    firstname: "Anand",
    alive: true,
    height: 185,
    items: [
      {
        id: 11,
        name: "Block"
      },
    ],
    image: "https://i.pinimg.com/736x/4a/21/25/4a2125ea3d703bee63e98de2913ba2ad.jpg"
  },
  {
    id: 5,
    lastname: "Batsukh",
    firstname: "Anar",
    alive: true,
    height: 180,
    items: [
      {
        id: 11,
        name: "Vodka"
      },
    ],
    image: "https://i.pinimg.com/736x/77/1c/61/771c61ec782a00fb1fdebddd2670963f.jpg"
  },
  {
    id: 6,
    lastname: "Altankhaich",
    firstname: "Anduul",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Laptop"
      },
    ],
    image: "https://i.pinimg.com/736x/55/73/b9/5573b99e618ff9c2cb6014f3157029ca.jpg"
  },
  {
    id: 7,
    lastname: "Batmunkh",
    firstname: "Batpurev",
    alive: true,
    height: 175,
    items: [
      {
        id: 11,
        name: "Glasses"
      },
    ],
    image: "https://i.pinimg.com/736x/4a/6f/fa/4a6ffa0c91d778673725effbe21ce81b.jpg"
  },
  {
    id: 8,
    lastname: "Tsengel",
    firstname: "Gunsan-Yanjin",
    alive: true,
    height: 160,
    items: [
      {
        id: 11,
        name: "Racket"
      },
    ],
    image: "https://i.pinimg.com/736x/3d/af/c1/3dafc187a67cd577508762150985f65c.jpg"
  },
  {
    id: 9,
    lastname: "Enkhbayar",
    firstname: "Yesui",
    alive: true,
    height: 175,
    items: [
      {
        id: 11,
        name: "Phone"
      },
    ],
    image: "https://i.pinimg.com/736x/c9/ee/5c/c9ee5ca0dc48a1a1653271ba527874f1.jpg"
  },
  {
    id: 10,
    lastname: "Daknhat",
    firstname: "Minori",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/8c/f4/08/8cf4088c87e3c8d3d13ef77a4cdec2b8.jpg"
  },
  {
    id: 11,
    lastname: "Gankhuyag",
    firstname: "Naran-Erdene",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/48/34/25/48342505ee267f6704fa8aa1f600a181.jpg"
  },
  {
    id: 12,
    lastname: "Chimiddorj",
    firstname: "Oyunbilig",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/f4/cf/f2/f4cff243ddf4d61e162cb7c5dc01a645.jpg"
  },
  {
    id: 13,
    lastname: "Chinguunjav",
    firstname: "Soyombo",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/4e/43/28/4e4328f55612b5230ebf8ff0fd88241f.jpg"
  },
  {
    id: 14,
    lastname: "Gantur",
    firstname: "Serjmyadag",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/475997965_3424510444345630_4441740635930932015_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3xrBg0W4xfIQ7kNvgG9Mxw9&_nc_oc=AdgG99oz5svwVSnG_MDCM8yQw0retnYNGtAlw2jT69MPWWot9VwF7Ryy60hqybMSJhQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGhehJOj67FYQ9PYREaUGa4GMZhwqcGDHm-legrMfsOaA&oe=67FB089B"
  },
  {
    id: 15,
    lastname: "Tserenbaljir",
    firstname: "Telmuun",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROek9Dk3_QDsZxOYjlQU-8JCDuS4kz-igYrQ&s"
  },
  {
    id: 16,
    lastname: "Gankhuyag",
    firstname: "Khantushig",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/fa/e6/e4/fae6e435e952b96dc2718ee5f2802b51.jpg"
  },
  {
    id: 17,
    lastname: "Sukhdorj",
    firstname: "Khulan",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://www.arty.mn/files/img/tide8.jpg"
  },
  {
    id: 18,
    lastname: "Battulga",
    firstname: "Tsolmon",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/32/93/70/32937088651587feef50826e31b57b61.jpg"
  },
  {
    id: 19,
    lastname: "Toivgoo",
    firstname: "Chinguun",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/95/77/c4/9577c493cfb725ae9d48964e6cd80a22.jpg"
  },
  {
    id: 20,
    lastname: "Sanchir",
    firstname: "Erkhes",
    alive: true,
    height: 170,
    items: [
      {
        id: 11,
        name: "Pen"
      },
    ],
    image: "https://i.pinimg.com/736x/46/bb/9c/46bb9ce5e1459105c6fc5afeb3c4e398.jpg"
  },
];

export default function lab4() {

  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="bg-black min-h-screen">
      <input 
        className="fixed top-4 left-4 placeholder-shown:border-gray-500 p-2 m-5 rounded text-gray-500" 
        placeholder="Нэрээ бичнэ үү." 
        type="text" 
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-gradient-to-l from-teal-400 to-cyan-500 p-4 rounded-2xl ml-[566px] mt-[10px] text-white text-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl" onClick={() => setToggle(!toggle)}>
        Switch
      </button>
      {!toggle && (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 bg-gradient-to-br ">
          {exampleData.map((element, index) => (
            <div className="flex flex-col p-5 rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-600 shadow-2xl w-60 h-auto transform transition-transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-white shadow-xl shadow-emerald-600">
              <img
                src={element.image}
                className="object-cover rounded-t-2xl border-4 border-white w-full h-40"
              />
              <div className="p-4 text-center">
                <p className="text-2xl font-extrabold text-yellow-400">{element.firstname}</p>
                <p className="text-sm text-white">Lastname: {element.lastname}</p>
                <p className="text-emerald-400 mt-2">Height: {element.height}</p>
                <p className="text-lg text-pink-300 mt-2">Items:</p>
                <div>
                  {element.items.map((item, index) => (
                    <p key={index} className="text-white text-sm">{item.name}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      )}
      {toggle && (
        <div className="p-5 flex flex-col gap-5 ">
          
          {exampleData.map((element, index) => (
            <div className="border border-white rounded-2xl w-full">
              <div className="flex items-center rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-600 w-full shadow-2xl w-60 h-auto transform transition-transform hover:scale-105 hover:shadow-2xl bordaer border-transparent hover:border-white shadow-xl shadow-emerald-600">
                <img
                  src={element.image}
                  className="object-cover rounded-t-2xl border-4 border-white bg-cover w-full h-40 w-40"
                />
                <div className="p-4 text-center flex items-center space-x-8">
                  <p className="text-2xl font-extrabold text-yellow-400">{element.firstname}</p>
                  <p className="text-sm text-white">Lastname: {element.lastname}</p>
                  <p className="text-emerald-400 mt-2">Height: {element.height}</p>
                  <p className="text-lg text-pink-300 mt-2">Items:</p>
                  <div>
                    {element.items.map((item, index) => (
                      <p key={index} className="text-white text-sm">{item.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      )}
    </div>
  );
}