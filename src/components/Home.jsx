import React, { useEffect, useState } from 'react';
import TopicDetails from './TopicDetails';
import Header from './Header';

const Home = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(data => setTopics(data.data))
    }, [])
    console.log(topics);
    return (
        <div className='w-3/4 mx-auto'>
            <Header></Header>
            <h2 className='text-center text-2xl font-bold my-10'>Total Topics: {topics.length}</h2>
            <div className='grid grid-cols-2 gap-6 p-6'>
                {
                    topics.map((topic) => <TopicDetails
                        key={topic.id}
                        topic={topic}
                    ></TopicDetails>)
                }
            </div>
        </div>
    );
};

export default Home;