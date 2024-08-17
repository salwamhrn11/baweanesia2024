import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCards.css';
import mayangkara from '../images/artikel-mayangkara.jpg'
import bawean from '../images/artikel-bawean.jpg'
import ngajar from '../images/artikel-ngajar.jpg'

const articles = [
  {
    id: 1,
    title: 'Menyapa Mayangkara: Wisata Pantai di Desa Kepuhteluk',
    image: mayangkara,
    content: `
      <p><strong>Kec. Tambak, Kab. Gresik (14/7/2024)</strong> – Pantai merupakan salah satu kekayaan di Indonesia yang memiliki pesona alam yang luar biasa...</p>
      <!-- More content -->
    `
  },
  {
    id: 2,
    title: 'Menilik Tradisi Pajimatan: Budaya Keramat di Dusun Carabaka, Bawean',
    image: 'https://via.placeholder.com/300x200',
    content: `
    <p><strong>Kec. Tambak, Kab. Gresik (4/7/2024)</strong> – Tradisi Pajimatan merupakan budaya turun-temurun...</p>

    `
  },
  {
    id: 3,
    title: 'Kuliner Pulau Bawean: Masakan Khas dari Desa',
    image: 'https://via.placeholder.com/300x200',
    content: `
    <p><strong>Kec. Tambak, Kab. Gresik (21/7/2024)</strong> – Pulau Bawean yang terletak di Kabupaten Gresik...</p>

    `
  },
  {
    id: 4,
    title: 'Bawean Bersholawat: Lantunan Pujian Menggema di Bumi',
    image: bawean,
    content: `
    <p><strong>Kec. Tambak, Kab. Gresik (28/7/2024)</strong> – Sholawat merupakan bentuk pujian serta...</p>
    `
  },
  {
    id:5,
    title: 'Mahasiswa KKN UGM Luncurkan Rumah Belajar untuk Peningkatan Pendidikan di Desa Kepuhteluk',
    image: ngajar,
    content: `
    <p>Dalam rangka program Kuliah Kerja Nyata (KKN) di Dusun Pacinan, tim KKN-PPM UGM telah meluncurkan program "Rumah Belajar" ...</p>
    `
  }
];

const HomePage = () => (
<div class="wrapper">
  <div className="card-container">
    {articles.map(article => (
      <Link key={article.id} to={`/blog/${article.id}`} className="card">
        <img src={article.image} alt={article.title} />
        <div className="card-title">{article.title}</div>
      </Link>
    ))}
  </div>
</div>
);

export default HomePage;