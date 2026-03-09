export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex flex-row justify-center items-center mt-8 gap-3 sm:gap-4">

      {/* Prev Button */}
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg border border-gray-300 bg-white 
        hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed
        transition duration-200 shadow-sm text-sm sm:text-base"
      >
        ← Prev
      </button>

      {/* Page Info */}
      <span className="px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold text-center bg-indigo-600 text-white rounded-lg shadow">
        Page {page} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg border border-gray-300 bg-white 
        hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed
        transition duration-200 shadow-sm text-sm sm:text-base"
      >
        Next →
      </button>

    </div>
  )
}