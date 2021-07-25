import React from "react";
import "./App.css";
import "./mediaQuery.css";
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Image from '../src/components/images/github.png';

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

        {/* Testing for commit */}

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
          <div className="footer" style={{ background: "rgb(51, 51, 51)" }}>
            <a
              href="https://github.com/atn362/crud_project"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img style={{ height: "35px" }} src={Image} alt="Github Icon" />
            </a>

            <p style={{ color: "white" }}>
              Travel Blog created by Group 3, UofM BootCamp
            </p>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
