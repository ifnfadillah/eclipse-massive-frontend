const Banners = (props) => {
  const { imgUrl } = props;
  return (
    <div className="section-banner">
      <section>
        <div className="px-6 mx-auto max-w-screen-xl py-12 lg:py-16">
          <img src={imgUrl} className="shadow-lg rounded-xl" />
        </div>
      </section>
    </div>
  );
};

export default Banners;
