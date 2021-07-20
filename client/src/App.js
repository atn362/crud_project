import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import { Link } from 'react-router-dom';
import Main from './components/Main'


function App() {
  return (
    <div className="App">
        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Crime Stats Blog" style={{color: 'white'}}>
            <Navigation>
               <Link to="/">Home</Link>
               <Link to="/search">Search</Link>
               <Link to="/comment">Comment</Link>
            </Navigation>
        </Header>
        <Drawer title="Crime Stats Blog">
            <Navigation>
               <Link to="/">Home</Link>
               <Link to="/search">Search</Link>
               <Link to="/comment">Comment</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main></Main>
          </Content>
    </Layout>
    <SearchBar />
    </div>
  );
}

export default App;
