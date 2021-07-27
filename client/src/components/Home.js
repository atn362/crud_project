import React from "react";
import { Grid, Cell } from "react-mdl";


function Home() {
  return (
    <div className="homebody">
      <div className="section-1">
        <div className="titlediv">
          <h1 className="title">Now that quarantine is over, travel with us</h1>
        </div>

        <div className="description">
          <Grid>
            <Cell col={12}>
              <h2> Hello! </h2>
            </Cell>

            <Cell col={12} className="Pcell">
              <p>
                This is a travel blog that gives crime-related information on
                the destinations that you want to travel to!
              </p>
            </Cell>

            <Cell col={12} className="Pcell">
              <p>
                This project was made by a small team of six coders practing
                React so if you have feedback or questions, shoot us an email!{" "}
              </p>
            </Cell>

            <Cell col={12} className="Pcell">
              <p>
                Scroll down to see images from around the USA!
              </p>
            </Cell>
          </Grid>
        </div>
      </div>
      <div className="section-2">
        <h1 className="phototitle">Photos from places around the U.S.</h1>
          
        <div className="galleryDiv">{/* Populated by JS */}</div>

        <div className="galleryPost">
          <h2>Post an image!</h2>
          <form>
            <input
              className="galleryinput"
              type="text"
              placeholder="City"
            ></input>
            <input
              className="galleryinput"
              type="text"
              placeholder="State"
            ></input>
            <textarea
              className="textarea"
              placeholder="Comments/Notes"
            ></textarea>
            <input className="file" type="file" name="fileToUpload"></input>
            <input
              className="upload"
              type="submit"
              value="Upload Image"
              name="submit"
            ></input>
            <button className="gallerybutton" type="submit" value="">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
