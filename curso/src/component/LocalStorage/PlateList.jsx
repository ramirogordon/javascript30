import React from 'react';
import './PlateList.scss';
const PlateList = (props) => {
    const {items} = props;
    const list = items.map((item, i) => {
        return(
            <li className="item-plate" key={i}>
                <input className="checkbox-value" type="checkbox" />
                <label className="plate-value">{item.text}</label>
            </li>
        );
    })
    return (
        <>
          {list}  
        </>
    )
}

export default PlateList
