import React from 'react'
import './CssVariablesJS.scss';

const CssVariablesJS = () => {
    const handleUpdate = (event) => {
        const suffix = event.target.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
    }

    return (
        <div className="css-variables">
            <h2>Update Css Variables With <span className="h1">JS</span></h2>
            <div className="controls">
                <label htmlFor="spacing">Spacing:</label>
                <input 
                    id="spacing" 
                    type="range" 
                    name="spacing" 
                    min="10" 
                    max="52" 
                    defaultValue="10" 
                    data-sizing="px" 
                    onChange={handleUpdate} 
                />
            
                <label htmlFor="blur">Blur:</label>
                <input 
                    id="blur" 
                    type="range" 
                    name="blur" 
                    min="0" 
                    max="25" 
                    defaultValue="10" 
                    onChange={handleUpdate} 
                    data-sizing="px" 
                />
            
                <label htmlFor="base">Base Color:</label>
                <input 
                    id="base" 
                    type="color" 
                    name="base" 
                    defaultValue="#ffc600" 
                    onChange={handleUpdate} 
                />
            </div>

            <img 
                src="https://cdn.guidingtech.com/imager/media/assets/191090/Best-HD-Wallpapers-From-the-Marvel-Universe-4_4d470f76dc99e18ad75087b1b8410ea9.jpg?1524142775" 
                alt="img-background"
            />
        </div>
    )
}

export default CssVariablesJS
