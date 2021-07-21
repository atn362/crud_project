import React from "react";
import "./App.css";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Layout>
        <Header  transparent title="Travel Blog" style={{ color: "white" }}>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/search">Search</Link>
            <Link to="/comment">Comment</Link>
          </Navigation>
        </Header>
        <Drawer style={{background: 'white'}} title="Travel Blog">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/search">Search</Link>
            <Link to="/comment">Comment</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main></Main>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
