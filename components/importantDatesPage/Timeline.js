export default function Timeline({ data, title, borderClassNameTop,borderClassNameBottom }) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className={`px-6 py-3 bg-primary90 text-left text-s leading-4 font-medium text-white uppercase tracking-wider ${borderClassNameTop}`}>
        {title}
      </h2>
      <div className={`overflow-x-auto ${borderClassNameBottom} border-gray-600`}>
        <table className="min-w-full border border-gray-600 bg-primary05">
          <thead>
          </thead>
          <tbody>
            {data.map((item,id) => (
              <tr key={id} className="border-b border-gray-600">
                <td className="px-6 py-1 whitespace-no-wrap border-r border-gray-600 text-gray-800 w-3/5">
                  {item.text}
                </td>
                <td className="px-6 py-1 whitespace-no-wrap text-gray-800">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
