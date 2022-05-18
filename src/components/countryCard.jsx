import React from "react"
import { Card } from "react-bootstrap"
import ReactCountryFlag from "react-country-flag"

const CountryCard = ({country}, key) => {
return (
    // Si bien las validaciones nunca estan de mas considero que Antartica no es un pais. Sin embargo figura como tal en la BDD
    <Card key={country.code} style={{width: '20rem'}} className="m-2">
        <Card.Title key={key+country.name}><ReactCountryFlag className="emojiFlag" countryCode={country.code} svg/> {country.name}</Card.Title>
        {country.capital ? <Card.Text key={country.capital}>Capital: {country.capital}</Card.Text> : ""}
        {country.currency ? <Card.Text key={country.currency}>Currency: {country.currency}</Card.Text> : ""}
        {country.continent.name ? <Card.Text key={country.continent.name}>Continent: {country.continent.name}</Card.Text> : ""}
        {country.languages ?
            <Card.Text as="div">Languages:
                <ul key={country.code+"_langs"}> 
                    {country.languages.map((language, index) => <li key={language.name+index}>{language.name}</li>)}
                </ul>
            </Card.Text>
        : "" }
    </Card>
)}
export default CountryCard