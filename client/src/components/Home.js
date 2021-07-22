import React from 'react'
import { Grid, Cell } from 'react-mdl'
// import Footer from './Footer';

function Home() {

    return(
        <div className='homebody'>
            <div className='section-1'>
                <div className='titlediv'>
                    <h1 className='title'>Home Design Options</h1>
                </div>

                <div className='description'>
                    <Grid className='grid'>
                        <Cell col={12}>
                            <h2> Hello! </h2>
                        </Cell>

                        <Cell col={12} className='Pcell'>
                            <p>This is a travel blog that gives crime-related information on the destinations that you want to travel to!</p>
                        </Cell>

                        <Cell col={12} className='Pcell'>
                            <p>This project was made by a small team of five coders practing React so if you have feedback or questions, shoot us an email! </p>  
                        </Cell>
                    </Grid>
                </div>

                <div className='scrollPrompt'>
                    <h2>Scroll Down</h2>
                    <h2>V</h2>
                </div>
            </div>

            <div className='section-2'>

            </div>
        </div>
    );
};

export default Home;