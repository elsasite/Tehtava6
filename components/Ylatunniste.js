import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Ylatunniste = (props) => {
  const { turvataso } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Alkuun
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilija/lisaa" className="nav-link">
                Lisää urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilija/muokkaa" className="nav-link">
                Muokkaa urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilija/poista" className="nav-link">
                Poista urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tietoa" className="nav-link">
                Tietoa sovelluksesta
              </Link>
            </li>
          </ul>
        </div>
        <pre>tietoturvataso {turvataso} </pre>
      </div>
    </nav>
  );
};
Ylatunniste.defaultProps = {
  turvataso: "pieni",
};
Ylatunniste.propTypes = {
  turvataso: PropTypes.string.isRequired,
};
export default Ylatunniste;
