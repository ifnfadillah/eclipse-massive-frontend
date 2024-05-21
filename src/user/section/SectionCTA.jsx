// import { useState } from "react";
import JudulCTA from "../components/JudulCTA";
import JudulFitur from "../components/JudulFitur";
import DeskripsiCta from "../components/DeskripsiCta";
import ButtonCta from "../components/ButtonCta";

const SectionCTA = () => {
  return (
    <div className="section">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <JudulCTA>
              Mari Dukung Tumbuh Kembang Anak Bersama <JudulFitur>Parentify</JudulFitur>
            </JudulCTA>
            <DeskripsiCta> Tempat terbaik bagi para orang tua untuk mendapatkan edukasi dan panduan dalam mengasuh anak dengan tepat dan mendukung tumbuh kembang anak untuk masa depan yang cerah.</DeskripsiCta>
            <ButtonCta>Eksplor Paretify</ButtonCta>
          </div>
          <div className="mt-4 md:mt-0">
            <img className="w-full dark:hidden" src="/assets/family-section.png" alt="section-home" />
            <img className="w-full hidden dark:block" src="/assets/family-section.png" alt="section-home" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCTA;
