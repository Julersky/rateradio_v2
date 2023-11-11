import "./Home.scss";
import { useEffect } from "react";
import React from 'react';


 

function Home() {
  useEffect(() => {
    document.title = "Raté Radio - Accueil";
  }, []);
  return (
    <div className="home">
      <main>
        <div className="page_content_title">
          <h1>Votre Radio</h1>
          <p>Bienvenue sur Raté Radio!</p>
        </div>

      
      {/* Add other content here */}
      </main>


    </div>
  );
}

export default Home;
