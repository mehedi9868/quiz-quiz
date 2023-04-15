import React from 'react';

const Header = () => {
    return (
        <div className="w-full mx-auto bg-indigo-100 flex items-center">
            <div className="w-full p-8">
                <h2 className="text-2xl font-bold mb-4">Test Your Knowledge!</h2>
                <p className="text-gray-700 text-justify font-normal text-xl">
                    Welcome to our quiz website! Test your skills in React, JavaScript,
                    CSS, and Git with our challenging quizzes. Whether you're a beginner
                    looking to learn more or an experienced developer looking to test
                    your knowledge, we have quizzes for you. Take one quiz or take them
                    all and see how you stack up against your peers. Good luck!
                </p>
            </div>
            <div className="w-full p-8">
                <img
                    src="/quiz.jpg" alt="Quiz Image" className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Header;