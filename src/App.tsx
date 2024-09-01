import './App.css';
import { TableHead } from './entities/table/TableHead';
import { TableRow } from './entities/table/TableRow';
import { useGetAllDataQuery } from './redux/userData';

function App() {
  const { data /* , isFetching,isSuccess */ } = useGetAllDataQuery();
  console.log(data);
  /* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json)); */

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>User information - SmartIT</h1>
        <table>
          <TableHead />
          <tbody>
            {data?.map(item => {
              <TableRow
                key={item.id}
                id={item.id}
                name={item.name}
                username={item.username}
                email={item.email}
                phone={item.phone}
              />;
            })}
            <tr>
              <td>1</td>
              <td>name</td>
              <td>username</td>
              <td>email</td>
              <td>phone</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
