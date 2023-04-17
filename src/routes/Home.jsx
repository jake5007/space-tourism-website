import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg">
            <div className="container container--home">
                <div className="container--home__intro">
                    <span>SO, YOU WANT TO TRAVEL TO</span>
                    <h1 className="font-belle">SPACE</h1>
                    <p className="font-barlow">
                        Let’s face it; if you want to go to space, you might as well 
                        genuinely go to outer space and not hover kind of on the edge of it. 
                        Well sit back, and relax because we’ll give you a truly out of this world 
                        experience!
                    </p>
                </div>
                <Link to='/destination'>
                    <div className="container--home__explore">
                        <span className="font-belle">EXPLORE</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home;