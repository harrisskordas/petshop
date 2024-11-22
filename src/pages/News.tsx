import React from 'react';
import './News.css'; // Add styles for News page

const News: React.FC = () => {
  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        <li>Big Sale Event This Weekend!</li>
        <li>New Pet Products Now Available in Store</li>
      </ul>
    </div>
  );
};

export default News;