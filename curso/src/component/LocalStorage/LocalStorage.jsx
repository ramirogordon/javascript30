import React, { useState, useEffect } from 'react';
import './LocalStorage.scss';
import PlateList from './PlateList';

const LocalStorage = () => {
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const buttom = document.querySelector('.button');
        const form = e.target;
        var self = buttom;
        console.dir(buttom);
        self.disabled = true;
        
        setTimeout(() => {
            self.defaultValue = '';
            self.classList.toggle('loading');
        }, 125);

        setTimeout(() => {
            const text = (form.querySelector('[name=item]')).value;
            const item = {
                text,
                done: false
            };
            setItems([...items, item]);
            self.classList.toggle('ready');
            self.defaultValue = '✓';
            console.dir(buttom.disabled);

            form.reset();
        }, 1500);

        setTimeout(() => {
            self.defaultValue = '+ Add Item';
            self.className = 'button';
            self.disabled = false;
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
                    <input className="button" type="submit" value="+ Add Item"  />
                </form>
            </div>
        </div>
    )
}

export default LocalStorage;
