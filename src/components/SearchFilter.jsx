export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  companies
}) {
  return (

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border p-2 rounded w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Company Filter */}
      <select
        value={filter}
        onChange={(e)=>setFilter(e.target.value)}
        className="border p-2 rounded w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >

        <option value="">All Companies</option>

        {companies.map((c,i)=>(
          <option key={i}>{c}</option>
        ))}

      </select>

    </div>

  )
}