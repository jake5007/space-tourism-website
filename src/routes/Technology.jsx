import React, { useState } from "react";

const Technology = ({ techs, width }) => {
    const [ selectedTech, setSelectedTech ] = useState(techs[0]);

    const handleClick = (name) => {
        const selectedOne = techs.find(tech => tech.name === name);

        setSelectedTech(selectedOne);
    }

    return (
        <div className="bg bg--technology">
            <div className="container container--technology">
                <h3><span>03</span>SPACE LAUNCH 101</h3>
                <div className="flexbox flexbox--col num-circles-container">
                    {
                        techs.map((item, idx) => 
                        <div 
                             key={item.name}
                             className={`num-circle ${item.name === selectedTech.name ? 'num-circle--selected' : ''}`}
                             onClick={() => handleClick(item.name)}
                         >
                            <span className="font-belle">{idx + 1}</span>
                         </div>   
                     )
                    }
                </div>
                <div className="container--technology__info">
                    <h5>THE TERMINOLOGY...</h5>
                    <h1 className="font-belle">{selectedTech.name.toUpperCase()}</h1>
                    <p className="font-barlow">
                        {selectedTech.description}
                    </p>
                </div>
                <div className="container--technology__picture">
                    <img src={width.screenWidth > 768 ? selectedTech.images.portrait : selectedTech.images.landscape} alt="tech-img" />
                </div>
            </div>
        </div>
    )
}

export default Technology;