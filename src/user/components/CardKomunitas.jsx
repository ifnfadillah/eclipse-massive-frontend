const CardKomunitas = (props) => {
    const { title, imageSrc } = props;
    return (
        <a href="#">
            <div className="max-w-xl bg-white border  border-gray-200 rounded-xl shadow hover:shadow-xl dark:bg-gray-800  dark:border-gray-700">
                <img className=" w-full h-full" src={imageSrc} alt={title} />
                <div className="p-4 bg-sky-700 text-white text-center rounded-b-xl hover:bg-sky-500">
                    <a href="#">
                        <h5 className="py-2 md:text-2xl font-semibold font-primary tracking-tight text-white dark:text-white">{title}</h5>
                    </a>
                </div>
            </div>
        </a>
    );
};

export default CardKomunitas;
