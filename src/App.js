import React, {useState} from "react";
import "./App.css";
import {gql, useQuery} from '@apollo/client'
import {PrintCountries} from './components/PrintCountries/PrintCountries'

const ALL_COUNTRIES_CODE = gql`
  query {
    countries {
      name
      code
      emoji
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`

function App() {
  const [inputValue, setInputValue] = useState("");
  const [groupByButton, setGroupByButton] = useState("continent");
  const {data, loading, error} = useQuery(ALL_COUNTRIES_CODE)  
  if (error) return <span>{error}</span>

  return (    
    <div className="App">
        <h1>Country search</h1>
        <input type="text" name="country" onChange={e => setInputValue(e.target.value)} value={inputValue}/>
        <h2>Group by: (not implemented)</h2> {/* No implementado */}
        <button onClick={() => setGroupByButton("continent")}>Continent</button> {/* No implementado */}
        <button onClick={() => setGroupByButton("languages")}>Language</button> {/* No implementado */}
        {loading ? <p>Loading...</p> : <PrintCountries countries={data.countries} textFilter={inputValue} groupByValue={groupByButton}/>}      
    </div>
  )
}

export default App;