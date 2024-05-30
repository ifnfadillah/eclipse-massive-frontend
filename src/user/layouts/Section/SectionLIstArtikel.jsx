import React, { useState } from "react";
import CardArtikel from "../../components/cardArtikel";
import JudulFitur from "../../components/JudulFitur";
import Pagination from "../../components/paginationUser";

function ArtikelList() {
  const articles = [
    {
      id: 1,
      imageSrc: "/assets/article1.jpg",
      title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
      description: "Pengasuhan anak adalah tanggung jawab bersama yang melibatkan peran aktif dari kedua orang tua.",
      date: "31 Februari 2024",
    },
    {
      id: 2,
      imageSrc: "/assets/article2.jpg",
      title: "Mengatasi Tantangan Parenting di Era Digital",
      description: "Parenting di era digital membawa tantangan baru bagi orang tua yang perlu menyesuaikan pendekatan mereka dalam mengasuh anak-anak.",
      date: "28 April 2024",
    },
    {
      id: 3,
      imageSrc: "/assets/article3.jpg",
      title: "Bagaimana Menentukan Usia yang Tepat Untuk Anak Memulai Berpuasa?",
      description: "Sebelum mengajak anak berpuasa, penting untuk menjelaskan arti puasa dengan bahasa yang sederhana.",
      date: "11 Januari 2024",
    },
    {
      id: 4,
      imageSrc: "/assets/article4.png",
      title: "Mengembangkan Rasa Percaya Diri Anak",
      description: "Mengembangkan rasa percaya diri anak adalah hal penting yang harus dilakukan oleh orang tua agar anak dapat tumbuh menjadi pribadi yang mandiri, tangguh, dan optimis.",
      date: "17 Mei 2024",
    },
    {
      id: 5,
      imageSrc: "/assets/article5.png",
      title: "Generasi Digital dan Model Pengasuhan Positif",
      description: "Sebagai orang tua tentu arus perkembangan zaman tidak dapat dilawan.",
      date: "10 Mei 2024",
    },
    {
      id: 6,
      imageSrc: "/assets/article6.png",
      title: "Cara Orangtua Menyikapi Anak Introvert dan Ekstrovert",
      description: "Jika orang tua merasa terdorong ingin mengubah sifat introvert atau ekstrovert pada anak, maka sebaiknya tinjau kembali penyebabnya.",
      date: "13 Mei 2024",
    },
    {
      id: 7,
      imageSrc: "/assets/article7.png",
      title: "Cara Efektif Belajar Online",
      description: "Belajar online dapat menjadi tantangan. Berikut adalah cara-cara efektif untuk memaksimalkannya.",
      date: "10 Mei 2024",
    },
    {
      id: 8,
      imageSrc: "/assets/article8.png",
      title: "Pentingnya Menjaga Kesehatan Mental Anak",
      description: "Menjaga kesehatan mental anak sama pentingnya dengan menjaga kesehatan fisik mereka.",
      date: "18 Mei 2024",
    },
    {
      id: 9,
      imageSrc: "/assets/article9.png",
      title: "Strategi Efektif Mengelola Waktu Belajar Anak",
      description: "Mengelola waktu belajar anak dengan baik adalah kunci untuk mencapai keseimbangan antara belajar dan bermain.",
      date: "20 Mei 2024",
    },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return articles.slice(startIndex, endIndex);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="title ms-12">
        <h1 className="text-4xl font-semibold mb-3">
          Kumpulan <JudulFitur>Artikel</JudulFitur>
        </h1>
        <p className="text-xl mb-6">Simak beberapa kumpulan artikel di bawah ini</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-1/4 mx-10">
        {renderData().map((article) => (
          <div key={article.id} className="px-2">
            <CardArtikel imageSrc={article.imageSrc} title={article.title} description={article.description} date={article.date} />
          </div>
        ))}
      </div>
      {articles.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

export default ArtikelList;
