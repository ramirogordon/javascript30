import React, { useState, useEffect } from 'react';
import './LocalStorage.scss';
import PlateList from './PlateList';

const LocalStorage = () => {
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        var button = form.button;
        button.disabled = true;
        
        setTimeout(() => {
            button.defaultValue = '';
            button.classList.toggle('loading');
        }, 125);

        setTimeout(() => {
            const text = form.item.value;
            const item = {
                text,
                done: false
            };
            setItems([...items, item]);
            button.classList.toggle('ready');
            button.defaultValue = '✓';

            form.reset();
        }, 1500);

        setTimeout(() => {
            button.defaultValue = '+ Add Item';
            button.className = 'button';
            button.disabled = false;
        }, 2500);
    }

    return (
        <div className="local-storage-screen">
            <div className="form-content">
                <h2>LOCAL TAPAS</h2>
                <ul className="plates">
                    <PlateList items={items} />
                </ul>
                <form className="add-items" onSubmit={handleSubmit}>
                    <input type="text" name="item" placeholder="Item Name" required />
                    <input className="button" name="button" type="submit" value="+ Add Item"  />
                </form>
            </div>
        </div>
    )
}

export default LocalStorage;
