export default function Table({ data, loading }) {

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full min-w-[600px]">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Company</th>
            </tr>
          </thead>

          <tbody>

            {/* Skeleton Loading */}
            {loading
              ? [...Array(5)].map((_, i) => (
                  <tr key={i} className="border-t animate-pulse">

                    <td className="p-3">
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </td>

                    <td className="p-3">
                      <div className="h-4 bg-gray-200 rounded w-40"></div>
                    </td>

                    <td className="p-3">
                      <div className="h-4 bg-gray-200 rounded w-28"></div>
                    </td>

                    <td className="p-3">
                      <div className="h-4 bg-gray-200 rounded w-36"></div>
                    </td>

                  </tr>
                ))

              /* No Data */
              : data.length === 0
              ? (
                <tr>
                  <td colSpan="4" className="text-center py-10 text-gray-500">
                    No users found
                  </td>
                </tr>
              )

              /* Real Data */
              : data.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">
                    {user.name}
                  </td>

                  <td className="p-3 text-blue-600">
                    {user.email}
                  </td>

                  <td className="p-3">
                    {user.phone}
                  </td>

                  <td className="p-3">
                    {user.company.name}
                  </td>
                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}