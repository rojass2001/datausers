export default function Navbar() {

  return (

    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-indigo-600">
        Data Dashboard
      </h1>

      <div className="w-10 h-10 bg-gray-200 rounded-full">
        <img src="https://tse3.mm.bing.net/th/id/OIP.hjNXrsXKpOLMERILiDXgywHaHa?pid=Api&P=0&h=180" 
        alt="no profile"
         className="w-full h-full rounded-full" />
      </div>

    </div>

  )
}