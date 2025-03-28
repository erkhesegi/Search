import { useRouter } from 'next/navigation';

export default function Lab5() {
  const router = useRouter();

  return (
    <div 
      className="flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('')"
      }}
    >
      <div className="absolute top-10 z-20 text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wider shadow-lg shadow-red-500 text-red-500">Sanchir Erkhes</h1>
      </div>

      <div className="flex flex-col gap-12 sm:flex-row sm:gap-16 mt-20 z-10 justify-center items-center">
        <button 
          className="p-8 bg-transparent border-2 border-white text-white rounded-xl text-2xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
          onClick={() => router.push('/11v/folder/lab2')}
        >
          Lab 2
        </button>
        
        <button 
          className="p-8 bg-transparent border-2 border-white text-white rounded-xl text-2xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
          onClick={() => router.push('/11v/folder/lab3')}
        >
          Lab 3
        </button>

        <button 
          className="p-8 bg-transparent border-2 border-white text-white rounded-xl text-2xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
          onClick={() => router.push('/11v/folder/lab4')}
        >
          Lab 4
        </button>
      </div>
    </div>
  );
}



