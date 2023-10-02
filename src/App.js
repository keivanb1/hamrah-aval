import './App.css';
import FilterData from "./components/FilteredData";
import {useEffect, useState} from "react";
function App() {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://reqres.in/api/users')
            .then(res=>res?.json()).then(data => setData(data.data))
    } , [])

  return (
    <div className="App">
        <FilterData data={data}  />
    </div>
  );
}

export default App;
