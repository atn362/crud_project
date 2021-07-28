import React from "react";


function Results() {
    return (
        //For background image, have searched city and state as background image search paramaters!!!
        <div className='resultsbody' style={{backgroundImage: `url("https://source.unsplash.com/featured/?Minnesota,Minneapolis")`}}>
            <div className='resultstitlediv'>
                <h1 className='resultstitle'>Minneapolis, MN</h1>
            </div>

            <div  className="resultsdiv ">

                <div className="resultscolumn">
                    <h2> Restaurants </h2>
                    <p></p>
                </div>

                <div className="resultscolumn">
                    <h2> Hotels </h2>
                    <p></p>
                </div>

                <div className="resultscolumn">
                    <h2> Landmarks </h2>
                    <p></p>
                </div>

            </div >
        </div>
    );
}

export default Results;