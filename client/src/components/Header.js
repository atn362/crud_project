import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


function Head() {
    return(
        <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Crime Stats Blog" style={{color: 'white'}}>
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Search</a>
                <a href="#">Comment</a>
            </Navigation>
        </Header>
        <Drawer title="Crime Stats Blog">
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Search</a>
                <a href="#">Comment</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
    );
};

export default Head;

