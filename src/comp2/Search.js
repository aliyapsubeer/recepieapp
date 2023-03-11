import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'


const Search = () => {
    var[course,setcourse]= UseForm({"recepiename":""});
var[result,setresult] = useState([]);
    const Searchrecipie=()=>{
        axios.post("/api/search",course)
        .then((response)=>{
            console.log(response.data);
           setresult(result=response.data)
        })

    }
  return (
    <div>
      <Typography variant='h3' color={'GrayText'}>Search</Typography>
      <br></br>
      <br></br>
      <TextField name="recipiename" value={course.Moviename} onChange={setcourse} label='recipiename'></TextField>
      <br></br>
      <br></br>
      <Button onClick={Searchrecipie} variant='contained' color='primary' fullWidth>search</Button>
      <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>recepiename</TableCell>
                            <TableCell align="right">type</TableCell>
                            <TableCell align="right">numberofservings</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result.map((value,index) => {
                           return <TableRow key={index}>
                            <TableCell component="th" scope="row"> {value.recipiename}
                                </TableCell>
                                <TableCell align="right">{value.type}</TableCell>
                                <TableCell align="right">{value.numberofservings}</TableCell>
                               
                               
                            </TableRow>
})}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default Search
