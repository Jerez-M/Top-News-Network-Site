import React, { useEffect, useState } from 'react';

const News = (props) => {
  const [name1, setName1] = useState('Loading.....');
  const [count, setCount] = useState(0);
  const [apiKey, setApiKey] = useState('056949d1e59b4c0a8ac6567a03382f10');

  useEffect(() => {
    fetchNewsData();
  }, [props.newsName]);

  const fetchNewsData = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${props.newsName}&apiKey=${apiKey}`
        // `https://newsapi.org/v2/top-headlines?q=${props.newsName}&apiKey=${apiKey}`
        );
      const data = await res.json();
      const arr = data.articles.map((p) => (
        <div className="col p-3 d-flex">
          <div className="card shadow d-flex flex-column">
            <img className="card-img-top" src={p.urlToImage} alt={p.title} />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title fw-bold">{p.title}</h6>
              <p className="card-text flex-grow-1 text-small">{p.description}</p>
              <a href={p.url} className="btn btn-primary">Read more</a>
            </div>
            <div className="card-footer">
              <span className="badge bg-secondary me-2 mb-2">#TNN</span>
              <span className="badge bg-secondary me-2 mb-2">#Top News Network</span>
            </div>
          </div>
        </div>
      ));
      setName1(arr);
    } catch (error) {
      console.log(error);
      alert("Poor Network Failure")
    }
  };

  return (
    <>
      <div className="p-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-1 mt-2 pt-2">
        {name1}
      </div>
    </>
  );
};

export default News;