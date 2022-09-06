import React from 'react';
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

const montoNormalizado = (value) => {
  return new Intl.NumberFormat('es-US', { maximumFractionDigits: 2 }).format(value)
}


export const CotizadorResult = ({ parque, area, capacidad, reducciones, valorNi, valorNf, precioNi, precioNf, descuentoMonto, precioMenosDescuento, pieMonto, precioMenosPie, montoCuota, montoGastos }) => {
  return (
    <Box>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        align="center"
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

        <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
          <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">DESCUENTO</StyledTableCell>
                <StyledTableCell align="center">MONTO</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow >
                <StyledTableCell align="center">{montoNormalizado(descuentoMonto)}</StyledTableCell>
                <StyledTableCell align="center">{montoNormalizado(precioMenosDescuento)}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
          <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">PIE</StyledTableCell>
                <StyledTableCell align="center">MONTO</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow >
                <StyledTableCell align="center">{montoNormalizado(pieMonto)}</StyledTableCell>
                <StyledTableCell align="center">{montoNormalizado(precioMenosPie)} </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ m: 1, width: '42ch' }}>
          <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">CUOTA</StyledTableCell>
                <StyledTableCell align="center">+ GASTOS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow >
                <StyledTableCell align="center">{montoNormalizado(montoCuota)}</StyledTableCell>
                <StyledTableCell align="center">{montoNormalizado(montoGastos)} </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>        
      </Box>
    </Box>
  )
}
