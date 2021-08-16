/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Search({dataBooks}) {

  const defaultProps = {
    options: dataBooks,
    getOptionLabel: (option) => option.title +" - "+ option.author,
  };

  return (
      <Autocomplete
        {...defaultProps}
        autoSelect
        renderInput={(params) => <TextField {...params} label="Search..." margin="normal" />}
      />
  );
}