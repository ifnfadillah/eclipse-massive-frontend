const CardDashboard = (props) => {
    const { icon: Icon, title, dataCount } = props;
    return (
        <div className="border border-sky-500 rounded-lg p-6 py-5 flex flex-col mb-6 md:mb-0 md:w-72 h-44 shadow-md">
            <div className="w-12 h-12 p-3 bg-white rounded-md shadow-xl flex items-center justify-center">
                <Icon className="text-gray-700" size={28} />
            </div>
            <div className="mt-4">
                <div className="text-lg font-regular font-primary text-gray-500">{title}</div>
                <div className="text-3xl font-medium font-primary text-gray-900">{dataCount}</div>
            </div>
        </div>
    );
};

export default CardDashboard;