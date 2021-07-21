import React from "react";
import { Textfield, Button, Card } from "react-mdl";
import Footer from "./Footer";

function Search() {
  return (
    <div>
      <h1>Search Design Options</h1>
      <container style={{display: 'flex', justifyContent: 'center'}} className="search-box">
      <Card> 
      <Textfield
        onChange={() => {}}
        label="Text..."
        style={{ width: "200px" }}
      />
      <Button style={{background: 'blue', width: '50%'}}>
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
