import React, {useState} from "react";
import {gql, useQuery} from '@apollo/client'
import PrintCountries from './components/PrintCountries'
import { Container, FormGroup, Button, Form, FormControl } from "react-bootstrap";

const ALL_COUNTRIES_CODE = gql`
  query {
    countries {
      name
      code
      capital
      currency
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
    <Container>
        <h1>Country search:</h1>
        <Form className="mb-5">
          <FormGroup>
            <FormControl type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="Type some text to begin searching..."/>
            <h3 className="mt-3">Group by:</h3> 
            <Button onClick={() => setGroupByButton("continent")} variant={groupByButton === "continent" ? "primary active" : "secondary"} className="mx-1">Continent</Button>
            <Button onClick={() => setGroupByButton("languages")} variant={groupByButton === "languages" ? "primary active" : "secondary"} className="mx-1">Language</Button>
          </FormGroup>
        </Form>
        {loading ? <p>Loading...</p> : <PrintCountries countries={data.countries} textFilter={inputValue} groupByValue={groupByButton}/>}      
    </Container>
  )
}

export default App;