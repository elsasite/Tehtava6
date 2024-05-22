import React, { useContext, useEffect } from "react";
import Urheilija from "./Urheilija";
import UrheilijaContext from "../context/UrheilijaContext";

const Urheilijatiedot = () => {
  const urheilijaContext = useContext(UrheilijaContext);
  console.log(UrheilijaContext);

  useEffect(() => {
    urheilijaContext.getUrheilijatiedot();
  }, [urheilijaContext]);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Urheilijatiedot</span>
      </h1>

      {urheilijaContext.Urheilijatiedot
        ? urheilijaContext.Urheilijatiedot.map((yhteystieto) => (
            <Urheilija key={yhteystieto.id} yhteystieto={yhteystieto} />
          ))
        : null}
    </>
  );
};

export default Urheilijatiedot;
