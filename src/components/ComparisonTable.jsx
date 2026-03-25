export default function ComparisonTable({ headers, rows, highlightCol = 0 }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="text-left py-3 px-4 bg-slate-100 font-semibold text-slate-600 border-b border-slate-200 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={row.highlight ? 'bg-blue-50' : 'hover:bg-slate-50'}>
              {row.cells.map((cell, ci) => (
                <td key={ci} className="py-3 px-4 border-b border-slate-100 last:border-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
