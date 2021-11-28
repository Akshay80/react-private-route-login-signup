import React from "react";
import './home.css'
function Home({history}) {
  const logout = () => {
    localStorage.clear()
    history.push('/login')
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <div>
        <h3>I am Home</h3>
      </div>
      <div>
        <button type="submit" className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
