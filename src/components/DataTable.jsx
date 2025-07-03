import React, { useState } from 'react';

const DataTable = ({ headers, data }) => {
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;