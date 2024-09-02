import './App.css';
import { TableHead } from './entities/table/TableHead';
import { TableRow } from './entities/table/TableRow';
import { userDataApi } from './redux/userData';
import { Filter } from './entities/Filter/Filter';

function App() {
  const { data, isFetching /*isSuccess */ } = userDataApi.useGetAllDataQuery();
  /* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json)); */

  const showData = data && !isFetching;

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
        <Filter/>
        <table>
          <TableHead />
          <tbody>
            {showData &&
              data.map(item => (
                <TableRow
                  id={item.id}
                  name={item.name}
                  username={item.username}
                  email={item.email}
                  phone={item.phone}
                />
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
