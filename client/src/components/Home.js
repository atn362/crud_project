import React from 'react';
import Footer from './Footer';
import { Textfield } from 'react-mdl'

function Home() {

    return (
        <div className="home-page">
            <h1>HomePage Design Options</h1>
            <Textfield
                onChange={() => { }}
                label="Username"
                floatingLabel
                style={{ width: '200px' }}
            />
            <Textfield
                onChange={() => { }}
                label="Password"
                floatingLabel
                style={{ width: '200px' }}
            />
            <Footer />
        </div>
    );
};

export default Home;