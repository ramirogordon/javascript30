import React, {useEffect} from 'react';
import './MultipleCheckboxes.scss';

const MultipleCheckboxes = () => {
    useEffect(() => {
        const checkboxes = document.querySelectorAll('input');

        let lastCheck;
        const handleCheck = (e) => {
            let inBetween = false;
            
            if (e.target.checked && lastCheck) {
                checkboxes.forEach((checkbox) => {
                    if(checkbox === e.target || checkbox === lastCheck) {
                        inBetween = !inBetween
                    }
                    if(inBetween) {
                        checkbox.checked = true;
                    }
                })
            }

            if(e.target.checked) {
                lastCheck = e.target;
            } else {
                console.log(inBetween);
                checkboxes.forEach(checkbox => {
                    if(!inBetween) {
                        checkbox.checked = false;
                    }
                });
                lastCheck = undefined;
            }
        }

        checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));

    });
    return (
        <div className="multiple-checkboxes">
            <div className="inbox">
                <div className="item">
                    <input type="checkbox" />
                    <label>This is a inbox layout.</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Check one item</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Hold down your Shift key</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Check a lower item</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Everything in between should also be set to checked</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Try to do it without any libraries</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Just regular JavaScript</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Good Luck!</label>
                </div>
                <div className="item">
                    <input type="checkbox" />
                    <label>Don't forget to tweet your result!</label>
                </div>
            </div>
        </div>
    )
}

export default MultipleCheckboxes
