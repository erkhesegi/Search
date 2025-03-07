const exampleData = [
    {
      id: 1,
      lastname: "Toivgoo",
      firstname: "Chinguun",
      alive: true,
      height: 185,
      items: [
        {
          id:11,
          name: "Tymbark"
        },
      ],
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/17565.jpeg"
    },
    {
      id: 2,
      lastname: "Sanchir",
      firstname: "Erkhes",
      alive: true,
      height: 180,
      items: [
        {
          id:11,
          name: "Book"
        },
      ],
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/14110.jpeg"
    },
    {
      id: 3,
      lastname: "Gankhuyag",
      firstname: "Khantushig",
      alive: true,
      height: 160,
      items: [
        {
          id:11,
          name: "Key"
        },
      ],
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/19389.jpg"
    },
    {
      id: 4,
      lastname: "Batmunkh",
      firstname: "Bataa",
      alive: true,
      height: 170,
      items: [
        {
          id:11,
          name: "Block"
        },
      ],
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/13937.png"
    },
    {
      id: 5,
      lastname: "Nurbolsin",
      firstname: "Aidaulet",
      alive: true,
      height: 175,
      items: [
        {
          id:11,
          name: "Vodka"
        },
      ],
      image: "https://images2.alphacoders.com/115/115702.jpg"
    },
    {
      id: 6,
      lastname: "Altankhuyag",
      firstname: "Anand",
      alive: true,
      height: 185,
      items: [
        {
          id:11,
          name: "Laptop"
        },
      ],
      image: "https://wallpapercave.com/wp/wp10907178.jpg"
    },
    {
      id: 7,
      lastname: "Chinguunjav",
      firstname: "Soyombo",
      alive: true,
      height: 185,
      items: [
        {
          id:11,
          name: "Glasses"
        },
      ],
      image: "https://t3.ftcdn.net/jpg/00/95/88/18/360_F_95881881_GfFcRK99MwPrErJa6auP9opHxpT6lQZs.jpg"
    },
    {
      id: 8,
      lastname: "Narka",
      firstname: "Naran-Erdene",
      alive: true,
      height: 170,
      items: [
        {
          id:11,
          name: "Racket"
        },
      ],
      image: "https://cdn.mongolia-guide.com/generated/aimag/yB5tmMud3F7rJsh124LfK4ML8rLIdCKXHqTaw3tX_1920_1000.jpeg"
    },
    {
      id: 9,
      lastname: "Amarbold",
      firstname: "Ayden-Anand",
      alive: true,
      height: 180,
      items: [
        {
          id:11,
          name: "Phone"
        },
      ],
      image: "https://i.ytimg.com/vi/oNNBgSGwTGY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBM8biIHTnnC51EjQL9Ih9jdSWMuQ"
    },
    {
      id: 10,
      lastname: "Altankhaich",
      firstname: "Anduul",
      alive: true,
      height: 170,
      items: [
        {
          id:11,
          name: "Pen"
        },
      ],
      image: "https://4kwallpapers.com/images/wallpapers/yhwach-bleach-5k-3840x2160-19886.jpg"
    },
  ];
  
  export default function lab4() {
    console.log("length --->", exampleData.length);
  
    return (
      <div className="p-5 grid grid-cols-4 gap-10 bg">
        {exampleData.map((element, index) => (
          <div className="flex flex-col p-5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-2xl w-60 h-auto transform transition-transform hover:scale-105 hover:shadow-lg">
            <img
              src={element.image}
              className="object-cover rounded-t-xl border-4 border-white w-full h-40"
            />
            <div className="p-4 text-center">
              <p className="text-2xl font-extrabold text-yellow-200">Name: {element.firstname}</p>
              <p className="text-sm text-white">Lastname: {element.lastname}</p>
              <p className="text-emerald-400 mt-2">Height: {element.height} </p>
              <p>Items: </p>
              <p>
                {element.items.map((items) => (
                  <p>{items.name}</p>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }