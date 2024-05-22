import React, { useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import UrheilijaContext from "./UrheilijaContext";
import {
  GET_URHEILIJATIEDOT,
  GET_URHEILIJA,
  ADD_URHEILIJA,
  EDIT_URHEILIJA,
  DELETE_URHEILIJA,
} from "./types";

import axios from "axios";

const GlobalState = (props) => {
  let initialState = {
    urheilijatiedot: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getUrheilijatiedot = async () => {
    try {
      let res = await axios.get("http://localhost:3000/urheilijat");
      const { data } = res;
      dispatch({ type: GET_URHEILIJATIEDOT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3000/urheilijat/" + id;
      let res = await axios.get(sql);

      console.log("GET_URHEILIJA:");
      dispatch({ type: GET_URHEILIJA, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };

  const setUrheilijatiedot = async (uusiUrheilija) => {
    try {
      const res = await axios
        .post(`http://localhost:3000/lisaa`, uusiUrheilija)
        .then((res) => {
          dispatch({ type: ADD_URHEILIJA, payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const setUrheilija = async (id, paivitettyUrheilija) => {
    try {
      const res = await axios
        .put(`http://localhost:3000/urheilijat/${id}`, paivitettyUrheilija)
        .then((res) => {
          dispatch({ type: "EDIT_URHEILIJA", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const poistaUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3000/henkilot/" + id["id"];
      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_URHEILIJA", payload: id["id"] });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UrheilijaContext.Provider
      value={{
        urheilijatiedot: state.urheilijatiedot,
        getUrheilijatiedot,
        getUrheilija,
        setUrheilija,
        //updateUrheilija,
        poistaUrheilija,
      }}
    >
      {props.children}
    </UrheilijaContext.Provider>
  );
};

export default GlobalState;
