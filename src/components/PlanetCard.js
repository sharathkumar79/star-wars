// PlanetCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentsDisplay from './ResidentsDisplay';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const residentPromises = planet.residents.map((residentURL) => axios.get(residentURL));
        const residentResponses = await Promise.all(residentPromises);
        const residentData = residentResponses.map((response) => response.data);
        setResidents(residentData);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents();
  }, [planet.residents]);

    return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <div className="planet-details">
        <p><strong>Climate:</strong> {planet.climate}</p>
        <p><strong>Population:</strong> {planet.population}</p>
        <p><strong>Terrain:</strong> {planet.terrain}</p>
        <p><strong>diameter:</strong> {planet.diameter}</p>
        <p><strong>Residents:</strong></p>
      </div>
      <div className="residents-list">
        <ResidentsDisplay residents={residents} />
      </div>
    </div>
  );
};

export default PlanetCard;
