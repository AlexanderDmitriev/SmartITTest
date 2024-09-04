import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { IUserData } from '../../interfaces/IUserData';
import { v4 as uuidv4 } from 'uuid';
import { IVisibleData } from '../../interfaces/IVisibleData';
import { TableHeadMain } from './TableHead';
import { TableRow } from './TableRow';

export const TableData = (props: IVisibleData) => {
  const { visibleData } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 480 }} aria-label="customized table">
        <TableHeadMain />
        <TableBody>
          {visibleData.map((item: IUserData) => (
            <TableRow
              key={uuidv4()}
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              phone={item.phone}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
