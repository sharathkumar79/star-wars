// PlanetsDirectory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/?format=json');
        setPlanets(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const fetchPage = async (url) => {
    try {
      const response = await axios.get(url);
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };
  return (
    <div>
      <div className='planets-container'>

      {planets.map((planet) => (
        <PlanetCard key={planet.url} planet={planet} />
        ))}
        </div>
        <div className='pagination'>
        <Pagination fetchPage={fetchPage} nextPage={nextPage} prevPage={prevPage} />
        </div>
    </div>
  );
};

export default PlanetsDirectory;
