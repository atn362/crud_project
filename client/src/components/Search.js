import React from "react";
import { Textfield, Button, Card } from "react-mdl";
import Footer from "./Footer";

function Search() {
  return (
    <div>
      <h1>Search Design Options</h1>
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
      <hr />
      <Footer />
    </div>
  );
}

export default Search;
