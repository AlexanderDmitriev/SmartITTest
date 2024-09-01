import { IUserData } from '../../interfaces/IUserData';

export const TableRow = (props: IUserData) => {
  const { id, name, username, email, phone } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};
