import React, { useState, useEffect } from 'react';
import './Loader.scss';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <div className={`loader-container ${showLoader ? 'visible' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
