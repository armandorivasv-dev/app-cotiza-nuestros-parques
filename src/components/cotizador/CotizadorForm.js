import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { dataParques } from '../../data/dataParques';
import InputAdornment from '@mui/material/InputAdornment';
import { CotizadorResult } from './CotizadorResult';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CotizadorContext } from '../../context/CotizadorContext';
import { Container } from '@mui/material';

export const CotizadorForm = () => {

  const { 
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
    precioNi,
    precioNf,
    descuentoMonto,
    precioMenosDescuento,
    pieMonto,
    precioMenosPie,
    montoCuota,
    montoGastos,
    filterAreas,
    filterCapacidades,
    handleChangeParque,
    handleChangeArea,
    handleChangeCapacidad,
    handleChangeCuotas,
    handleChangeDescuento,
    handleChangePie,
    handleChangeUf,
 } = useContext(CotizadorContext);

  return (
    <Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '42ch', backgroundColor: '#fff' },
        }}
        noValidate
        autoComplete="on"
        align="center"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Parque"
            value={parque}
            onChange={handleChangeParque}
            align="left"
            sx={{backgroundColor: '#fff'}}
          >
            {dataParques.map((element) => (
              <MenuItem key={element.id} value={element.parque}>
                {element.parque}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Area"
            value={area}
            onChange={handleChangeArea}
            align="left"
          >
            {filterAreas.map((element) => (
              <MenuItem key={element.id} value={element.area} >
                {element.area}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Capacidad"
            value={capacidad}
            onChange={handleChangeCapacidad}
            align="left"
          >
            {filterCapacidades.map((element) => (
              <MenuItem key={element.id} value={element.capacidad}>
                {element.capacidad}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <TextField
            label="Valor UF"
            id="outlined-start-adornment"
            value={uf}
            placeholder="33333.33" 
            autoComplete="on"
            onChange={handleChangeUf}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        </div>

        <div>
          <TextField
            label="Descuento"
            id="outlined-start-adornment"
            value={descuento}
            placeholder="10" 
            autoComplete="on"
            onChange={handleChangeDescuento}
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
          />
        </div>

        <div>
          <TextField
            label="Pie"
            id="outlined-start-adornment"
            value={pie}
            placeholder="10"
            autoComplete="on"
            onChange={handleChangePie}
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
          />
        </div>

        <div>
          <TextField
            label="Cuotas"
            id="outlined-start-adornment"
            value={cuotas}
            placeholder="48"
            autoComplete="on"
            onChange={handleChangeCuotas}
            InputProps={{
              startAdornment: <InputAdornment position="start">Nro</InputAdornment>,
            }}
          />
        </div>
      </Box>

      <CotizadorResult />

      <Box  align="center">
      <Link to={`/propuesta`} style={{textDecoration: "none", color: "#000"}}><Button color="success" variant="contained">GENERAR PROPUESTA</Button></Link>
      </Box>
    

    </Box>
  )
}

