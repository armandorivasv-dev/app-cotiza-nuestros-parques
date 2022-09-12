import React, { createContext, useState, useEffect } from 'react';
import { dataFinanciera, dataGastos } from '../data/data';
import _ from 'underscore';
import axios from 'axios';
import moment from "moment"

export const CotizadorContext = createContext();


export const CotizadorContextProvider = ({ children }) => {

  const fechaActual = moment().format("YYYY-MM-DD")

  //FUNCTION UF

  useEffect(() => {
    const APIKey = "1eeb77e2f9e39a1da01530c1057722f3aa06f3d9";
    const url = "https://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=" + APIKey + "&formato=json";
    axios.get(url)
      .then((response) => {
        let fechaUfStorage = localStorage.getItem('fechaUf')
        let valorUfStorage = localStorage.getItem('valorUf')
        if (fechaActual === fechaUfStorage) {
          setValorUf(valorUfStorage)
        } else {
          setValorUf(response.data.UFs[0].Valor)
          setFechaUf(response.data.UFs[0].Fecha)
          localStorage.setItem("valorUf", response.data.UFs[0].Valor)
          localStorage.setItem("fechaUf", response.data.UFs[0].Fecha)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  //FUNCTION TO NORMALIZATE CUR AND DECIMAL
  const montoNormalizado = (value) => {
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(value)
  }


  //STATES
  const [parque, setParque] = useState('');
  const [area, setArea] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [reducciones, setreduciones] = useState('');
  const [valorNi, setValorNi] = useState('');
  const [valorNf, setValorNf] = useState('');
  const [descuento, setDescuento] = useState('');
  const [pie, setPie] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [valorUf, setValorUf] = useState('');
  const [fechaUf, setFechaUf] = useState('');
  const [urlcap, SetUrlcap] = useState('');


  //EVENTS
  const handleChangeParque = (event) => {
    setParque(event.target.value)
  }
  const handleChangeArea = (event) => {
    setArea(event.target.value)
  }
  const handleChangeCapacidad = (event) => {
    setCapacidad(event.target.value)
  }
  const handleChangeDescuento = (event) => {
    setDescuento(event.target.value)
  }
  const handleChangePie = (event) => {
    setPie(event.target.value)
  }
  const handleChangeCuotas = (event) => {
    setCuotas(event.target.value)
  }

  //CALC

  let newValorUf = valorUf.replace(".", "").replace(",", ".")
  const gastosAdmin = dataGastos.reduce((acum, cur) => acum + cur.monto, 0)
  const precioNi = valorNi * newValorUf
  const precioNf = valorNf * newValorUf
  const descuentoMonto = (precioNf * descuento / 100)
  const precioMenosDescuento = (precioNf - descuentoMonto)
  const pieMonto = (precioNf * pie / 100)
  const precioMenosPie = (precioMenosDescuento - pieMonto)
  const montoCuota = (precioMenosPie / cuotas)
  const montoGastos = montoCuota + gastosAdmin



  //FILTERS
  const filterParques = dataFinanciera.filter(e => e.parque === parque)
  const filterCapacidades = _.unique(filterParques, (e) => { return e.capacidad })
  const filterAreas = _.unique(filterParques, (e) => { return e.area })
  const selectOptions = filterParques.filter(e => e.parque === parque && e.area === area && e.capacidad === capacidad)

  useEffect(() => {
    if (selectOptions.length !== 0) {
      selectOptions.forEach(e => {
        setValorNi(e.valor_ni)
        setValorNf(e.valor_nf)
        setreduciones(e.reducciones)
        SetUrlcap(e.urlcap)
      })
    }
  }, [selectOptions])

  return (

    <CotizadorContext.Provider value={{
      parque,
      area,
      capacidad,
      reducciones,
      valorNi,
      valorNf,
      descuento,
      pie,
      cuotas,
      valorUf,
      urlcap,
      dataGastos,
      precioNi,
      precioNf,
      descuentoMonto,
      precioMenosDescuento,
      pieMonto,
      precioMenosPie,
      montoCuota,
      montoGastos,
      filterParques,
      filterAreas,
      filterCapacidades,
      handleChangeParque,
      handleChangeArea,
      handleChangeCapacidad,
      handleChangeCuotas,
      handleChangeDescuento,
      handleChangePie,
      montoNormalizado
    }}>
      {children}
    </CotizadorContext.Provider>
  )
}
