import React from "react";
import "./App.css";
import "./mediaQuery.css"
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header
          title="Travel Blog"
          style={{ color: "white", backgroundColor: "rgb(0, 0, 0, .8)" }}
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/search">Search</Link>
            <Link to="/comment">Comment</Link>
          </Navigation>
        </Header>

        <Drawer className="drawer" title="Travel Blog">
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
