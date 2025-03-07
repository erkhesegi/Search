const exampleData = [
  {
    id: 1,
    lastname: "Toivgoo",
    firstname: "Chinguun",
    alive: true,
    height: 185,
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/17565.jpeg"
  },
  {
    id: 2,
    lastname: "Sanchir",
    firstname: "Erkhes",
    alive: true,
    height: 180,
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/14110.jpeg"
  },
  {
    id: 3,
    lastname: "Gankhuyag",
    firstname: "Khantushig",
    alive: true,
    height: 160,
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/19389.jpg"
  },
  {
    id: 4,
    lastname: "Akira",
    firstname: "Bataa",
    alive: true,
    height: 170,
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/13937.png"
  },
  {
    id: 5,
    lastname: "Nurbolsin",
    firstname: "Aidaulet",
    alive: true,
    height: 175,
    image: "https://images2.alphacoders.com/115/115702.jpg"
  },
  {
    id: 6,
    lastname: "Altankhuyag",
    firstname: "Anand",
    alive: true,
    height: 185,
    image: "https://wallpapercave.com/wp/wp10907178.jpg"
  },
  {
    id: 7,
    lastname: "Soko",
    firstname: "Soyombo",
    alive: true,
    height: 185,
    image: "https://t3.ftcdn.net/jpg/00/95/88/18/360_F_95881881_GfFcRK99MwPrErJa6auP9opHxpT6lQZs.jpg"
  },
  {
    id: 8,
    lastname: "Narka",
    firstname: "Naran-Erdene",
    alive: true,
    height: 170,
    image: "https://cdn.mongolia-guide.com/generated/aimag/yB5tmMud3F7rJsh124LfK4ML8rLIdCKXHqTaw3tX_1920_1000.jpeg"
  },
  {
    id: 9,
    lastname: "Ayden",
    firstname: "Ayden-Anand",
    alive: true,
    height: 180,
    image: "https://i.ytimg.com/vi/oNNBgSGwTGY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBM8biIHTnnC51EjQL9Ih9jdSWMuQ"
  },
  {
    id: 10,
    lastname: "Anduul",
    firstname: "Anduul",
    alive: true,
    height: 170,
    image: "https://4kwallpapers.com/images/wallpapers/yhwach-bleach-5k-3840x2160-19886.jpg"
  },
];

export default function 
const a = exampleData;
console.log("length --->", exampleData.length);
return (
  <div className="p-5 grid grid-cols-4 justify-between gap-10">
   {exampleData.map((element, index) =>
  <div className="flex flex-col p-3 rounded-lg text-black shadow-md w-60 h-50 border-white border shadow-lg shadow-blue-500">
  <img src={element.image} className="object-cover rounded"/>
  <div className="flex justify-center">
  <p className="text-white font-semibold ">{element.firstname}</p>
                    </div>
   <p className="text-white ml-2">Lastname: {element.lastname}</p>
   <p className="text-blue-700 ml-2">Height: {element.height}</p>
                    </div>
            )}
        </div>
    );