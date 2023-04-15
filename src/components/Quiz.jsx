import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions[0]);
    return (
        <div className='w-3/4 mx-auto my-6'>
            <h2 className='text-2xl text-center font-bold my-6'>Quiz of {quiz.data.name}</h2>
            <div className='grid grid-cols-2 gap-6'>
                {
                    quiz.data.questions.map((item) => <QuizDetails
                        key={item.id}
                        item={item}
                    ></QuizDetails>)
                }
            </div>

        </div>
    );
};

export default Quiz;