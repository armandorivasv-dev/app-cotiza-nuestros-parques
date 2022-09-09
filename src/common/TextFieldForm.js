import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export const TextFieldForm = ({ label, value, onChange, placeholder, item }) => {
  return (
    <TextField
      label={label}
      id="standard-number"
      value={value}
      placeholder={placeholder}
      autoComplete="on"
      onChange={onChange}
      InputProps={{
        startAdornment: <InputAdornment position="start">{item}</InputAdornment>,
      }}
    />
  )
}
