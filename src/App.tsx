import './App.css';
import { TableHead } from './entities/table/TableHead';
import { TableRow } from './entities/table/TableRow';
import { userDataApi } from './redux/userData';
import { Filter } from './entities/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { IFilter } from './interfaces/IFilter';
import { filterData } from './redux/filter';
import { IUserData } from './interfaces/IUserData';
import { useState } from 'react';

function App() {
  const [parameter, setParameter] = useState('name');
  const { data, isFetching /*isSuccess */ } = userDataApi.useGetAllDataQuery();
  const dispatch = useDispatch();

  const showData = data && !isFetching;

  const filter: string = useSelector<IFilter, string>(
    (state: IFilter) => state.filter.value
  );

  const handleParameter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParameter(event.target.value);
  };

  let visibleData: IUserData[] = [];
  if (showData) {
    visibleData = data.filter(item =>
      item[parameter].toLowerCase().includes(filter)
    );
  }

  const changeFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(filterData(event.currentTarget.value));
  };

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
        <Filter changeFilter={changeFilter} handleParameter={handleParameter} />
        <table>
          <TableHead />
          <tbody>
            {showData &&
              visibleData.map(item => (
                <TableRow
                  key={uuidv4()}
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
