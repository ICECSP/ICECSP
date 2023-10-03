"use client";

export default function RegistrationFee({ data }) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Category
          </th>
          <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Fee
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-no-wrap">{item.category}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{item.fee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
