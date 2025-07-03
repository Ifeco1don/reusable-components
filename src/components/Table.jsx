import React from 'react';

const Table = ({ headers, data }) => (
  <table className="table">
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {Object.values(row).map((cell, j) => (
            <td key={j}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;