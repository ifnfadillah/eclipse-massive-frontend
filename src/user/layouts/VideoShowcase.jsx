// import { useState } from "react";

const VideoShowcase = () => {
  return (
    <div className="Video">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="gap-8 items-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Tentang <strong className="text-blue-700">Parentify</strong>
            </h2>
            <p className="mb-4 font-light text-gray-500 md:text-xl dark:text-gray-400">
              Parentify merupakan website edukasi parenting untuk orang tua memiliki pemahaman terkait pola asuh yang tepat kepada anak. Sehingga anak-anak di Indonesia dapat tumbuh dengan optimal.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img className="w-full dark:hidden mt-32" src="/assets/Showcase.png" alt="showcase" />
          </div>
          {/* <div className="mt-4 md:mt-0">
            <div className="w-full h-full">
              <div className="aspect-w-100 aspect-h-100">
                <iframe
                  width="560"
                  height="315"
                  className="rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/ZNgyEHFvCho?si=lkySrHWgl0jHANLC"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default VideoShowcase;
