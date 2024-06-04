const Banners = (props) => {
  const { imgUrl } = props;
  return (
    <div className="section-banner ">
      <section>
        <div className="py-8 px-6 mx-auto max-w-screen-xl mb-32 lg:py-16 lg:px-8">
          <img src={imgUrl} className="shadow-lg rounded-xl" />
        </div>
      </section>
    </div>
  );
};

export default Banners;
