import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCards.css';

const articles = [
  {
    id: 1,
    title: 'Menyapa Mayangkara: Wisata Pantai di Desa Kepuhteluk',
    image: 'https://via.placeholder.com/300x200',
    content: `
      <p><strong>Kec. Tambak, Kab. Gresik (14/7/2024)</strong> – Pantai merupakan salah satu kekayaan di Indonesia yang memiliki pesona alam yang luar biasa...</p>
      <!-- More content -->
    `
  },
  {
    id: 2,
    title: 'Artikel 2',
    image: 'https://via.placeholder.com/300x200',
    content: 'Ini adalah konten artikel kedua.'
  }
];

const HomePage = () => (
  <div className="card-container">
    {articles.map(article => (
      <Link key={article.id} to={`/blog/${article.id}`} className="card">
        <img src={article.image} alt={article.title} />
        <div className="card-title">{article.title}</div>
      </Link>
    ))}
  </div>
);

export default HomePage;