import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const articles = [
  {
    id: 1,
    title: 'Menyapa Mayangkara: Wisata Pantai di Desa Kepuhteluk',
    content: `
      <p><strong>Kec. Tambak, Kab. Gresik (14/7/2024)</strong> – Pantai merupakan salah satu kekayaan di Indonesia yang memiliki pesona alam yang luar biasa. Keindahan pantai tidak hanya terlihat dari pasir putih dan air laut yang jernih, tetapi juga dari keberagaman ekosistem laut yang mendukung kehidupan berbagai makhluk hidup. Pantai menjadi tempat istimewa bagi wisatawan untuk menikmati aktivitas seperti menyelam, snorkeling, atau sekadar bersantai menikmati matahari terbenam yang memukau di ufuk barat. Secara geografis, Pulau Bawean dikelilingi Laut Jawa sehingga memiliki garis pantai yang panjang. Hal ini menjadikan Pulau Bawean kaya akan pantai-pantai yang indah dan menawan serta menawarkan keunikan tersendiri.</p>
      <p>Salah satu destinasi pantai di Pulau Bawean adalah Pantai Mayangkara. Pantai Mayangkara terletak di Desa Kepuhteluk, Kecamatan Tambak, Kabupaten Gresik, Jawa Timur. Di pantai ini, kita bisa menikmati pemandangan pasir putih yang berpadu dengan air laut jernih berwarna biru kehijauan. Saat air laut sedang surut, pengunjung dapat berenang atau sekadar berfoto di tengah Pantai Mayangkara.</p>
      <p>Pantai Mayangkara dapat diakses menggunakan kendaraan pribadi, baik roda dua maupun roda empat. Hanya dengan membayar Rp15.000,00 untuk kendaraan roda empat dan Rp5.000,00 untuk kendaraan roda dua, pengunjung dapat masuk ke wisata Pantai Mayangkara. Akses jalan menuju pantai sudah cukup baik sehingga memudahkan pengunjung untuk datang dan menikmati keindahan Pantai Mayangkara.</p>
      <p>Berbagai kegiatan dapat dilakukan di Pantai Mayangkara, seperti berenang di air laut yang jernih, snorkeling untuk melihat keindahan bawah laut, atau sekadar bersantai di tepi pantai. Pantai Mayangkara juga menjadi tempat yang sempurna untuk menikmati matahari terbit. Banyak pengunjung yang datang khusus untuk menikmati momen ini, mengabadikan keindahan matahari terbit dengan kamera mereka.</p>
      <p>Selain itu, Pantai Mayangkara juga menyediakan gazebo untuk pengunjung yang ingin bersantai sambil menikmati pemandangan laut yang indah. Gazebo-gazebo ini dilengkapi dengan tempat duduk yang nyaman, sehingga pengunjung dapat beristirahat setelah melakukan berbagai aktivitas di pantai. Gazebo juga menjadi tempat yang ideal untuk menikmati bekal makan siang bersama keluarga atau teman-teman.</p>
      <p>Pantai Mayangkara menawarkan banyak spot menarik untuk diabadikan. Dari pemandangan pantai yang luas, air laut yang jernih, hingga pemandangan matahari terbit yang spektakuler, semua dapat menjadi objek foto yang indah.</p>
      <p>Perjalanan menuju Pantai Mayangkara juga menawarkan pemandangan yang menarik. Sepanjang jalan, pengunjung dapat melihat hamparan sawah hijau yang luas serta sapi-sapi yang sedang merumput di padang rumput. Pemandangan ini menambah suasana pedesaan yang asri dan membuat perjalanan menjadi lebih menyenangkan. Keindahan alam pedesaan ini memberikan nuansa yang berbeda dan membuat pengalaman menuju pantai semakin berkesan.</p>
      <p>Selain itu, pengunjung juga dapat melihat pepohonan dan bukit-bukit yang mempesona. Terdapat Bukit Teletubies yang berada tepat di atas Pantai Mayangkara sehingga dapat dimanfaatkan menjadi jalur pendakian. Pengunjung juga dapat menikmati udara yang masih bersih dan sejuk, sehingga membuat wisatawan bisa menikmati keasrian Pantai Mayangkara. Dengan segala keindahannya, Pantai Mayangkara menjadi destinasi yang wajib dikunjungi bagi para pecinta pantai dan alam.</p>
      <p>Pulau Bawean, tempat Pantai Mayangkara berada, juga dikenal dengan keramahan penduduknya. Masyarakat lokal yang mayoritas berprofesi sebagai nelayan sangat terbuka dan ramah terhadap para wisatawan. Mereka sering kali dengan senang hati berbagi cerita tentang kehidupan sehari-hari, tradisi, dan budaya lokal yang unik. Pengalaman berinteraksi dengan penduduk setempat memberikan kesan yang mendalam dan memperkaya perjalanan wisatawan. Jadi, tunggu apa lagi? Ayo kunjungi Pantai Mayangkara dan rasakan sendiri pesonanya!</p>
    `
  },
  // Tambahkan artikel lain jika perlu
];

const BlogPost = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) return <div>Artikel tidak ditemukan.</div>;

  return (
    <div className="article-page">
      <div className="article-title">{article.title}</div>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  );
};

export default BlogPost;