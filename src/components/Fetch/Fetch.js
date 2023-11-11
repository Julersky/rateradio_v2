import React, { useEffect, useState } from 'react';
import './Fetch.scss';
import Gallery from '../Gallery/Gallery';
import Loader from '../../components/Loader/Loader';

function Fetch({ api }) {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API and set it in the galleryData state
    // Replace 'API_ENDPOINT' with the actual API endpoint URL
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setGalleryData(data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Erreur API', err);
        setError('Nous rencontrons des problèmes avec notre base de données 😱');
        setLoading(false);
      });
  }, [api]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <section className='error_container'>
        <h3>{error}</h3>
        <p>Veuillez réessayer plus tard</p>
      </section>
    );
  }

  return (
    <div>
      <Gallery data={galleryData} />
    </div>
  );
}

export default Fetch;
