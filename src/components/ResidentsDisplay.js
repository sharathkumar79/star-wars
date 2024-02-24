// ResidentsDisplay.js
import React from 'react';

const ResidentsDisplay = ({ residents }) => {
    return (
        <div className="table-container">
          {residents.length > 0 && (
            <table className="residents-table">
              <thead className="table-head">
                <tr>
                  <td className="table-cell">Name</td>
                  <td className="table-cell">Height</td>
                  <td className="table-cell">Mass</td>
                  <td className="table-cell">Gender</td>
                </tr>
              </thead>
              <tbody className="table-body">
                {residents.map((resident) => (
                  <tr key={resident.url}>
                    <td className="table-cell">{resident.name}</td>
                    <td className="table-cell">{resident.height}</td>
                    <td className="table-cell">{resident.mass}</td>
                    <td className="table-cell">{resident.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
    
          {residents.length === 0 && (
            <p>No residents found for this planet.</p>
          )}
        </div>
      );
    };
    
    


export default ResidentsDisplay;
