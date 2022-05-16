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
        <h2>Country search</h2>
        <input type="text" name="country" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="Type in some text to begin searching..."/>
        <h2>Group by:</h2> 
        <button onClick={() => setGroupByButton("continent")} className={groupByButton === "continent" ? "active" : ""}>Continent</button>
        <button onClick={() => setGroupByButton("languages")} className={groupByButton === "languages" ? "active" : ""}>Language</button>
        {loading ? <p>Loading...</p> : <PrintCountries countries={data.countries} textFilter={inputValue} groupByValue={groupByButton}/>}      
    </div>
  )
}

export default App;