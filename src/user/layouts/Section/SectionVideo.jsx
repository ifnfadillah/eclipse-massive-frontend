import Deskripsi from "@/user/components/Deskripsi";
import Judul from "@/user/components/Judul";
import { videoPembelajaran } from "../Data/videoPembelajaran";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "@/user/components/paginationUser";
import CardVideo from "@/user/components/CardVideo";

const SectionVideo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(videoPembelajaran.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return videoPembelajaran.slice(startIndex, endIndex);
  };
  return (
    <div className="section-kategori-usia">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center lg:mb-8">
          <Judul>Video Belajar</Judul>
          <Deskripsi>Berikut beberapa video belajar yang dapat diakses oleh Parennials!</Deskripsi>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-1 ">
          {renderData().map((video) => (
            <Link key={video.id} to={video.link} target="_blank" rel="noopener noreferrer" className="flex items-center px-2">
              <CardVideo imageUrl={video.imageCard} title={video.title} link={video.link} />
            </Link>
          ))}
        </div>
        {videoPembelajaran.length > itemsPerPage && (
          <div className="flex justify-center mt-10 md:mt-16">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionVideo;
