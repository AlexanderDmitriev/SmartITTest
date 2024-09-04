import './App.css';
import { userDataApi } from './redux/userData';
import { Filter } from './entities/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { IFilter } from './interfaces/IFilter';
import { filterData } from './redux/filter';
import { IUserData } from './interfaces/IUserData';
import { useState } from 'react';
import { TableData } from './entities/table/TableData';

function App() {
  const [parameter, setParameter] = useState('name');
  const { data, isFetching /*isSuccess */ } = userDataApi.useGetAllDataQuery();
  const dispatch = useDispatch();

  const showData = data && !isFetching;

  const filter: string = useSelector<IFilter, string>(
    (state: IFilter) => state.filter.value
  );

  const handleParameter = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
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
      <main>
        <h1 className="Title">User information - SmartIT</h1>
        <Filter changeFilter={changeFilter} handleParameter={handleParameter} />
        {showData && <TableData visibleData={visibleData} />}
      </main>
    </div>
  );
}

export default App;
