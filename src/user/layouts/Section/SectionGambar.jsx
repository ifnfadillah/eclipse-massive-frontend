import { useState } from "react";
import { lembarMewarnai } from "../Data/lembarMewarnai";
import Pagination from "@/user/components/paginationUser";
import Judul from "@/user/components/Judul";
import Deskripsi from "@/user/components/Deskripsi";
import { Link } from "react-router-dom";
import CardCategory from "@/user/components/CardCategory";

const SectionGambar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(lembarMewarnai.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return lembarMewarnai.slice(startIndex, endIndex);
  };

  return (
    <div className="section-kategori-usia">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
        <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
          <Judul>Lembar Mewarnai</Judul>
          <Deskripsi>Berikut beberapa lembar mewarnai yang dapat diakses oleh Parennials!</Deskripsi>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {renderData().map((gambar) => (
            <Link key={gambar.id} to={gambar.link} target="_blank" rel="noopener noreferrer" className="flex items-center px-2">
              <CardCategory imageUrl={gambar.imageCard} title={gambar.title} />
            </Link>
          ))}
        </div>
        {lembarMewarnai.length > itemsPerPage && (
          <div className="flex justify-center mt-10 md:mt-16">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionGambar;
