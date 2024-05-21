// import { useState } from "react";
import JudulCTA from "../components/JudulCTA";
import JudulFitur from "../components/JudulFitur";
import DeskripsiCta from "../components/DeskripsiCta";
import ButtonCta from "../components/ButtonCta";

const SectionCTA4 = () => {
  return (
    <div className="section">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <JudulCTA>
              Terapkan <JudulFitur>Panduan Pola Asuh</JudulFitur>Sesuai Usia Buah Hatimu!
            </JudulCTA>
            <DeskripsiCta>
              {" "}
              Setiap pertumbuhan usia anak akan memiliki pola asuh yang berbeda-beda untuk menyesuaikan perkembangannya. Pola asuh yang tepat akan berpengaruh terhadap tumbuh kembang anak di masa depan. Sesuaikan pola asuh kepada buah
              hatimu sesuai fase usianya.
            </DeskripsiCta>
            <ButtonCta>Lihat Panduan Pola Asuh</ButtonCta>
          </div>
          <div className="mt-4 md:mt-0">
            <img className="w-full dark:hidden" src="/assets/family-section4.png" alt="section-home" />
            <img className="w-full hidden dark:block" src="/assets/family-section4.png" alt="section-home" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCTA4;
