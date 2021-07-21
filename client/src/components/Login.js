import React from 'react';
import Footer from './Footer';
import { Textfield, Button } from 'react-mdl'

function Home() {

    return(
        <div className="home-page">
        <h1>Login</h1>
        <Textfield
    onChange={() => {}}
    label="Username"
    floatingLabel
    style={{width: '200px',
            background: 'white', height: '30px', float: 'center', 
            }}
/>
<Textfield
    onChange={() => {}}
    label="Password"
    floatingLabel
    style={{width: '200px',  background: 'white', height: '30px',}}
/> <Button style={{}}>Submit</Button>
<hr/>
         <Footer />   
        </div>
    );
};

export default Home;