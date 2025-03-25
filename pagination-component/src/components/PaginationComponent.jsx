import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(0);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(0);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Pagination Component
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center gap-2">
          <label htmlFor="itemsPerPage" className="text-gray-700">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <button
          onClick={handleSort}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid gap-4">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No results found.</p>
          )}
        </div>
      )}

      {filteredData.length > 0 && (
        <div className="mt-6 flex justify-center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"flex gap-2 items-center"}
            pageClassName={
              "px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
            }
            pageLinkClassName={"block w-full h-full"}
            activeClassName={"bg-blue-600 text-white border-blue-600"}
            previousClassName={
              "px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
            }
            nextClassName={
              "px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
            }
            disabledClassName={"opacity-50 cursor-not-allowed"}
          />
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;