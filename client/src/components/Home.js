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
                </div>
            </div>

            <div className='section-2'>
                <h1 className='phototitle'>Photos from places around the U.S.</h1>

                <div className='galleryDiv'>
                    {/* Populated by JS */}
                </div>

                <div className='galleryPost'>
                    <h2>Post an image!</h2>
                    <form>
                        <input type="text" placeholder="City"></input>
                        <input type="text" placeholder="State"></input>
                        <textarea className='textarea' placeholder='Comments/Notes'></textarea>
                        <input className='file' type="file" name="fileToUpload"></input>
                        <input className='upload' type="submit" value="Upload Image" name="submit"></input>                   
                        <button className='button' type="submit" value="">Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;