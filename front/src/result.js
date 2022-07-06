import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';
import api from './api';

const Result = () => {
  const { route, id } = useParams();

  const [ data, setData ] = useState([]);

  const getData = async () => {
    await axios.get(`${api}/${route}/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {    
    getData();
  }, []);

  return (
      <div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
              <TableRow>
                  <StyledTableCell align="center">id</StyledTableCell>
                  <StyledTableCell align="left">name</StyledTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                  <StyledTableRow key={data.id}>
                  <StyledTableCell align="center">
                      {data.id}
                  </StyledTableCell>
                  <StyledTableCell align="left" component="th" scope="row">
                      {data.name}
                  </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
          </Table>
        </TableContainer>

        <Grid gap={3}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="gridButton">

          <Link to={'/'}>
            <Button variant="contained">Voltar</Button>
          </Link>
        </Grid>

    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default Result;