import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "./Footer";

function Home() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/read").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3000/insert", {
      username: username,
      password: password,
    });
  };

  const updateUser = (id) => {
    Axios.put("http://localhost:3000/update", {
      id: id,
      newPassword: newPassword,
    });
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`);
  };

  return (
    <div className="user-login">
      <h2>Signup for New Users</h2>
      <hr />
      <label>Username:</label>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <label> Password:</label>
      <input
        type="text"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={addToList}>Complete Registration</button>
      <hr />
      <h3>Current User Sign In</h3>
      <hr />
      <label>Username:</label>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <label> Password:</label>
      <input
        type="text"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
	  <button onClick={addToList}>Sign In</button>
      {userList.map((val, key) => {
        return (
          <div key={key} className="User">
            {" "}
            <input
              type="text"
              placeholder="New Password"
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            />
            <button onClick={() => updateUser(val._id)}>Update</button>
            <button onClick={() => deleteUser(val._id)}>Delete</button>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default Home;
