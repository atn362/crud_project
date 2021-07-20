import React from 'react';
import { Textfield, Button } from 'react-mdl';

function Search() {

    return(
        <div>
        <h1>Search Design Options</h1>
        <Textfield
    onChange={() => {}}
    label="Text..."
    style={{width: '200px'}}
/>
        <Button>Submit</Button>
        </div>
    );
};

export default Search;