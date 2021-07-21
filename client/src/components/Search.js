import React from "react";
import { Textfield, Button, Card } from "react-mdl";
import Footer from "./Footer";

function Search() {
  return (
    <div>
      <h1>Search Design Options</h1>
      <container style={{display: 'flex', justifyContent: 'center'}} className="search-box">
      <Card style={{background:"#d3d3d3", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25%'}}> 
      <Textfield
        onChange={() => {}}
        label="Enter Desired City"
        style={{ width: "200px", color: 'black' }}
      />
      <Button style={{background: 'blue', width: '50%', color: 'grey', borderRadius: '25%'}}>
        Submit
      </Button>
      </Card>
      </container>
      <hr />
      <Footer />
    </div>
  );
}

export default Search;
