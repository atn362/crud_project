import React, { useState, useEffect } from "react";
import Footer from "./Footer";

function Home() {
  
 return (
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
                margin: "20px 0px 10px 0px",
                borderRadius: "5px", 

                background: "white",
                boxShadow: "5px 10px 15px black"
            }}
        
        >Submit</Button>
        
    
    {/* -- bottom of the page -- */}
        <hr/>
         <Footer />   
        </div>
        <div style={{background: 'blue'}} class="mdl-layout mdl-js-layout mdl-color--grey-100">
	<main class="mdl-layout__content">
		<div class="mdl-card mdl-shadow--6dp">
			<div class="mdl-card__title mdl-color--primary mdl-color-text--white">
				<h2 class="mdl-card__title-text">Login</h2>
			</div>
	  	<div class="mdl-card__supporting-text">
				<form action="#">
					<div class="mdl-textfield mdl-js-textfield">
						<input class="mdl-textfield__input" type="text" id="username" />
						<label class="mdl-textfield__label" for="email">Username</label>
					</div>
					<div class="mdl-textfield mdl-js-textfield">
						<input class="mdl-textfield__input" type="password" id="userpass" />
						<label class="mdl-textfield__label" for="userpass">Password</label>
					</div>
				</form>
			</div>
			<div class="mdl-card__actions mdl-card--border">
				<button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Sign In </button>
			</div>
		</div>
	</main>
    <hr />
    <Footer />
</div>
    );
};


/* -- exporting -- */
export default Home;
