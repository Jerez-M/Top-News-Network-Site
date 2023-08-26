import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Body from "./components/body";
import News from "./components/news";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./components/nav";
import {BrowserRouter,Switch,Route,Link, useParams} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";
import SecondNav from "./components/SecondNav";


const Search = () => {
  const { searchQuery } = useParams();

  return <Body newsName={searchQuery} />;
};


ReactDOM.render(
  <BrowserRouter>
  <>
    {/* Links in Nav */}
    <Nav />
    <Route exact path="/"><Body newsName="World" /></Route>
    <Route path="/sports"><Body newsName="Sports" /></Route>
    <Route path="/business"><Body newsName="business" /></Route>
    <Route path="/entertainment"><Body newsName="entertainment" /></Route>
    <Route path="/science"><Body newsName="science" /></Route>
    <Route path="/technology"><Body newsName="technology" /></Route>
    <Route path="/general"><Body newsName="general" /></Route>
    <Route path="/health"><Body newsName="health" /></Route>
    <Route path="/search/:searchQuery"><Search /></Route>

    {/* Links in SecondNav */}
    {/* <SecondNav /> */}
    <Route path="/politics"><Body newsName="politics" /></Route>
    <Route path="/education"><Body newsName="education" /></Route>
    <Route path="/football"><Body newsName="football" /></Route>
    <Route path="/climate"><Body newsName="climate" /></Route>
    <Route path="/travel"><Body newsName="travel" /></Route>
    <Route path="/culture"><Body newsName="culture" /></Route>
    <Route path="/music"><Body newsName="music" /></Route>
    <Route path="/food"><Body newsName="food" /></Route>

  </>
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

