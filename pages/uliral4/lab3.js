import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab3() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/clothes"
                );
                const result = await response.json();
                setData(result.clothes);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-xl text-gray-700">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-100">
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
    
            <div className="w-4/5 p-6 overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {data.map((element) => (
                        <div
                            key={element.id}
                            className="max-w-sm bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <div className="h-60 overflow-hidden">
                                <img
                                    src={element.images}
                                    alt={element.name}
                                    className="object-cover w-full h-full"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 flex flex-col justify-between h-60">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{element.name}</h2>
                                <p className="text-gray-600 text-sm line-clamp-4">{element.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
     
    
}
