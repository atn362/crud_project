import React from 'react';
import Footer from './Footer';
import { Textfield, Button } from 'react-mdl'
function Home() {
    return(
        <div className="home-page">
        
    {/* -- main heading -- */}
        <h1
            style={{
                margin:"0px",
            }}
        >Login</h1>
    {/* -- subheading -- */}
        <p
            style={{
                fontSize: "30px",
                margin: "0px 0px 20px 0px",
                color:"white",
                fontOutline: "1px white solid"
            }}
        >and see the world</p>
        
    {/* -- user inpute fields -- */}
        <Textfield
            onChange={() => {}}
            label="Username"
            floatingLabel
            style={{
                height: '44px',
                width: '240px',
                justifyContent: 'center', 
                margin: "0px 10px 0px 0px", 
                borderRadius: "5px", 
                background: 'white',   
                opacity: "0.75",
                boxShadow: "5px 10px 15px black"
            }}
        />
        <Textfield
            onChange={() => {}}
            label="Password"
            floatingLabel
            style={{
                height: '44px',
                width: '240px',  
                justifyContent: 'center',
                margin: "0px 0px 0px 10px",
                borderRadius: "5px", 
                background: 'white', 
                opacity: "0.75", 
                boxShadow: "5px 10px 15px black" 
                
            }}
        /> 
    {/* -- submit button -- */}        
        
        <br></br> {/* -- moves button to the next line -- */}
    
        <Button 
            style={{
                height: '40px',
                width: '200px',  
                margin: "30px 0px 8px 0px",
                borderRadius: "5px", 
                background: "white",
                boxShadow: "5px 10px 15px black"
            }}
        
        >Login</Button>
        
        <br></br>
        <Button 
            style={{
                height: '40px',
                width: '200px',  
                margin: "10px 0px 10px 0px",
                borderRadius: "5px", 
                background: "white",
                boxShadow: "5px 10px 15px black"
            }}
        
        >Create an account</Button>
    
    {/* -- bottom of the page -- */}
        <hr/>
         <Footer />   
        </div>
    );
};
/* -- exporting -- */
export default Home;