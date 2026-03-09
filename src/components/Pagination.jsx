export default function Pagination({
  page,
  setPage,
  totalPages
}) {

  return (

    <div className="flex justify-center items-center mt-8 gap-4">

      {/* Prev Button */}
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-5 py-2 rounded-lg border border-gray-300 bg-white 
        hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed
        transition duration-200 shadow-sm"
      >
        ← Prev
      </button>

      {/* Page Info */}
      <span className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg shadow">
        Page {page} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-5 py-2 rounded-lg border border-gray-300 bg-white 
        hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed
        transition duration-200 shadow-sm"
      >
        Next →
      </button>

    </div>

  )
}