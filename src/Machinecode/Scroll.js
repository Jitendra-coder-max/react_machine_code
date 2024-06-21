import React, { useState, useEffect } from 'react';
// import View from './View';
import './Scroll.css'
const Scroll = () => {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?` +
        new URLSearchParams({
          _limit: 9,
          _page: page,
        })
    );
    const data = await res.json();
    setResponse((oldData) => [...oldData, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);
  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  return (
    <>
     
      <div className="wrapper">
      <h1>Infinte scroll</h1>
      {response.map((resp, index) => (
        <div key={index} className="card">
          <h2>{resp.title.slice(0,15)}</h2>
          <p>{resp.body}</p>
        </div>
      ))}
    </div>



      {loading && <div className="loading"> </div>}
    </>
  );
};

export default Scroll;
