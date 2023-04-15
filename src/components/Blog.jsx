import React from 'react';

const Blog = () => {
    return (
        <div className='w-full px-3 lg:w-3/4 mx-auto text-justify'>
            <h2 className='text-2xl text-center font-bold my-10'>Blog</h2>
            <div className='bg-indigo-100 border-none rounded-lg my-3 p-5'>
                <h2 className='font-bold mb-3'>Question-1: What is the purpose of react router?</h2>
                <p>React Router is a library for handling client-side routing in a single-page application built with React. Its purpose is to allow developers to easily manage the application's URL and route the user to the appropriate page based on the current URL. It provides a declarative way to define the routes of the application and to navigate between them using links and programmatic navigation. React Router also allows for nested routes and dynamic route parameters, making it easy to build complex applications with multiple pages and views. In summary, React Router simplifies the process of handling application routing, making it easier to build scalable and maintainable single-page applications.</p>
                <br />
            </div>
            <div className='bg-indigo-100 border-none rounded-lg my-3 p-5'>
                <h2 className='font-bold mb-3'>Question-2: How does context API works?</h2>
                <p>The Context API is a way for components in a React application to share data without having to pass props down through every level of the component tree. It works by creating a "context" object that can be accessed by any component that is a descendant of a "Provider" component. The Provider component defines the data that will be available to all descendants, and any component can access that data by using the "useContext" hook. This makes it easier to share data between components that are not directly related, such as a user's authentication status or a theme setting. With the Context API, developers can avoid "prop drilling" and manage global state more efficiently in their applications.</p>
                <br />
            </div>
            <div className='bg-indigo-100 border-none rounded-lg my-3 p-5'>
                <h2 className='font-bold mb-3'>Question-3: What is useRef?</h2>
                <p>useRef is a hook in React that returns a mutable ref object. This object can be used to store a value across renders and updates without triggering a re-render of the component. useRef is commonly used to access the DOM nodes or to hold onto other values that persist across renders, such as interval IDs or previous state values. By using useRef, you can efficiently manage stateful data in your components without triggering unnecessary re-renders.</p>
                <br />
            </div>
        </div>
    );
};

export default Blog;