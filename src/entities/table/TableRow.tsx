import { IUserData } from '../../interfaces/IUserData';
import { StyledTableRow } from './StyledTableRow';
import { StyledTableCell } from './StyledTableCell';

export const TableRow = (props: IUserData) => {
  const { id, name, username, email, phone } = props;
  return (
    <>
      <StyledTableRow>
        <StyledTableCell align="right">{id}</StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {name}
        </StyledTableCell>
        <StyledTableCell align="right">{username}</StyledTableCell>
        <StyledTableCell align="right">{email}</StyledTableCell>
        <StyledTableCell align="right">{phone}</StyledTableCell>
      </StyledTableRow>
    </>
  );
};
