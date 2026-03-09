import {useState} from "react"
import useFetch from "../Customhooks/useFetch"
import Navbar from "../components/Navbar"
import Table from "../components/Table"
import Pagination from "../components/Pagination"
import SearchFilter from "../components/SearchFilter"


export default function Dashboard(){

const {data,loading,error} =
useFetch("https://jsonplaceholder.typicode.com/users")

const [search,setSearch] = useState("")
const [filter,setFilter] = useState("")
const [page,setPage] = useState(1)

const itemsPerPage = 4


if(error) return <p>Error: {error}</p>

const companies = [
...new Set(data.map(u=>u.company.name))
]

const filtered = data.filter(user => {

return (
user.name.toLowerCase().includes(search.toLowerCase())
&&
(filter === "" || user.company.name === filter)
)

})

const totalPages =
Math.ceil(filtered.length / itemsPerPage)

const start = (page-1)*itemsPerPage

const paginatedData =
filtered.slice(start,start+itemsPerPage)

return(

<div className="bg-gray-100  ">

<Navbar/>

<div className="max-w-5xl mx-auto p-6">

<SearchFilter
search={search}
setSearch={setSearch}
filter={filter}
setFilter={setFilter}
companies={companies}
/>

<Table data={paginatedData} loading={loading}/>

<Pagination
page={page}
setPage={setPage}
totalPages={totalPages}
/>

</div>

</div>

)

}