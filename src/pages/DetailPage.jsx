import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/alpha/${id}?fields=name,capital,population,region,subregion,flags,tld,currencies,languages,borders,cca3`)
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading details...</div>;
  if (!country) return <div className="loading">Country not found.</div>;

  const nativeName = country.name.nativeName 
    ? Object.values(country.name.nativeName)[0].common 
    : country.name.common;

  const currencies = country.currencies 
    ? Object.values(country.currencies).map(c => c.name).join(', ') 
    : 'N/A';

  const languages = country.languages 
    ? Object.values(country.languages).join(', ') 
    : 'N/A';

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="detail-content">
        <img src={country.flags.svg} alt={country.name.common} />
        
        <div className="detail-text">
          <h2>{country.name.common}</h2>
          
          <div className="detail-columns">
            <div className="col">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
            <div className="col">
              <p><strong>Top Level Domain:</strong> {country.tld ? country.tld[0] : 'N/A'}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>

          <div className="border-countries">
            <strong>Border Countries:</strong>
            <div className="border-list">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map(border => (
                  <Link key={border} to={`/country/${border}`} className="border-tag">
                    {border}
                  </Link>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
