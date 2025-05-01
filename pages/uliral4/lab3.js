import { useRouter  } from "next/router";
import { useState, useEffect } from "react";

export default function Lab3() {
    const router = useRouter();
    const [data, setData] = useState("");
    const [data1, setData1] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/clothes"
                );

                const result = await response.json();

                setData(result);

                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    console.log(data);
}

return(
    
)