import React from 'react'
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@mui/material';



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
  const Frontside = () => {
 
var [course, setcourse]= useState([])
    useEffect(() => {
        fetchcourse();
        
    }, []);
    const fetchcourse= ()=>{
        axios.get("http://localhost:5000/view")
            .then((response) => {
                console.log(response.data);
                setcourse(response.data);
            })

    }
    const Update =(id)=>
{
    const data ={"_id":id}
    axios.put("http://localhost:5000/update",data)
    .then ((response)=>{
        console.log(response.data);
        alert("sucessfully delete");
        fetchcourse();
})}
    const deletecourse =(id)=>{

const data={"_id":id}
axios.post("/api/delete",data)
.then((response)=>{
    console.log(response.data);
    alert("sucessfully delete");
    fetchcourse();
}
    )}

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Recipepename</StyledTableCell>
                            <StyledTableCell align="right">time to cook</StyledTableCell>
                            <StyledTableCell align="right">type</StyledTableCell>
                            <StyledTableCell align="right">number of servings</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {course.map((value,index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row"> {value.recipename}
                                </StyledTableCell>
                                <StyledTableCell align="right">{value.timetocook}</StyledTableCell>
                                <StyledTableCell align="right">{value.type}</StyledTableCell>
                                <StyledTableCell align="right">{value.numberofservings}</StyledTableCell>
                                <StyledTableCell  align="right"><Button color='error' onClick={Update}>EDIT</Button></StyledTableCell>
                                <StyledTableCell align="right"><Button color='primary' onClick={()=>{deletecourse(value._id)}}>DELETE</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Frontside
