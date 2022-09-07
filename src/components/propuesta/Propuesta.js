import React, { useContext, useRef } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import { CotizadorContext } from '../../context/CotizadorContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ExportAsImageButton } from '../../utils/exportAsImage';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import { Header } from '../header/Header';
import { StyledTableCell, StyledTableRow } from '../../style/StyledTableCell';

export const Propuesta = () => {

  const exportRef = useRef();

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
    dataGastos,
    montoNormalizado
  } = useContext(CotizadorContext);

  return (
    <Box>
      <Box className="parent">
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
          align="center"
          ref={exportRef}
        >
        <Header/>
          <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">PARQUE</StyledTableCell>
                  <StyledTableCell align="center">AREA</StyledTableCell>
                  <StyledTableCell align="center">CAP.</StyledTableCell>
                  <StyledTableCell align="center">RED.</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow >
                  <StyledTableCell align="center">{parque}</StyledTableCell>
                  <StyledTableCell align="center">{area}</StyledTableCell>
                  <StyledTableCell align="center">{capacidad}</StyledTableCell>
                  <StyledTableCell align="center">{reducciones}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">NI(UF)</StyledTableCell>
                  <StyledTableCell align="center">NI($)</StyledTableCell>
                  <StyledTableCell align="center">NF(UF)</StyledTableCell>
                  <StyledTableCell align="center">NF($)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow >
                  <StyledTableCell align="center">{valorNi}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(precioNi)}</StyledTableCell>
                  <StyledTableCell align="center">{valorNf}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(precioNf)}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography component="h3" variant="body2" align="center" color="text.primary" display="block" gutterBottom>
            Valor UF: {montoNormalizado(uf)}
          </Typography>

          <Typography component="h2" variant="subtitle1" align="center" color="text.primary">
            DESCUENTO
          </Typography>

          <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">%</StyledTableCell>
                  <StyledTableCell align="center">MONTO</StyledTableCell>
                  <StyledTableCell align="center">-DESCUENTO</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow >
                  <StyledTableCell align="center">{descuento}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(descuentoMonto)}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(precioMenosDescuento)}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography component="h2" variant="subtitle1" align="center" color="text.primary">
            PIE
          </Typography>

          <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">%</StyledTableCell>
                  <StyledTableCell align="center">PIE</StyledTableCell>
                  <StyledTableCell align="center">A PAGAR</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow >
                  <StyledTableCell align="center">{pie}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(pieMonto)}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(precioMenosPie)}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography component="h2" variant="subtitle1" align="center" color="text.primary">
            CUOTAS
          </Typography>

          <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">MESES</StyledTableCell>
                  <StyledTableCell align="center">MONTO</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow >
                  <StyledTableCell align="center">{cuotas}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(montoCuota)}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography component="h2" variant="subtitle1" align="center" color="text.primary">
            GASTOS
          </Typography>
          <Typography component="h3" variant="caption" align="center" color="text.primary" display="block" gutterBottom>
            1: Seguro Desgravamen 2: Gastos administrativos mensual
          </Typography>

          <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">SEGURO</StyledTableCell>
                  <StyledTableCell align="center">G.ADMIN</StyledTableCell>
                  <StyledTableCell align="center">MONTO</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow >
                  <StyledTableCell align="center">{montoNormalizado(dataGastos[0].monto)}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(dataGastos[1].monto)}</StyledTableCell>
                  <StyledTableCell align="center">{montoNormalizado(montoGastos)}</StyledTableCell>
                  
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography  pb={5} component="h3" variant="caption" align="center" color="text.primary" display="block" gutterBottom>
            Propuesta valida por 15 dias a contar de esta fecha.
          </Typography>
        </Box>
      </Box>

      <Box align="center">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Stack spacing={2} direction="row" >
            <Link to={`/`} style={{ textDecoration: "none", color: "#000" }}><Button color="success" variant="contained">REGRESA COTIZADOR</Button></Link>
            <ExportAsImageButton  exportRef={exportRef}/>
          </Stack>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
