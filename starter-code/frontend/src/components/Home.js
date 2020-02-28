import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>KitaSchlüssel</h1>
      <p>Wählen Sie Ihre Stadt</p>
      <select className="city-selector">
        <option value="berlin">Berlin</option>
        <option value="hamburg">Hamburg</option>
      </select>
      <button>Konto Erstellen</button>
      <p>
        <Link to="/login">
          Haben Sie bereits ein Konto? Loggen Sie sich ein.
        </Link>
      </p>
    </div>
  );
}

export default Home;
