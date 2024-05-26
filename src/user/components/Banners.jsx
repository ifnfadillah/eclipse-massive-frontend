const Banners = (props) => {
  const { imgUrl } = props;
  return (
    <div className="section-banner">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mb-32 lg:py-16 lg:px-6">
          <img src={imgUrl} />
        </div>
      </section>
    </div>
  );
};

export default Banners;
