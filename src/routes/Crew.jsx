import React, { useState } from "react";

const Crew = ({ crew }) => {
    const [ selectedCrew, setSelectedCrew ] = useState(crew[0]);

    const handleClick = (name) => {
        const selectedMember = crew.find(member => member.name === name);

        setSelectedCrew(selectedMember);
    }

    return (
        <div className="bg bg--crew">
            <div className="container container--crew">
                <div className="container--crew__info">
                    <h3><span>02</span>MEET YOUR CREW</h3>
                    <h2 className="font-belle">{selectedCrew.role.toUpperCase()}</h2>
                    <h1 className="font-belle">{selectedCrew.name.toUpperCase()}</h1>
                    <p className="font-barlow">
                        {selectedCrew.bio}
                    </p>
                    <div className="flexbox circles-container">
                    {
                            crew.map((item) => 
                               <div 
                                    key={item.name}
                                    className={`circle ${selectedCrew.name === item.name ? 'circle--selected' : ''}`}
                                    onClick={() => handleClick(item.name)}
                                />   
                            )
                    }
                    </div>
                </div>
                <div className="container--crew__picture">
                    <img src={selectedCrew.images.png} alt="planet-pic" />
                </div>
            </div>
        </div>
    )
}

export default Crew;