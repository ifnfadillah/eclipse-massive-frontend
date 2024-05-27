// import { useState } from "react";
import JudulCTA from "../components/JudulCTA";
import JudulFitur from "../components/JudulFitur";
import DeskripsiCta from "../components/DeskripsiCta";
import ButtonCta from "../components/CTA/Button/ButtonCTA";

const SectionCTA2 = () => {
  return (
    <div className="section">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <JudulCTA>
              Temukan Beragam Bahan Belajar Melalui <JudulFitur>Kidspedia</JudulFitur>
            </JudulCTA>
            <DeskripsiCta> Jangan khawatir, kami siap membantu Anda mengenali dan memahami gaya pengasuhan yang paling sesuai untuk mendukung tumbuh kembang buah hati Anda secara optimal.</DeskripsiCta>
            <ButtonCta>Ikuti Tes</ButtonCta>
          </div>
          <div className="mt-4 md:mt-0">
            <img className="w-full dark:hidden" src="/assets/family-section3.png" alt="section-home" />
            <img className="w-full hidden dark:block" src="/assets/family-section3.png" alt="section-home" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCTA2;
