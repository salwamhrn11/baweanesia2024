import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';
import mayangkara from '../images/artikel-mayangkara.jpg';
import bawean from '../images/artikel-bawean.jpg';
import ngajar from'../images/artikel-ngajar.jpg';

const articles = [
  {
    id: 1,
    title: 'Menyapa Mayangkara: Wisata Pantai di Desa Kepuhteluk',
    image: mayangkara,
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
  {
    id:2,
    title: 'Menilik Tradisi Pajimatan: Budaya Keramat di Dusun Carabaka, Bawean',
    image: 'https://via.placeholder.com/300x200',
    content: `
    <p><strong>Kec. Tambak, Kab. Gresik (4/7/2024)</strong> – Tradisi Pajimatan merupakan budaya turun-temurun yang dijaga oleh masyarakat Dusun Carabaka, Desa Kepuh Legundi, Pulau Bawean. Tradisi ini telah berlangsung selama kurang lebih satu abad dan tetap dijaga hingga saat ini. Pelaksanaan Pajimatan dilakukan pada bulan Dzulhijah, tepatnya setelah Hari Raya Idul Adha dan sebelum bulan Dzulhijah berakhir, biasanya pada hari Senin atau Kamis. Dusun Carabaka, pada masa lampau, diyakini sebagai dusun keramat yang sangat kental dengan budayanya.</p>
    <p>Pajimatan adalah kegiatan yang dilakukan oleh masyarakat Dusun Carabaka, Desa Kepuh Legundi, untuk menghormati leluhur mereka. Pada pelaksanaan Pajimatan, terdapat peninggalan sejarah berupa artefak dan banyak kearifan lokal yang bisa diteladani dari tradisi ini. Tradisi Pajimatan mencakup beberapa kegiatan seperti pembacaan Surah Yasin, tahlil, Al-Fatihah, doa, pembagian air suci, dan makan bersama. Tradisi ini tidak hanya memperkuat ikatan sosial di antara masyarakat, tetapi juga sebagai momen untuk merefleksikan nilai-nilai spiritual dan historis yang diwariskan oleh para leluhur.</p>
    <p>Pada tradisi ini, terdapat benda atau pusaka yang digunakan, di antaranya adalah batu panaber, kain, tongkat, buku atau kitab yang berisi informasi tentang raja-raja, keris, dan air suci. Pusaka yang digunakan dalam Tradisi Pajimatan dibersihkan terlebih dahulu dengan menggunakan air lahang. Air lahang adalah minuman alami yang diperoleh dari pohon aren. Proses pembersihan ini dianggap penting untuk menjaga kesakralan dan keaslian pusaka. Selain itu, terdapat makanan berupa ketan, tumpeng, dan ayam putih yang dibagikan kepada masyarakat Dusun Carabaka. Makanan-makanan ini juga memiliki makna simbolis sebagai bentuk rasa syukur dan kebersamaan. Air suci yang digunakan dalam Tradisi Pajimatan mengandung batu penaber yang dipercaya mampu menetralkan penyakit, sehingga disebut sebagai air suci. Batu tersebut tidak bisa dibuka sembarangan dan hanya dapat digunakan ketika Tradisi Pajimatan berlangsung, yang menunjukkan tingginya penghormatan dan kekhidmatan terhadap tradisi ini.</p>
    <p><p><strong>Pengambilan Air Suci Pajimatan</strong></p></p>
    <p>Pengambilan air dilakukan oleh keturunan dari penjaga Dusun Carabaka secara turun-temurun. Proses pencarian air suci dilakukan dengan mengamati air di setiap sungai yang ada untuk mencari air toleh. Pencarian ini dilakukan mulai dari sore untuk menandai lokasi air toleh, dan pada malam harinya, air tersebut akan dibawa ke dalam rumah. Air toleh adalah air yang bergerak berputar berlawanan arah dengan arus sungai. Air ini diibaratkan seperti orang yang menoleh, sehingga dinamakan air toleh. Untuk melihat arusnya, digunakan bantuan daun kering. Jumlah air yang diperoleh bisa menjadi pertanda cuaca jika banyak air yang diperoleh berarti pertanda hujan banyak, dan jika air yang diperoleh sedikit berarti hujan juga sedikit. Proses ini menunjukkan kearifan lokal dalam memahami alam dan lingkungan sekitar.</p>
    <p>Bapak Zainal, sebagai penjaga Dusun Carabaka, memiliki peran penting dalam mencari air suci ini. Pengambilan air suci dilaksanakan menjelang petang, tengah malam, atau dini hari. Setiap
tahun, intensitas air toleh yang diambil bisa berbeda-beda. Masyarakat percaya bahwa jumlah air yang diambil memiliki pertanda tertentu. Proses pengambilan air suci ini terkadang menghadapi kendala, seperti gangguan oleh makhluk halus atau serangga. Air suci yang digunakan harus berasal dari air toleh untuk menghindari kejadian-kejadian yang tidak diinginkan, seperti wadah air yang tiba-tiba rusak. Ada perbedaan dalam pelaksanaan Tradisi Pajimatan dulu dan sekarang, seperti penggunaan pisang yang diganti dengan ketan. Perubahan ini menunjukkan adaptasi tradisi terhadap perubahan zaman, namun tetap mempertahankan esensi dan nilai-nilai yang terkandung di dalamnya.</p>
    <p>Secara keseluruhan, Tradisi Pajimatan bukan hanya sekadar ritual, tetapi juga cerminan dari kekayaan budaya, sejarah, dan spiritualitas masyarakat Dusun Carabaka. Tradisi ini memperlihatkan bagaimana masyarakat setempat menjaga hubungan harmonis dengan alam, leluhur, dan sesama manusia, serta bagaimana mereka menyalurkan nilai-nilai tersebut kepada generasi berikutnya.</p>
    `
  },
  {
    id:3,
    title: 'Kuliner Pulau Bawean: Masakan Khas dari Desa',
    image: 'https://via.placeholder.com/300x200',
    content: `
   <p><strong>Kec. Tambak, Kab. Gresik (21/7/2024)</strong>- Pulau Bawean yang terletak di Kabupaten Gresik dan berada di utara pulau jawa merupakan surga tersembunyi milik laut jawa. Keindahan yang dimiliki oleh pulau ini sangatlah beragam, tetapi keindahan itu bukan satu-satunya keunggulan Pulau Bawean. Salah satu keunggulan yang menarik dari kehidupan masyarakat Pulau Bawean adalah makanan dan minuman tradisional desanya. Makanan desa tidak hanya lezat tetapi juga memiliki cita rasa khas yang diwariskan dari generasi ke generasi. Berikut merupakan makanan khas Pulau Bawean yang memiliki keunikan tersendiri:</p>
   <p><strong>1. Kobbhuk-Kobbhuk</strong></p>
   <p>Kobbhuk-kobbhuk atau umumnya dikenal dengan kelapa muda merupakan minuman yang banyak dijumpai di Pulau Bawean. Komoditas kelapa muda yang tersebar banyak di penjuru pulau menjadikan kelapa muda sebagai minuman yang menemani masyarakat daerah ketika sedang berkumpul. Kelapa muda di Pulau Bawean mempunyai kenikmatan tersendiri karena diambil saat masih fresh dari pohonnya. Umumnya kelapa muda akan dicampur dengan susu atau gula aren yang menambahkan cita rasa manis di minuman yang berasal dari kelapa muda ini.</p>
   <p><strong>2. Koncok-koncok</strong></p>
   <p>Koncok-koncok adalah hidangan yang biasa disajikan oleh masyarakat Pulau Bawean. Koncok-koncok awalnya dibuat untuk dijadikan kerupuk pada bagian ujung, koncok sendiri memiliki arti ujung. Koncok-koncok terbuat dari bahan dasar ikan laut, memberikan rasa yang khas. Hidangan ini biasanya disajikan dengan sambal dan menjadi oleh-oleh bagi orang yang berkunjung ke Pulau Bawean.</p>
   <p><strong>3. La'ang</strong></p>
   <p>La’ang adalah minuman yang sering ditemukan di berbagai desa di Bawean. La’ang terbuat dari bahan utama berupa getah gula aren atau nira. Cita rasa la’ang memiliki keunikan tersendiri yaitu seperti air legen (manis) dengan sedikit rasa smoky atau berasap. La’ang memiliki banyak manfaat seperti untuk mengobati diabetes, mengatasi sembelit, dan melancarkan pencernaan.</p>
   <p><strong>3. Jempot </strong></p>
   <p>Jempot adalah makanan tradisional yang terbuat dari pisang diolah dengan santan dan gula. Pisang yang telah dikukus akan dihaluskan, lalu dicampur dengan gula dan santan. Setelah itu, pisang tersebut dibentuk menjadi bola-bola kecil. Jempot memiliki rasa manis, tekstur lembut dan kenyal seperti pisang goreng. Hidangan ini biasa disajikan untuk menjamu tamu dan menjadi camilan sehari-hari masyarakat bawean.</p>
   <p><strong>5. Olahan Ikan</strong></p>
   <p>Bawean terkenal dengan olahan ikan seperti Ikan Asap, Pepes Ikan, Tongkol Bakar, dan Sambal Benggol. Ikan-ikan tersebut diolah ketika masih segar dan dipadu dengan rempah-rempah alami, menghasilkan hidangan dengan cita rasa gurih, pedas, dan manis. Proses
pengolahan tradisional seperti pemanggangan, pengukusan dalam daun pisang, dan penggorengan memberikan tekstur aroma khas yang menggugah selera.</p>
   <p><strong>6. Pempek </strong></p>
   <p>Pempek khas Bawean merupakan gabungan dari pempek biasa dan dibuat dari campuran ikan segar lokal, menghasilkan tekstur kenyal dan rasa ikan yang khas. Pempek ini biasa diisajikan dengan sambal khas Bawean yang terbuat dari gula merah, cabai, bawang putih, dan asam jawa. Hidangan ini biasanya disertai irisan timun dan taburan ebi, menciptakan sensasi rasa yang gurih. Makanan ini menjadi salah satu kuliner yang sering dijumpai di Pulau Bawean.</p>
   <p>Makanan dan minuman tradisional di Pulau Bawean adalah pewarisan kebudayaan turun-temurun berupa hidangan yang perlu dijaga. Setiap hidangan tidak hanya memberikan cita rasa yang unik, tetapi memiliki pengalaman yang berharga ketika mencobanya. Dengan mempertahankan dan melestarikan makanan desa ini, kita turut menjaga warisan budaya yang sangat berharga agar tetap lestari dan dikenal oleh generasi mendatang.</p>
   `
  },
  {
    id:4,
    title: 'Bawean Bersholawat: Lantunan Pujian Menggema di Bumi',
    image: bawean,
    content: `
    <p><strong>Kec. Sangkapura, Kab. Gresik (28/7/2024)</strong>– Sholawat merupakan bentuk pujian serta
    seruan umat muslim yang ditujukan kepada Nabi Muhammad SAW dengan tujuan memohon
    berkah Allah SWT. Melantunkan sholawat memiliki banyak keutamaan dan manfaat bagi
    seorang Muslim. Dalam hadits-hadits Nabi, disebutkan bahwa siapa saja yang bersholawat
    kepada Nabi Muhammad SAW sekali, maka Allah akan bersholawat kepadanya sepuluh kali
    lipat. Hal ini berarti Allah akan memberikan rahmat dan keberkahan yang berlimpah kepada
    orang tersebut. Selain itu, sholawat juga diyakini dapat menghapus dosa-dosa, mengangkat
    derajat, serta memberikan ketenangan dan kedamaian dalam hati. Lantunan sholawat
    seringkali digaungkan umat muslim dalam kehidupan sehari-hari ataupun kegiatan
    keagamaan. Saat ini, lantunan sholawat sudah berkembang pesat, hadir dengan berbagai
    macam versi yang menarik perhatian masyarakat.</p>
    <p>Pada tanggal 28 Juli 2024, kegiatan yang sangat istimewa dan penuh makna, "Bawean
    Bersholawat", diadakan di Kecamatan Sangkapura, Kabupaten Gresik, tepatnya di Pulau
    Bawean. Acara ini merupakan momen yang sangat dinantikan oleh masyarakat setempat,
    yang dihadiri oleh ribuan orang dari berbagai penjuru pulau untuk bersama-sama menggelar
    sholawat bersama Habib Syech bin Abdul Qodir Assegaf.</p>
    <p>Acara dimulai dengan sambutan dari Bupati Gresik, Bapak Fandi Ahmad Yani, yang
    memberikan apresiasi tinggi terhadap semangat kebersamaan dan kekompakan masyarakat
    Bawean dalam mengadakan dan menghadiri acara ini. Dalam sambutannya, Bupati
    mengungkapkan harapannya agar kegiatan seperti ini dapat terus berlangsung untuk
    memperkuat ikatan sosial dan keagamaan di tengah masyarakat.</p>
    <p>Puncak acara adalah sesi bersholawat yang dipimpin oleh Habib Syech bin Abdul Qodir
    Assegaf. Sebelum memulai sesi bersholawat, Habib Syech bin Abdul Qodir Assegaf
    memberikan pembukaan singkat yang mengungkapkan jika beliau sangat senang dan bahagia
    melihat antusiasme masyarakat terhadap acara ini. Habib Syech bin Abdul Qodir Assegaf
    juga berharap bahwa kedepannya beliau dapat menghadiri acara sholawat bersama setiap
    tahunnya di Pulau Bawean.</p>
    <p>Setelah sesi bersholawat, acara dilanjutkan dengan maulidatul hasanah, yakni ceramah
    keagamaan oleh ahli agama. Dalam ceramahnya, beliau menyampaikan pesan-pesan
    kebaikan dalam agama Islam, khususnya mengenai pentingnya salat, istighfar, bersedekah,
    dan bersholawat. Beliau mengingatkan seluruh jamaah untuk selalu menegakkan salat
    sebagai tiang agama, memperbanyak istighfar untuk memohon ampunan, bersedekah kepada
    sesama yang membutuhkan, dan terus melantunkan sholawat. Pesan-pesan ini memberikan
    pencerahan dan penguatan iman kepada seluruh peserta yang hadir, mengajak mereka untuk
    selalu mengamalkan nilai-nilai kebaikan dalam kehidupan sehari-hari.</p>
    <p>Kemudian, sesi doa bersama yang dipimpin oleh para kyai setempat. Doa ini menjadi momen
    yang khidmat, di mana seluruh masyarakat memohon berkah dan perlindungan dari Allah
    SWT. Kebersamaan dalam doa ini menguatkan rasa persaudaraan serta solidaritas di antara
    umat Muslim yang hadir. Menariknya, acara ini juga diakhiri dengan menyanyikan lagu
    kebangsaan Indonesia Raya yang dipimpin langsung oleh Habib Syech bin Abdul Qodir
    Assegaf dan dinyanyikan dengan penuh semangat oleh seluruh masyarakat.</p>
    <p>Dengan beragam rangkaian acara, mulai dari sambutan Bupati Gresik, sholawat bersama,
    ceramah agama, doa bersama, hingga menyanyikan lagu Indonesia Raya, acara ini menjadi
    contoh nyata bagaimana kegiatan keagamaan dapat mempererat persatuan dan kesatuan
    bangsa. Melalui “Bawean Bersholawat”, masyarakat Pulau Bawean menunjukkan bahwa
    kebersamaan dalam beragama dapat menjadi pilar yang penting dalam menjaga persatuan dan
    keharmonisan sosial. Oleh karena itu, diharapkan acara ini dapat menjadi tradisi yang terus
    dijaga dan dilestarikan, sehingga dapat menjadi inspirasi bagi daerah lain untuk menggelar
    kegiatan serupa yang dapat memperkuat ikatan sosial dan keagamaan di tengah masyarakat.</p>
`
  },
  {
    id: 5, 
    title: 'Mahasiswa KKN UGM Luncurkan Rumah Belajar Untuk Peningkatan Pendidikan Di Desa Kepuhteluk',
    image: ngajar,
    content:`
    <p>Dalam rangka program Kuliah Kerja Nyata (KKN) di Dusun Pacinan, tim KKN-PPM UGM telah meluncurkan program "Rumah Belajar" di Langgar Al-Hidayah Desa Kepuhteluk untuk membantu meningkatkan pengetahuan dan keterampilan anak-anak dan remaja setempat</p>
    <p>Program "Rumah Belajar" mencakup berbagai kegiatan seperti mengaji, belajar bahasa Inggris, dan matematika. Setiap sesi dirancang dengan metode pengajaran yang interaktif, melibatkan ceramah, diskusi, praktik langsung, dan permainan edukatif. Kegiatan ini dilakukan setiap ba’da maghrib selama dua hari dalam seminggu. Rumah belajar dilaksanakan selama tiga minggu dari tanggal 16 Juli – 2 Agustus 2024. Program ini diikuti oleh anak-anak usia sekolah dasar hingga remaja, dengan total partisipan sekitar 10 - 20 orang setiap sesi. Pengajar terdiri dari mahasiswa KKN Universitas Gadjah Mada.</p>
    <p>Anak-anak dan remaja di Desa Kepuhteluk menunjukkan antusiasme yang tinggi dalam mengikuti sesi pengajaran. Mereka aktif bertanya dan berpartisipasi dalam kegiatan yang diadakan. Program Rumah Belajar ini merupakan langkah kecil namun memiliki makna signifikan dalam meningkatkan kemampuan bahasa Inggris, pemahaman matematika, dan keterampilan membaca Al-Qur'an pada anak-anak dan remaja di Desa Kepuhteluk. Selain itu, program ini juga berhasil meningkatkan semangat belajar anak-anak dan mempererat hubungan sosial antar warga. </p>
    <p>Program "Rumah Belajar" telah memberikan dampak positif bagi pendidikan anak-anak di Dusun Pacinan. Tim KKN berharap program ini dapat terus berlanjut dan memberikan manfaat jangka panjang bagi masyarakat setempat.</p>
    <span class="source">Sumber: <a href="https://desakepuhteluk.gresikkab.go.id/artikel/2024/8/8/mahasiswa-kkn-ugm-luncurkan-rumah-belajar-untuk-peningkatan-pendidikan-di-desa-kepuhteluk" target="_blank">https://desakepuhteluk.gresikkab.go.id/artikel/2024/8/8/mahasiswa-kkn-ugm-luncurkan-rumah-belajar-untuk-peningkatan-pendidikan-di-desa-kepuhteluk</a></span>
    `
  }
];

const BlogPost = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id));
  
    if (!article) return <div>Artikel tidak ditemukan.</div>;
  
    return (
      <div className="article-page">
        <div className="article-title">{article.title}</div>
        <img src={article.image} alt={article.title} className="article-image" />
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    );
  };
  
  export default BlogPost;