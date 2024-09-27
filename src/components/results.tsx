import { Advocate } from "../app/search/types"; // Adjust the import path as necessary

export default function SolaceAdvocatesList({
  advocates,
}: {
  advocates: Advocate[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Degree
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Specialties
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Years of Experience
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {advocates.map((advocate) => (
            <tr key={advocate.phoneNumber}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advocate.firstName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advocate.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advocate.city}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advocate.degree}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advocate.specialties.map((s, index) => (
                  <div key={index}>{s}</div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advocate.yearsOfExperience}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advocate.phoneNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
