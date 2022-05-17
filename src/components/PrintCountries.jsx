import React from "react"
import CountryCard from "./countryCard"

export const PrintCountries = ({countries, textFilter, groupByValue="continen"}) => {
    
    // Validaciones iniciales
    //if (countries === null || !textFilter) return null
    if (countries === null ) return null
        
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
                <div key={continent}>
                    <h2 key={continent}>{continent}</h2>
                    <div className="cardGroup">
                    {filteredCountries.map((country, index) => country.continent.name === continent ? <CountryCard country={country} key={index}/> : "")}
                    </div>
                </div>
            )}     
        </>
        )
    } else {
        return (
        <>  
            {uniqueLanguagesList.map((language, index) =>                
                <div key={index+language}>
                    <h2 key={"h2_"+language}>{language}</h2>
                    <div className="cardGroup">
                        {filteredCountries.map((country, index) => country.languages.find(lang => lang.name === language) ?
                        <CountryCard country={country} key={index}/>
                        : null
                    )}
                    </div>
                </div>
            )}     
        </>
        )
    }
}