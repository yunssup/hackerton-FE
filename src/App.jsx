import "./App.css";
import Hello from "./component/Hello";
import Choice from "./component/Choice";
import Start from "./component/Start";
import FirstPage from "./component/FirstPage";
import Footer from "./base/Footer";
import Signup from "./component/Signup";
import Readsns from "./component/Readsns";
import Writesns from "./component/Writesns";
import Readedit from "./component/Readedit";
import Writeedit from "./component/Writeedit";
import Mainsns from "./component/Mainsns";
import React, { useEffect, useState } from "react";

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
useEffect(() => {
  setScreenSize();
});

return <div></div>;

export default App;
