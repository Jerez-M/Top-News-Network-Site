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
    }, [props.newsName]);
  return (
    <>
      <Nav/>
      <div className='mt-5 pt-5'>
      </div>
      <SecondNav/>
      <News newsName = {props.newsName}/>
      <Footer/>
    </>
  );
}

export default Body