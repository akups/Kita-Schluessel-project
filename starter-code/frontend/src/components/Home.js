import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";

class Home extends Component {
  /* select = () => {
    obj = document.test.linkselect;

    index = obj.selectedIndex;
    if (index != 0) {
      href = obj.options[index].value;
      location.href = href;
    }
  }; */

  render() {
    return (
      <div className="home-component">
        <div className="img-component">
          <img src="image/photo-1540479859555-17af45c78602.jpeg" alt="" />
        </div>
        <div className="text-component">
          <h1>KitaSchlüssel</h1>
          <p>Wählen Sie Ihre Stadt</p>
          <select name="linkselect" className="city-selector">
            <option value="null">Please select</option>

            <option value="/map">Berlin</option>

            <option value="/map">Hamburg</option>
          </select>
          <Link to="/signup">
            <button>Konto Erstellen</button>
          </Link>
          <p>
            <Link className="link" to="/login">
              Haben Sie bereits ein Konto? Loggen Sie sich ein.
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
