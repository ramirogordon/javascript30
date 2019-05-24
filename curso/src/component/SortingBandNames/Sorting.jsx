import React from 'react';
import WrapperSortingScreen from './Styled/WrapperSortingScreen';
import SortingBand from './Styled/SortingBand';
import Ul from './Styled/Ul';
import Li from './Styled/Li';

const Sorting = () => {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


    // const isTheAorOh = (band, flag) => {
    //     return flag === 'first' ? {
    //         firstA: band[0] === 'A' || band[0] === 'An',
    //         firstThe: band[0] === 'The',
    //         firstOh: band[0] === 'Oh'
    //     } : {
    //         secondA: band[0] === 'A' || band[0] === 'An',
    //         secondThe: band[0] === 'The',
    //         secondOh: band[0] === 'Oh'
    //     }
    // };
    // const sortBands = bands.sort((firstBand, secondBand) => {
    //     const firstSplit = firstBand.split(' ');
    //     const secondSplit = secondBand.split(' ');
    //     let compareFirst, compareSecond;

    //     const { firstA, firstThe, firstOh } = isTheAorOh(firstSplit, 'first');
    //     const { secondA, secondThe, secondOh } = isTheAorOh(secondSplit, 'second');

    //     firstA || firstThe || firstOh ? compareFirst = firstSplit[1] : compareFirst = firstSplit[0];
    //     secondA || secondThe || secondOh ? compareSecond = secondSplit[1] : compareSecond = secondSplit[0];
    //     return compareFirst > compareSecond ? 1 : -1;
    // });

    const strip = (bandName) => {
        return bandName.replace(/^(a |the |an |oh )/i, '').trim();
    }

    const sortBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

    console.log(sortBands);
    const listBands = sortBands.map((band, i) => {
        console.log(i, band);
        return (
            <Li key={i} index={i}>{band}</Li>
        );
    });

    return (
        <WrapperSortingScreen>
            <SortingBand>
                <Ul>
                    {listBands}
                </Ul>
            </SortingBand>
        </WrapperSortingScreen>
    )
}

export default Sorting;
