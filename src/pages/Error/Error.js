import "./Error.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Error() {
  useEffect(() => {
    document.title = "Raté Radio - Page introuvable";
  }, []);
  return (
    <main className="error-main">
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <p className="error-text">
          Oups! La page que <br className="line-break" /> vous demandez n'existe
          pas.
        </p>
      </div>
      <Link className="home-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
