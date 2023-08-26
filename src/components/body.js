import React from 'react'
import News from './news'
import Nav from './nav'
import app from '../App'
import { useEffect } from 'react'
import SecondNav from './SecondNav'
import Footer from './Footer'

const Body = (props) => {
    useEffect(() => {
        // fetchNewsData();
    }, [props.newsName, props.searchResponse]);
  return (
    <>
      <div className="container mt-2 pt-1">
        <Nav/>
      </div>
      <div className='container mt-5 pt-5'>
        <SecondNav/>
      </div>
      <News newsName = {props.newsName}/>
      <Footer/>
    </>
  );
}

export default Body