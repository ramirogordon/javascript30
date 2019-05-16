import React from 'react';
import './TypeAhead.scss';
import { ENODATA } from 'constants';

const TypeAhead = () => {
    // const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    // const cities = [];
    // fetch(endpoint)
    //     .then(response => response.json())
    //     .then(data => cities.push(...data));
    // console.log(cities);

    // const findMatches = (wordToMatch, cities) => {
    //     return cities.filter(place => {
    //         return place.city.match
    //     })
    // }

    return (
        <div className="type-ahead-screen">
            <form className="search-form">
                <input type="text" className="search" placeholder="City or State of EEUU" />
                <ul className="suggestions">
                    <li>Filter for a city</li>
                    <li>or a state</li>
                </ul>
            </form>
        </div>
    )
}

export default TypeAhead
