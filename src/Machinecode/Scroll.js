// src/InfiniteScroll.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scroll = () => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadItems();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const loadItems = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?page=${page}&limit=20`);
            setItems(prevItems => [...prevItems, ...response.data]);
            if (response.data.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error loading items:', error);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && hasMore) {
            setPage(prevPage => prevPage + 1);
            loadItems();
        }
    };

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            {hasMore && <p>Loading more items...</p>}
        </div>
    );
};

export default Scroll;
