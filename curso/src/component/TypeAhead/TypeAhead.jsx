import React, {useState} from 'react';
import './TypeAhead.scss';

const TypeAhead = () => {
    const endpoint     = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const cities       = [];
    fetch(endpoint)
        .then(response => response.json())
        .then(data     => cities.push(...data));

    const matches      = useDataInput(cities);
    const suggestions  = matches.data.map((place, i) => {
        return( 
            <li key={i}>
                <span className="name">{place.city}, {place.state}</span>
                <span className="population">{place.population}</span>
            </li>
        );
    });
    

    return (
        <div className="type-ahead-screen">
            <form className="search-form">
                <input type="text" className="search" defaultValue="santa" onChange={matches.displayMatches} placeholder="City or State of EEUU" />
                <ul className="suggestions">
                    <li>Filter for a city</li>
                    <li>or a state</li>
                    {suggestions}
                </ul>
            </form>
        </div>
    )
}

const useDataInput = (initialState) => {
    const [data, setData]   = useState(initialState);
    const [input, setInput] = useState('');

    const findMatches = (wordToMatch, cities) => {
        setData(() => {
            return cities.filter(place => {
                const regex = new RegExp(wordToMatch, 'gi');
                return place.city.match(regex) || place.state.match(regex);
            })
        });
    }

    const handleChange = (e) => {
        setInput(e.target.value);
        findMatches(e.target.value, initialState);
    }
    return {
        data,
        input,
        displayMatches: handleChange
    }
}

export default TypeAhead
