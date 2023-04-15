import React from 'react';

const TopicDetails = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='w-full flex justify-between items-center border rounded-lg p-6'>
            <img src={logo} className='w-1/2' alt="topic-name" />
            <div className='text-xl font-semibold'>
                <h2>Topic: {name}</h2>
                <p>Quiz: {total}</p>
            </div>
            <button className='bg-indigo-400 text-white text-base font-medium px-8 py-3 rounded-lg hover:bg-indigo-500'>Start</button>
        </div>
    );
};

export default TopicDetails;