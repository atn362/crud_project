import React from "react";
import {Restaurants} from './restaurants';
import {Lodging} from './lodging';
import {Entertainment} from './entertainment';

function Results() {
    return (
        //For background image, have searched city and state as background image search paramaters!!!
        <div className='resultsbody' style={{backgroundImage: `url("https://source.unsplash.com/featured/?Minnesota,Minneapolis")`}}>
            <div className='resultstitlediv'>
                <h1 className='resultstitle'>Minneapolis, MN</h1>
            </div>

            <div  className="resultsdiv ">
                <div className="restaurantscolumn">
                    <h2> Restaurants </h2>
                    <Restaurants />
                </div>

                <div className="lodgingcolumn">
                    <h2> Hotels </h2>
                    <Lodging />
                </div>

                <div className="entertainmentcolumn">
                    <h2> Entertainment </h2>
                    <Entertainment />
                </div>
            </div >
        </div>
    );
}

export default Results;