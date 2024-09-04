import * as React from 'react';
import TextField from '@mui/material/TextField';

export interface IOnChange {
  changeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterInput = ({ changeFilter }: IOnChange) => {
  return (
    <>
      <TextField
        id="filled-filter"
        label="Filter"
        type="text"
        variant="filled"
        onChange={changeFilter}
      />
    </>
  );
};
