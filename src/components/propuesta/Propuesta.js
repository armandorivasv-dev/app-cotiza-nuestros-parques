import React, { useContext, useRef } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { CotizadorContext } from '../../context/CotizadorContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import exportAsImage from '../../utils/exportAsImage';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
            Valor UF: {uf}
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
                  <StyledTableCell align="center">CUOTAS</StyledTableCell>
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
        </Box>
      </Box>

      <Box mt={5} align="center">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Stack spacing={2} direction="row" >
            <Link to={`/`} style={{ textDecoration: "none", color: "#000" }}><Button color="inherit">REGRESA COTIZADOR</Button></Link>
            <Button color="inherit" onClick={() => exportAsImage(exportRef.current, "propuesta-los-parques")}>GENERAR CAPTURA</Button>
          </Stack>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
