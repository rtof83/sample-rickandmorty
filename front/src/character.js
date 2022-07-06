import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';
import api from './api';

const Character = () => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const getData = async () => {
        setLoading(true);

        await axios.get(`${api}/character`)
          .then(({ data }) => {
            // console.log(data);
            setData(data);
            setLoading(false);
          })
          .catch(e => console.log(e));
      }
    
      useEffect(() => {    
        getData();
      }, []);


  return (
      <div className="tableProduct">

        { loading ? <h3><CircularProgress /></h3> : <>

        <h3>Lista Personagens</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
              <TableRow>
                  <StyledTableCell align="center">id</StyledTableCell>
                  <StyledTableCell align="left">name</StyledTableCell>
                  <StyledTableCell align="center">status</StyledTableCell>
                  <StyledTableCell align="center">species</StyledTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {data.map((item) => (
                  <StyledTableRow key={item.id}>
                  <StyledTableCell align="center">
                      {item.id}
                  </StyledTableCell>
                  <StyledTableCell onClick={() => navigate(`/result/character/${item.id}`)} className='rowName' align="left" component="th" scope="row">
                      {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.status}</StyledTableCell>
                  <StyledTableCell align="center">{item.species}</StyledTableCell>
                  </StyledTableRow>
              ))}
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

        </> }
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

export default Character;