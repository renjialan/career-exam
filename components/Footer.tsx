import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} Career Path Exam</p>
        </footer>
    );
};

export default Footer;
