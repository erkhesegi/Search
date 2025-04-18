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
      <div className="absolute top-4 left-4">
        <img 
          src="https://nhs.edu.mn/favicon.ico" 
          alt="NHS Logo"
          className="w-10 h-10 "
        />
      </div>

      <div className="absolute top-10 z-20 text-center text-white">
        <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-red-500 shadow-2xl shadow-red-500">
          Sanchir Erkhes
        </p>
      </div>

      <div className="flex flex-col gap-12 sm:flex-row sm:gap-16 mt-20 z-10 justify-center items-center">
        <button 
          className="p-8 bg-transparent border-2 border-white text-white rounded-xl text-2xl font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-black hover:scale-110 hover:shadow-emerald-500 shadow-lg"
          onClick={() => router.push('/11v/folder/lab2')}
        >
          Lab 2
        </button>
        
        <button 
          className="p-8 bg-transparent border-2 border-white text-white rounded-xl text-2xl font-semibold transition-all duration-300 hover:bg-indigo-500 hover:text-black hover:scale-110 hover:shadow-indigo-500 shadow-lg"
          onClick={() => router.push('/11v/folder/lab3')}
        >
          Lab 3
        </button>

        <button 
          className="p-8 bg-transparent border-2 border-white text-white rounded-xl text-2xl font-semibold transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:scale-110 hover:shadow-cyan-500 shadow-lg"
          onClick={() => router.push('/11v/folder/lab4')}
        >
          Lab 4
        </button>
      </div>
    </div>
  );
}




