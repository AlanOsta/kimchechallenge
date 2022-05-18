import React from "react"
import { Container, Row } from "react-bootstrap";
import CountryCard from "./countryCard"

const PrintCountries = ({countries, textFilter, groupByValue="continen"}) => {
    // Validaciones iniciales
    if (countries === null || !textFilter) return null
    
        
    // Filtrado de paises por input text
    let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(textFilter.toLowerCase()));
    
    // lista de continentes unicos en el array de paises buscados
    let uniqueContinents = [...new Set(filteredCountries.map(country => country.continent.name))]

    // lista de idiomas unicos en el array de paises buscados
    let uniqueLanguages = new Set();
    filteredCountries.forEach(country => country.languages.forEach( language => uniqueLanguages.add(language.name) ))
    let uniqueLanguagesList = Array.from(uniqueLanguages)

    if (groupByValue === "continent") {
        return (
        <>
            {uniqueContinents.map(continent =>                
                <Container key={continent}>
                    <Row as={"h2"} key={continent} className="p-2 bg-primary rounded">{continent}</Row>
                    <Row className="m-2">
                        {filteredCountries.map((country, index) => country.continent.name === continent ? <CountryCard country={country} key={index}/> : "")}
                    </Row>
                </Container>
            )}     
        </>
        )
    } else {
        return (
        <>  
            {uniqueLanguagesList.map((language, index) =>                
                <Container key={language}>
                    <Row as={"h2"} key={language} className="p-2 bg-primary rounded">{language}</Row>
                    <Row className="cardGroup">
                        {filteredCountries.map((country, index) => country.languages.find(lang => lang.name === language) ? <CountryCard country={country} key={index}/> : "")}
                    </Row>
                </Container>
            )}     
        </>
        )
    }
}

export default PrintCountries