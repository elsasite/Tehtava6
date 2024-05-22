import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UrheilijaContext from "../context/UrheilijaContext";
import axios from "axios";

const MuokkaaUrheilija = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getUrheilijatieto, updateUrheilijatieto } =
    useContext(UrheilijaContext);

  const [nimi, setNimi] = useState("");
  const [syntymaVuosi, setSyntymavuosi] = useState(0);
  const [paino, setPaino] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  useEffect(() => {
    const fetchUrheilija = async () => {
      try {
        const data = await getUrheilijatieto(id);
        setNimi(data.nimi);
        setSyntymavuosi(data.syntymaVuosi);
        setPaino(data.paino);
        setLaji(data.laji);
        setSaavutukset(data.saavutukset);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUrheilija();
  }, [id, getUrheilijatieto]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Estetään lomakkeen oletusarvoinen lähetys
    const paivitettyUrheilija = {
      nimi,
      syntymaVuosi,
      paino,
      laji,
      saavutukset,
    };
    try {
      await updateUrheilijatieto(id, paivitettyUrheilija);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
        placeholder="Nimi"
      />
      <input
        type="number"
        value={syntymaVuosi}
        onChange={(e) => setSyntymavuosi(e.target.value)}
        placeholder="Syntymavuosi"
      />
      <input
        type="number"
        value={paino}
        onChange={(e) => setPaino(e.target.value)}
        placeholder="Paino"
      />
      <input
        type="text"
        value={laji}
        onChange={(e) => setLaji(e.target.value)}
        placeholder="Laji"
      />
      <input
        type="text"
        value={saavutukset}
        onChange={(e) => setSaavutukset(e.target.value)}
        placeholder="Saavutukset"
      />
      <button type="submit">Tallenna</button>
    </form>
  );
};

export default MuokkaaUrheilija;
