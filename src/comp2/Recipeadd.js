import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import UseForm2 from './UseForm';

const Recipeadd =() => {
    var[course,setcourse] = UseForm2({"recipename":"","timetocook":"","type":"","numberofservings":""});
 const addcourse =() => {
  axios.post("/api/create",course)
  .then((response) =>{
  console.log(response.data);
 })
}
    return (
    <div>
     <div>
      <Typography variant='h3' color={'primary'} background={'grey'}>ADD RECIPE</Typography>
      <TextField  name='recipename' value={course.recipename} onChange={setcourse} fullWidth margin='\normal' label="recipename" variant="filled"></TextField>
      <TextField name='timetocook' value={course.timetocook} onChange={setcourse}fullWidth margin='\normal'label="timetocook" variant="filled"></TextField>
      <TextField  name='type' value={course.type} onChange={setcourse}fullWidth margin='\normal' label="type" variant="filled"></TextField>
      <TextField name='numberofservings' value={course.numberofservings} onChange={setcourse}fullWidth margin='\normal' label="numberof servings" variant="filled"></TextField>

      <Button  onClick={addcourse} variant="contained" color='primary' fullWidth>SUBMIT</Button>
    </div> 
    </div>
  )
}
export default Recipeadd
