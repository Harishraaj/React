import React from "react";
import "./App.css";
function App() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  var today = new Date(),
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <div>
      <h2>
        Today date: {date} Time :{time}
      </h2>
      <button className="button">click</button>
    </div>
  );
}

export default App;
