import React, {useEffect} from 'react';
import './LocalStorage.scss';

const LocalStorage = () => {
    useEffect(() => {
    
        // componentDidMount(), componentDidUpdate()
        const buttom = document.querySelector('.buttom');
        
        const handleClickSubmit = (e) => {
            e.preventDefault();
            console.dir(e.target);
            var self = e.target;
            setTimeout(() => {
                console.log('loading');
                self.defaultValue = '';
                self.classList.toggle('loading');
            }, 125);

            setTimeout(() => {
                console.log('ready');
                self.classList.toggle('ready');
                self.defaultValue = '✓';
            }, 1500);

            setTimeout(() => {
                console.log('button');
                self.defaultValue = '+ Add Item';
                self.className = 'buttom';
            }, 2500);
        }

        buttom.addEventListener('click', handleClickSubmit);
    }, []);
    return (
        <div className="local-storage-screen">
            <div className="form-content">
                <h2>LOCAL TAPAS</h2>
                <p></p>
                <ul className="plates">
                    <li>Loading Tapas...</li>
                </ul>
                <form>
                    <input type="text" name="item" placeholder="Item Name" required />
                    <input className="buttom" type="submit" value="+ Add Item" />
                </form>
            </div>
        </div>
    )
}

export default LocalStorage;
