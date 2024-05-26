// import { useState } from "react";

import SectionCTA from "../components/CTA/SectionCTA";

const CTAHome = () => {
  return (
    <div className="section-home">
      <SectionCTA
        judul1="Mari Dukung Tumbuh Kembang Anak Bersama "
        fitur="Parentify"
        deksripsi="Tempat terbaik bagi para orang tua untuk mendapatkan edukasi dan panduan dalam mengasuh anak dengan tepat dan mendukung tumbuh kembang anak untuk masa depan yang cerah."
        imgURL="/assets/family-section.png"
      ></SectionCTA>
    </div>
  );
};

export default CTAHome;
