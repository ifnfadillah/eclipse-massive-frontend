// import { useState } from "react";

import Deskripsi from "../components/Deskripsi";
import Judul from "../components/Judul";
import JudulFitur from "../components/JudulFitur";

const VideoShowcase = () => {
  return (
    <div className="Video">
      <section>
        <div className="gap-8 items-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <Judul>
              Tentang
              <JudulFitur> Parentify</JudulFitur>
            </Judul>
            <Deskripsi>Parentify merupakan website edukasi parenting untuk orang tua memiliki pemahaman terkait pola asuh yang tepat kepada anak. Sehingga anak-anak di Indonesia dapat tumbuh dengan optimal.</Deskripsi>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="w-full h-full">
              <div className="aspect-w-100 aspect-h-100">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UToeb9Cd8KQ?si=GOZao36-Bb1tHA_P"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoShowcase;
