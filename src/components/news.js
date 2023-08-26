import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';

const News = (props) => {
  const [name1, setName1] = useState([]);
  const [count, setCount] = useState(0);
  const [apiKey, setApiKey] = useState('056949d1e59b4c0a8ac6567a03382f10');


  useEffect(() => {
    fetchNewsData();
  }, [props.newsName]);

  // console.log("News Search Response in News.js is: ", props.searchResponse)

  const fetchNewsData = async () => {
    document.querySelector('#loader').classList.add('spinner-border')
    console.log("News newsName parameter in news.js is: ", props.newsName)
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${props.newsName}&apiKey=${apiKey}`
        // `https://newsapi.org/v2/top-headlines?q=${props.newsName}&apiKey=${apiKey}`
        );
      const data = await res.json();
      if(data?.status === 'ok') {
        document.querySelector('#loader').classList.remove('spinner-border')
        document.querySelector('#loader').classList.add('d-none')
        console.log("News Response is: ", data)
        const arr = data.articles.map((p) => (
        
          <div className="card shadow-lg border-0 mx-1 mb-5" style={{width: '300px'}}>
            <img className="card-img-top" src={p.urlToImage} alt={p.title}/>
            <div className="card-body p-4">
              <h6 className="card-title fw-bold">{p.title}</h6>
              <p className="card-text small text-justify">{p.description} <a href={p.url} target='_blank' className="text-decoration-none">Read more...</a></p>
            </div>
            <div className="card-footer">
              <span className="badge bg-secondary me-2 mb-2">#TNN</span>
              <span className="badge bg-secondary me-2 mb-2">#Top News Network</span>
            </div>
          </div>
        
        ));
        setName1(arr);
      }
    
    } catch (error) {
      console.log(error);
      alert("Poor Network Failure")
    }
  };

  return (
    <>
      <div className='container-fluid d-flex flex-wrap justify-content-evenly my-5'>
        <div id='loader' className='text-center'></div>
        {name1}
      </div>
    </>
  );
};

export default News;