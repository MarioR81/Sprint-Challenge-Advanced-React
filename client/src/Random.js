import React, { useState, useEffect } from 'react';

function useFetch(url, defaultResponse){
    const [data, setData] = useState(defaultResponse);

    async function getDataFromAPI(url){
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData({
                isLoading: false,
                data
            })
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDataFromAPI(url);
    }, []);

    return data;
}

export default function Random () {

    const randomID = Math.floor((Math.random() * 10) + 1);
    const apiEndpoint = `http://localhost:5000/api/players/${randomID}`
    const userFetchResponse = useFetch(apiEndpoint, {isLoading: true, data: null});

    if (!userFetchResponse.data || userFetchResponse.isLoading) {
        return 'Loading ...';
    }

    const { name, country } = userFetchResponse.data

    return (
        <dev>
            <header>
                <div>
                    <h2>Name: {name}</h2>
                    <h3>Country: {country}</h3>
                </div>
            </header>
        </dev>
    )
}