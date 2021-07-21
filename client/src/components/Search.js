import React from "react";
import { Textfield, Button, Card } from "react-mdl";
import Footer from "./Footer";

function Search() {
  return (
    <div>
      <h1>Search Design Options</h1>
      <container className="search-box">
      <Card className="text-card">
      <Textfield
        onChange={() => {}}
        label="Text..."
        style={{ width: "200px" }}
      />
      <Button>
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
