import './App.css';
import { useGetAllDataQuery } from './redux/userData';

function App() {
  const  {data/* , isFetching,isSuccess */}  = useGetAllDataQuery();
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
    </div>
  );
}

export default App;
