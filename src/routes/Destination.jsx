import React, { useState } from "react";

const Destination = ({ destinations }) => {
    const [ selectedDestination, setSelectedDestination ] = useState(destinations[0]);

    const handleClick = (name) => {
        const selectedPlanet = destinations.find(item => item.name === name);

        setSelectedDestination(selectedPlanet);
    }

    return (
        <div className="bg bg--destination">
            <div className="container container--destination">
                <div className="container--destination__planet">
                    <h3><span>01</span>PICK YOUR DESTINATION</h3>
                    <img src={selectedDestination.images.png} alt="planet-pic" />
                </div>
                <div className="container--destination__info">
                    <nav>
                        {
                            destinations.map(item => 
                                <span
                                    key={item.name}
                                    className={selectedDestination.name === item.name ? 'link-selected' : ''}
                                    onClick={() => handleClick(item.name)}
                                >{item.name}</span>    
                            )
                        }
                    </nav>
                    <h1 className="font-belle">{selectedDestination.name.toUpperCase()}</h1>
                    <p className="font-barlow">
                        {selectedDestination.description}
                    </p>
                    <div className="divider" />
                    <div className="flexbox additional-container">
                        <div className="flexbox flexbox--col additional">
                            <h5>AVG. DISTANCE</h5>
                            <h3 className="font-belle">{selectedDestination.distance.toUpperCase()}</h3>
                        </div>
                        <div className="flexbox flexbox--col additional">
                            <h5>EST. TRAVEL TIME</h5>
                            <h3 className="font-belle">{selectedDestination.travel.toUpperCase()}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;