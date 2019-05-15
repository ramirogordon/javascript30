import React from 'react'
import '../Styles/CssVariablesJS.scss';

const CssVariablesJS = () => {
    return (
        <div className="css-variables">
            <h2>Update Css Variables With <span className="h1">JS</span></h2>
            <div className="controls">
                <label for="spacing">Spacing:</label>
                <input id="spacing" type="range" name="spacing" min="10" max="200" value="30" data-sizing="px" />
            
                <label for="blur">Blur:</label>
                <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px" />
            
                <label for="base">Base Color:</label>
                <input id="base" type="color" name="base" value="#ffc600" />
            </div>

            <img 
                src="https://cdn.guidingtech.com/imager/media/assets/191090/Best-HD-Wallpapers-From-the-Marvel-Universe-4_4d470f76dc99e18ad75087b1b8410ea9.jpg?1524142775" 
                alt="img-background"
            />
        </div>
    )
}

export default CssVariablesJS
