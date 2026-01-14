import { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="loading">Loading countries...</div>;

  return (
    <div className="home-page">
      <div className="controls">
        {/* Search and Filter will go here later */}
      </div>
      <div className="countries-grid">
        {countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
