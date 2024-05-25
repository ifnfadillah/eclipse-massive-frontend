const SearchForm = (props) => {
    const { placeholder } = props;
    return (
        <div className="w-full md:w-64">
            <form id="liveSearchForm" className="flex items-center" method="POST">
                <div className="relative w-full">
                    <input type="text" name="keyword" id="simple-search"
                        className="bg-white border border-gray-500 text-gray-900 text-xs font-secondary rounded-lg focus:border-sky-500 block w-full h-10 p-2.5 mr-3"
                        placeholder={placeholder} />
                </div>
            </form>
        </div>
    )
}

export default SearchForm;