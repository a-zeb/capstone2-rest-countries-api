import { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = regionFilter === '' || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  if (loading) return <div className="loading">Loading countries...</div>;

  return (
    <div className="home-page">
      <div className="controls">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search for a country..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-box">
          <select 
            value={regionFilter} 
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries-grid">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
