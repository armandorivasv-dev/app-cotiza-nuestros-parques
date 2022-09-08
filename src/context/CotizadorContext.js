import React, { createContext, useState, useEffect } from 'react';
import { dataFinanciera, dataGastos } from '../data/dataParques';
import _ from 'underscore';

export const CotizadorContext = createContext();

export const CotizadorContextProvider = ({ children }) => {

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
  const [uf, setUf] = useState('');

  //CALC
  const gastosAdmin = dataGastos.reduce((acum, cur) => acum + cur.monto, 0)
  const precioNi = valorNi * uf
  const precioNf = valorNf * uf
  const descuentoMonto = (precioNf * descuento / 100)
  const precioMenosDescuento = (precioNf - descuentoMonto)
  const pieMonto = (precioNf * pie / 100)
  const precioMenosPie = (precioMenosDescuento - pieMonto)
  const montoCuota = (precioMenosPie / cuotas)
  const montoGastos = montoCuota + gastosAdmin

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
  const handleChangeUf = (event) => {
    setUf(event.target.value)
  }
  //FUNCTION TO NORMALIZATE CUR AND DECIMAL
  const montoNormalizado = (value) => {
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(value)
  }

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
      uf,
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
      handleChangeUf,
      montoNormalizado
    }}>
      {children}
    </CotizadorContext.Provider>
  )
}
