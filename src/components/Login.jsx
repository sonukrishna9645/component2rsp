import React, { useState } from 'react'
import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    import { useFormInputValidation } from 'react-form-input-validation';
const Login = () => {
//  var[valuepoint,setvalue]=useState()
//  const cap_value=(e)=>{
//   setvalue(valuepoint=(e.target.value))
//   console.log(valuepoint)
//  }
const[fields,errors,form]=useFormInputValidation({
    email_address:"",
    password:""
},{
    email_address:"required|email",
    password:"required"

})
  return (
  
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
            value={fields.email_address}
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
              name='email_address'
              label="Email"
              helperText={errors.email_address?errors.email_address:""}
              id="outlined-error"
              
            />
            </div>

            <div>
            <TextField
            value={fields.password}
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
              name='password'
              label="password"
              helperText={errors.password?errors.password:""}

              id="outlined-error-helper-text"
           
            />
          </div>
         
        </Box>
      )
    }

export default Login
