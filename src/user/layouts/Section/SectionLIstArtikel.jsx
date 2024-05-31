import React, { useState, useEffect } from "react";
import CardArtikel from "../../components/cardArtikel";
import JudulFitur from "../../components/JudulFitur";
import Pagination from "../../components/paginationUser";
import { Link } from "react-router-dom";

function ArtikelList() {
  const articles = [
    {
      id: 1,
      imageSrc: "/assets/article1.jpg",
      title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
      description: [
        "Keterlibatan ayah dalam pengasuhan anak memiliki peran yang tak tergantikan dalam membangun fondasi kehidupan anak yang sehat dan berkualitas. Ayah yang terlibat aktif dalam kehidupan anak membantu menciptakan ikatan emosional yang kokoh antara ayah dan anak. Kehadiran dan keterlibatan ayah dalam kehidupan sehari-hari anak dapat memberikan rasa keamanan dan stabilitas yang penting bagi perkembangan anak. Anak-anak yang memiliki hubungan yang baik dengan ayah cenderung memiliki tingkat kepercayaan diri yang lebih tinggi, yang merupakan modal penting dalam menghadapi berbagai situasi dalam kehidupan.",
        "Selain itu, keterlibatan ayah dalam pengasuhan juga berdampak positif pada perkembangan kognitif anak. Ayah sering kali memperkenalkan anak pada pengalaman-pengalaman baru yang menantang secara intelektual. Interaksi ini membantu meningkatkan kemampuan berpikir kritis, kreativitas, serta kemampuan memecahkan masalah anak. Selain itu, peran ayah dalam memperluas wawasan dan kosakata anak juga sangat berarti dalam pembentukan kecerdasan anak.",
        "Selanjutnya, keterlibatan ayah dalam pengasuhan juga memberikan dampak positif dalam hal pengembangan keterampilan sosial anak. Ayah memberikan contoh yang baik dalam hal komunikasi dan interaksi sosial, yang dapat menjadi model bagi anak dalam membangun hubungan yang sehat dengan orang lain. Selain itu, ayah juga memberikan pandangan yang berbeda dalam memandang dunia, yang dapat memperkaya pemahaman anak tentang lingkungan sekitarnya.",
        "Terakhir, keterlibatan ayah dalam pengasuhan juga berperan dalam memberikan dukungan emosional dan mental bagi anak. Anak yang merasa didukung oleh ayahnya cenderung lebih mampu menghadapi tantangan dan stres dalam kehidupan. Dukungan ayah juga memberikan rasa percaya diri dan harga diri yang kuat pada anak. Oleh karena itu, keterlibatan ayah dalam pengasuhan anak memiliki peran yang sangat penting dalam membentuk individu yang mandiri, tangguh, dan berkualitas.",
      ],
      date: "31 Februari 2024",
      author: "Anita Putri",
    },
    {
      id: 2,
      imageSrc: "/assets/article2.jpg",
      title: "Mengatasi Tantangan Parenting di Era Digital",
      description: [
        "Parenting di era digital membawa tantangan baru bagi orangtua dalam mendidik dan mengasuh anak-anak mereka. Salah satu tantangan utama adalah mengelola waktu screen time anak. Dalam era di mana teknologi begitu meresap dalam kehidupan sehari-hari, penting bagi orangtua untuk membatasi waktu anak menggunakan gadget agar tidak berdampak negatif pada perkembangan fisik dan mental mereka.",
        "Selain itu, orangtua juga dihadapkan pada tantangan dalam mengawasi konten yang dikonsumsi oleh anak-anak mereka di internet. Dengan begitu banyaknya informasi yang tersedia secara online, orangtua perlu aktif dalam mengawasi dan membimbing anak-anak mereka untuk mengonsumsi konten yang positif dan mendidik. Ini dapat dilakukan dengan membimbing anak dalam memilih konten yang sesuai dengan nilai-nilai dan kebutuhan perkembangan mereka.",
        "Tantangan lainnya adalah memahami dan mengelola risiko yang terkait dengan kehadiran online anak-anak. Hal ini meliputi keamanan dan privasi online anak, serta risiko terpapar pada konten yang tidak pantas. Orangtua perlu aktif dalam memberikan pemahaman kepada anak tentang pentingnya keamanan online dan bagaimana cara berperilaku yang aman di dunia maya.",
        "Dalam menghadapi tantangan parenting di era digital, penting bagi orangtua untuk membangun komunikasi yang baik dengan anak-anak mereka. Dengan berkomunikasi secara terbuka dan jujur, orangtua dapat memahami lebih baik tentang kebutuhan dan kekhawatiran anak-anak mereka terkait penggunaan teknologi. Hal ini juga membantu menciptakan hubungan yang kuat antara orangtua dan anak, sehingga mereka dapat bekerja sama dalam mengatasi tantangan yang ada.",
      ],
      date: "28 April 2024",
      author: "Talitha Prama Nindya",
    },
    {
      id: 3,
      imageSrc: "/assets/article3.jpg",
      title:
        "Bagaimana Menentukan Usia yang Tepat Untuk Anak Memulai Berpuasa?",
      description: [
        "Berpuasa merupakan salah satu kewajiban umat Muslim yang harus dilakukan setelah mencapai usia baligh atau dewasa. Namun, sebelum mengajak anak untuk berpuasa penuh, penting untuk memahamkan mereka tentang arti dan tujuan puasa. Menurut Kementerian Agama Republik Indonesia, puasa adalah menahan diri dari segala sesuatu yang membatalkan puasa mulai dari terbit fajar sampai terbenamnya matahari, disertai dengan niat-niat tertentu. Pengertian ini penting agar anak memahami bahwa puasa bukan hanya menahan makan dan minum, tetapi juga menahan hawa nafsu serta perbuatan dan perkataan tidak baik yang dilarang oleh agama.",
        "Usia anak wajib puasa umumnya dimulai saat mereka sudah baligh atau dewasa, yang biasanya terjadi saat anak memasuki usia 10 tahun. Namun, sebagian besar anak sudah mulai diajarkan berpuasa pada usia 7 tahun dengan memperhatikan kondisi fisik dan kemampuan tubuh mereka. Anak-anak usia 7 tahun diperbolehkan untuk berpuasa penuh maupun setengah hari. Salah satu pertimbangan dan tanda bahwa anak sudah siap untuk berpuasa adalah memiliki berat badan yang sesuai dengan usianya. Jika anak dalam kondisi sehat dan berat badannya sesuai dengan usianya, maka tidak masalah untuk mengajari mereka latihan berpuasa.",
        "Selain usia, penting untuk memperhatikan kesiapan anak dalam menghadapi puasa. Orang tua perlu memperhatikan kemampuan anak untuk menahan lapar dan haus tanpa membahayakan kesehatannya. Jika anak menunjukkan ketertarikan dan kesiapan untuk berpuasa, orang tua dapat memberikan dukungan dan bimbingan yang diperlukan. Sebelum memutuskan untuk mengajak anak berpuasa, disarankan untuk berkonsultasi dengan ahli agama dan dokter untuk mendapatkan panduan yang lebih spesifik sesuai dengan kondisi anak. Hal ini penting untuk memastikan bahwa anak dapat melaksanakan puasa dengan baik dan aman bagi kesehatannya.",
      ],
      date: "11 Januari 2024",
      author: "Mochammad Ifan Fadillah",
    },
    {
      id: 4,
      imageSrc: "/assets/article4.png",
      title: "Mengembangkan Rasa Percaya Diri Anak",
      description: [
        "Mengembangkan rasa percaya diri anak merupakan salah satu hal penting dalam proses pendidikan dan pengasuhan. Orang tua memiliki peran yang besar dalam membantu anak membangun rasa percaya diri yang kuat. Salah satu cara yang efektif adalah dengan memberikan dukungan dan pujian yang positif atas pencapaian dan usaha yang dilakukan oleh anak. Dengan memberikan dorongan positif ini, anak akan merasa dihargai dan termotivasi untuk terus berkembang.",
        "Selain itu, penting bagi orang tua untuk memberikan kesempatan kepada anak untuk belajar mandiri dan mengambil keputusan. Memberikan tanggung jawab yang sesuai dengan usia dan kemampuan anak dapat membantu mereka merasa lebih percaya diri dalam menghadapi berbagai situasi. Selain itu, memberikan ruang bagi anak untuk bereksplorasi dan mencoba hal-hal baru juga dapat membantu mereka mengembangkan keterampilan dan percaya diri.",
        "Komunikasi yang terbuka antara orang tua dan anak juga merupakan kunci penting dalam mengembangkan rasa percaya diri anak. Mendengarkan dengan penuh perhatian atas apa yang anak sampaikan, serta memberikan masukan yang konstruktif dan positif, dapat membantu anak merasa didukung dan dihargai. Dengan demikian, anak akan merasa lebih percaya diri dalam berinteraksi dengan orang lain dan menghadapi berbagai tantangan dalam kehidupan.",
        "Dalam mengembangkan rasa percaya diri anak, konsistensi dan kesabaran juga sangat diperlukan. Proses ini memerlukan waktu dan upaya yang kontinu dari orang tua. Dengan memberikan dukungan yang konsisten dan kesempatan untuk belajar dan berkembang, orang tua dapat membantu anak mengembangkan rasa percaya diri yang kuat dan positif.",
      ],
      date: "17 Mei 2024",
      author: "Muhammad Fakhri Musyaffa",
    },
    {
      id: 5,
      imageSrc: "/assets/article5.png",
      title: "Generasi Digital dan Model Pengasuhan Positif",
      description: [
        "Generasi digital, yang tumbuh di era teknologi informasi dan internet, membutuhkan pendekatan pengasuhan yang berbeda. Orang tua perlu memahami dan mengakomodasi kebutuhan anak-anak dalam menghadapi dunia digital yang begitu kompleks. Model pengasuhan positif dalam konteks ini adalah memberikan arahan yang jelas tentang penggunaan teknologi, mengajarkan etika digital yang baik, dan menjadi contoh yang baik dalam penggunaan teknologi.",
        "Penting bagi orang tua untuk membatasi waktu screen time anak-anak dan mengarahkan mereka pada aktivitas yang lebih bermanfaat. Selain itu, membangun komunikasi yang baik dengan anak-anak tentang penggunaan teknologi dapat membantu mereka memahami dampak positif dan negatifnya. Dengan demikian, anak-anak dapat belajar menggunakan teknologi secara bijaksana dan bertanggung jawab.",
        "Model pengasuhan positif juga mencakup memberikan dorongan dan pujian atas pencapaian anak-anak dalam penggunaan teknologi yang positif. Hal ini dapat meningkatkan rasa percaya diri anak-anak dan memotivasi mereka untuk terus berkembang dalam penggunaan teknologi. Selain itu, memberikan batasan yang jelas tentang konten yang boleh diakses oleh anak-anak juga penting untuk menjaga keamanan dan kesejahteraan mereka dalam dunia digital.",
        "Dalam menghadapi generasi digital, orang tua perlu memahami bahwa pendekatan pengasuhan yang efektif adalah yang adaptif dan responsif terhadap perubahan yang terjadi dalam teknologi dan kehidupan sosial anak-anak. Dengan memadukan antara penggunaan teknologi yang bijaksana dan model pengasuhan yang positif, orang tua dapat membantu anak-anak mengembangkan potensi mereka secara optimal dalam era digital.",
      ],
      date: "10 Mei 2024",
      author: "Muhammad Faturrahman Putra",
    },
    {
      id: 6,
      imageSrc: "/assets/article6.png",
      title: "Cara Orangtua Menyikapi Anak Introvert dan Ekstrovert",
      description: [
        "Orang tua memiliki peran penting dalam menyikapi anak yang memiliki kepribadian introvert atau ekstrovert. Anak introvert cenderung lebih tertutup dan cenderung menyukai kesendirian. Orang tua perlu memberikan dukungan dan pemahaman kepada anak introvert agar merasa nyaman dengan diri mereka sendiri dan tidak merasa terbebani untuk berinteraksi sosial.",
        "Di sisi lain, anak ekstrovert cenderung lebih terbuka dan energik dalam berinteraksi sosial. Orang tua perlu memberikan kesempatan kepada anak ekstrovert untuk berinteraksi dan berekspresi sesuai dengan kepribadian mereka. Hal ini dapat dilakukan dengan mendukung anak untuk mengikuti aktivitas sosial yang sesuai dengan minat dan bakat mereka.",
        "Penting bagi orang tua untuk tidak memaksakan anak untuk berubah menjadi sesuai dengan ekspektasi sosial tertentu. Sebaliknya, orang tua perlu menerima dan menghargai kepribadian unik anak mereka, baik itu introvert maupun ekstrovert. Dengan memberikan dukungan yang tepat, orang tua dapat membantu anak mengembangkan potensi mereka sesuai dengan kepribadian yang mereka miliki.",
        "Selain itu, orang tua juga perlu memahami bahwa kepribadian anak dapat berubah seiring dengan perkembangan mereka. Oleh karena itu, penting untuk selalu terbuka dan responsif terhadap perubahan dalam kepribadian anak dan memberikan dukungan yang konsisten dalam setiap tahapan perkembangannya.",
      ],
      date: "13 Mei 2024",
      author: "Adityan Franodi",
    },
    {
      id: 7,
      imageSrc: "/assets/article7.jpg",
      title: "Cara Efektif Belajar Online",
      description: [
        "Belajar online membutuhkan pendekatan yang berbeda dibandingkan belajar di dalam kelas. Untuk belajar secara efektif secara online, penting bagi siswa untuk memiliki lingkungan belajar yang tenang dan nyaman. Pastikan juga untuk memiliki koneksi internet yang stabil agar proses belajar tidak terganggu.",
        "Selain itu, penting untuk membuat jadwal belajar yang teratur dan disiplin dalam mengikutinya. Tentukan waktu-waktu yang tepat untuk belajar dan istirahat agar proses belajar lebih efektif. Selain itu, pastikan untuk memanfaatkan teknologi yang tersedia, seperti aplikasi pembelajaran online dan platform video konferensi, untuk memperkaya pengalaman belajar Anda.",
        "Selama belajar online, penting juga untuk tetap berinteraksi dengan pengajar dan teman-teman sekelas. Manfaatkan fitur-fitur komunikasi yang disediakan oleh platform pembelajaran online untuk bertanya dan berdiskusi. Hal ini dapat membantu Anda memahami materi dengan lebih baik dan menjaga motivasi dalam belajar.",
        "Terakhir, tetaplah terbuka terhadap tantangan dan kesulitan yang mungkin Anda hadapi selama belajar online. Jangan ragu untuk meminta bantuan dari pengajar atau teman sekelas jika mengalami kesulitan dalam memahami materi. Dengan sikap yang terbuka dan proaktif, Anda dapat belajar secara efektif meskipun dalam situasi pembelajaran online.",
      ],
      date: "10 Mei 2024",
      author: "Letty Latifani Arifah",
    },
    {
      id: 8,
      imageSrc: "/assets/article8.jpg",
      title: "Pentingnya Menjaga Kesehatan Mental Anak",
      description: [
        "Kesehatan mental anak merupakan aspek penting yang perlu diperhatikan oleh orang tua. Anak yang memiliki kesehatan mental yang baik cenderung lebih bahagia, produktif, dan mampu mengatasi berbagai tantangan dalam kehidupan. Oleh karena itu, penting bagi orang tua untuk menjaga dan memperhatikan kesehatan mental anak sejak dini.",
        "Salah satu cara menjaga kesehatan mental anak adalah dengan menciptakan lingkungan yang aman dan mendukung di rumah. Berikan perhatian dan waktu yang cukup kepada anak, dengarkan keluh kesah mereka, dan berikan dukungan emosional yang mereka butuhkan. Hal ini dapat membantu anak merasa dihargai dan didukung dalam menghadapi berbagai situasi.",
        "Selain itu, penting juga untuk memberikan contoh yang baik dalam mengelola emosi dan mengatasi stres. Anak cenderung meniru perilaku orang tua, sehingga penting untuk memberikan contoh yang positif dalam menghadapi berbagai situasi sulit. Dorong anak untuk mengembangkan keterampilan sosial dan emosionalnya, seperti mengatasi konflik dan mengelola stres.",
        "Jangan lupakan pentingnya aktivitas fisik dalam menjaga kesehatan mental anak. Aktivitas fisik dapat membantu mengurangi stres dan meningkatkan suasana hati anak. Ajak anak untuk bermain di luar rumah, melakukan olahraga, atau aktivitas fisik lainnya yang disukai oleh mereka.",
      ],
      date: "18 Mei 2024",
      author: "Adityan Franodi",
    },
    {
      id: 9,
      imageSrc: "/assets/article9.jpg",
      title: "Strategi Efektif Mengelola Waktu Belajar Anak",
      description: [
        "Mengelola waktu belajar anak merupakan hal penting dalam memastikan bahwa mereka dapat belajar dengan efektif dan efisien. Salah satu strategi efektif adalah dengan membuat jadwal belajar yang teratur dan konsisten. Tentukan waktu-waktu yang tepat untuk belajar, istirahat, dan bermain agar anak dapat belajar dengan fokus dan tetap terjaga kesehatan mentalnya.",
        "Selain itu, penting untuk menciptakan lingkungan belajar yang kondusif di rumah. Pastikan anak memiliki tempat yang nyaman dan bebas dari gangguan untuk belajar. Berikan juga perlengkapan belajar yang cukup agar mereka dapat belajar dengan maksimal.",
        "Libatkan anak dalam pembuatan jadwal belajar mereka. Dengan melibatkan mereka, anak akan merasa memiliki tanggung jawab terhadap waktu belajar mereka sendiri. Hal ini dapat membantu mereka untuk lebih disiplin dalam mengikuti jadwal belajar yang telah dibuat.",
        "Selain itu, berikan pujian dan dorongan kepada anak saat mereka berhasil mengikuti jadwal belajar dengan baik. Hal ini dapat meningkatkan motivasi dan kepercayaan diri anak dalam belajar. Dengan menerapkan strategi-strategi ini, orang tua dapat membantu anak mengelola waktu belajar mereka dengan lebih efektif dan efisien.",
      ],
      date: "20 Mei 2024",
      author: "Adityan Franodi",
    },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas setiap kali currentPage berubah
  }, [currentPage]); // Bergantung pada perubahan currentPage

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return articles.slice(startIndex, endIndex);
  };

  return (
    <div className="container py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-primary mb-3">
          <span className="font-semibold">Kumpulan </span>
          <JudulFitur>Artikel</JudulFitur>
        </h1>
        <p className="text-lg font-primary sm:text-xl mb-6">
          Simak beberapa kumpulan artikel di bawah ini
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-4">
        {renderData().map((article) => (
          <Link key={article.id} to={`/artikel/${article.id}`} className="mx-2">
            <CardArtikel
              imageSrc={article.imageSrc}
              title={article.title}
              description={article.description}
              date={article.date}
            />
          </Link>
        ))}
      </div>
      {articles.length > itemsPerPage && (
        <div className="flex justify-center mt-16">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default ArtikelList;
