import React from "react";
import { Textfield, Button } from "react-mdl";
import Footer from "./Footer";

function Search() {
  return (
    <div>
      <h1>Search Design Options</h1>
      <Textfield
        onChange={() => {}}
        label="Text..."
        style={{ width: "200px" }}
      />
      <Button>
        Submit
      </Button>
      <hr />
      <Footer />
    </div>
  );
}

export default Search;
