const Banners = (props) => {
  const { imgUrl } = props;
  return (
    <div className="section-banner mb-40">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-6 mx-auto max-w-screen-xl mb-32 lg:py-16 lg:px-6">
          <img src={imgUrl} className="shadow-lg rounded-xl" />
        </div>
      </section>
    </div>
  );
};

export default Banners;
