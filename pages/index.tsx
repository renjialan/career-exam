import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />

            <main className="flex flex-col items-center justify-center flex-grow">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Discover Your Career Path
                </h2>
                <p className="text-xl text-gray-600 text-center mb-6">
                    Take our quiz to explore careers that match your skills and interests.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Start Quiz
                </button>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
