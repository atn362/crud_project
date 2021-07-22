import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Layout>
        <Header title="Crime Stats Travel Blog" style={{ color: "white", backgroundColor:"rgb(0, 0, 0, .8)"}}>
          <Navigation>
            <Link style={{color: 'black', fontWeight: "bold", display: "block"}} to="/">Home</Link>
            <Link style={{color: 'black', fontWeight: "bold"}}to="/login">Login</Link>
            <Link style={{color: 'black', fontWeight: "bold"}}to="/search">Search</Link>
            <Link style={{color: 'black', fontWeight: "bold"}}to="/comment">Comment</Link>
          </Navigation>
        </Header>
        <Content>
          <Main></Main>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
