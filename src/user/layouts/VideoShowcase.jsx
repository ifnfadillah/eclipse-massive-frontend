import Deskripsi from "../components/Deskripsi";
import Judul from "../components/Judul";
import JudulFitur from "../components/JudulFitur";

const VideoShowcase = () => {
  return (
    <div className="Video flex justify-center items-center">
      <section className="w-full">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="flex flex-col justify-center">
            <Judul>
              Tentang
              <JudulFitur> Parentify</JudulFitur>
            </Judul>
            <Deskripsi>Parentify merupakan website edukasi parenting untuk orang tua memiliki pemahaman terkait pola asuh yang tepat kepada anak. Sehingga anak-anak di Indonesia dapat tumbuh dengan optimal.</Deskripsi>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md md:mt-0 mt-4">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  width="460"
                  height="258"
                  src="https://www.youtube.com/embed/UToeb9Cd8KQ?si=GOZao36-Bb1tHA_P"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
