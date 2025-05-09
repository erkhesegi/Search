import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab3() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const clothes = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const instruments = await fetch("https://mongol-api-rest.vercel.app/instruments");
                const tools = await fetch("https://mongol-api-rest.vercel.app/historicaltools");
                const ethnic = await fetch("https://mongol-api-rest.vercel.app/ethnicgroups");
                const provinces = await fetch("https://mongol-api-rest.vercel.app/provinces");
                const figures = await fetch("https://mongol-api-rest.vercel.app/historicalfigures");
                const attractions = await fetch("https://mongol-api-rest.vercel.app/touristattractions");

                const result1 = await clothes.json();
                const result2 = await instruments.json();
                const result3 = await tools.json();
                const result4 = await ethnic.json();
                const result5 = await provinces.json();
                const result6 = await figures.json();
                const result7 = await attractions.json();

                setData([
                    ...result1.clothes,
                    ...result2.instruments,
                    ...result3.historicalTools,
                    ...result4.ethnicGroups,
                    ...result5.provinces,
                    ...result6.historicalFigures,
                    ...result7.touristAttractions
                ]);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredData = data.filter(item =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-xl text-gray-700">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
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

            {/* Main Content */}
            <div className="w-4/5 p-6 overflow-auto">
                {/* Search Input */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Cards or Nothing Found */}
                {filteredData.length === 0 ? (
                    <div className="text-center w-full text-gray-500 text-xl mt-10">
                        Nothing Found
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {filteredData.map((element, index) => (
                            <div
                                key={index}
                                className="max-w-sm bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                            >
                                <div className="h-60 overflow-hidden flex items-center justify-center bg-gray-100">
                                    {element.images ? (
                                        <img
                                            src={element.images}
                                            alt={element.name}
                                            className="object-cover w-full h-full"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <p className="text-gray-500 text-center">No image found</p>
                                    )}
                                </div>
                                <div className="p-5 flex flex-col justify-between h-60 overflow-y-auto">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{element.name}</h2>
                                    <p className="text-gray-600 text-sm line-clamp-4">{element.description}</p>
                                    <p className="text-gray-600 text-sm line-clamp-4">{element.dateOfBirth}</p>
                                    <p className="text-gray-600 text-sm line-clamp-4">{element.accomplishment}</p>
                                    <p className="text-gray-600 text-sm line-clamp-4">{element.population}</p>
                                    <p className="text-gray-600 text-sm line-clamp-4">{element.linguistic}</p>
                                    <p className="text-gray-600 text-sm line-clamp-4">{element.capital}</p>
                                    <p className="text-gray-600 text-sm line-clamp-4">{element.soums}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
