import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
//import PropTypes from "prop-types";
import UrheilijaContext from "../context/UrheilijaContext";
//import { Navigate } from "react-router-dom";

const Urheilija = (props) => {
  const urheilijaContext = useContext(UrheilijaContext);
  let navigate = useNavigate();
  const [naytaUrheilija, setNaytaUrheilija] = useState(false);

  const onDeleteClick = (id) => {
    urheilijaContext.poistaUrheilija(id);
    window.location.reload();
    navigate.push("/");
  };

  const onShowClick = () => {
    let lippu = !naytaUrheilija;
    setNaytaUrheilija(lippu);
  };

  const { id, nimi, syntymaVuosi, paino, laji, saavutukset } = props.urheilija;

  return (
    <div className="card card-body mb-3">
      <h4>
        {nimi}
        <button className="button" onClick={onShowClick.bind(this)}>
          ...
        </button>
        <button
          className="button_right"
          onClick={onDeleteClick.bind(this, { id })}
        >
          Poista
        </button>
        <Link to={`urheilija/muokkaa/${id}`}>
          <button className="button_right">Muokkaa</button>
        </Link>
      </h4>
      {naytaUrheilija ? (
        <ul className="list-group">
          <li className="list-group-item">nimi: {nimi}</li>
          <li className="list-group-item">syntymaVuosi: {syntymaVuosi}</li>
          <li className="list-group-item">paino: {paino}</li>
          <li className="list-group-item">laji: {laji}</li>
          <li className="list-group-item">saavutukset: {saavutukset}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Urheilija;
