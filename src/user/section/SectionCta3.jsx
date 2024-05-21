// import { useState } from "react";
import JudulCTA from "../components/JudulCTA";
import JudulFitur from "../components/JudulFitur";
import DeskripsiCta from "../components/DeskripsiCta";
import ButtonCta from "../components/ButtonCta";

const SectionCTA3 = () => {
  return (
    <div className="section">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <JudulCTA>
              Temukan Pengetahuan Baru Terkait Parenting di <JudulFitur>Sharenting</JudulFitur>
            </JudulCTA>
            <DeskripsiCta> Sharenting merupakan layanan sosialisasi dan ruang diskusi terkait dunia parenting langsung dari narasumber expert di bidang psikologi maupun kesehatan anak.</DeskripsiCta>
            <ButtonCta>Eksplor Sharenting</ButtonCta>
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

export default SectionCTA3;
