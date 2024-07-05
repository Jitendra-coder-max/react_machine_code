// import { useState } from "react"
import React, { useEffect, useState } from "react";
import "./InfineScroll.css";
const InfineScroll = () => {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(0);
  const[loading, setLoading] = useState(false)

  const AddData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?` +
        new URLSearchParams({
          _limit: 9,
          _page: page,
        })
    );

    const data = await res.json();
    setResponse((oldData) => [...oldData, ...data]);
    setLoading(false)
  };

  useEffect(() => {
    AddData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop +2 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
      setLoading(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  },[]);

  return (
    <>
    <div>
      InfineScroll Y
      {response.map((data,index) => (
        <div key={index} className="card">
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
        </div>
      ))}
    </div>
    {loading &&<div>...Loading</div>}
    </>
  );
};

export default InfineScroll;
