import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from './StyledTableCell';

export const TableHeadMain = () => {
  return (
    <>
      <TableHead>
        <TableRow>
          <StyledTableCell>id</StyledTableCell>
          <StyledTableCell align="right">Name</StyledTableCell>
          <StyledTableCell align="right">Username</StyledTableCell>
          <StyledTableCell align="right">E-mail</StyledTableCell>
          <StyledTableCell align="right">Phone</StyledTableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
