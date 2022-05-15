import React from "react"

export const PrintCountries = ({countries, textFilter, groupByValue}) => {
    
    // Validaciones iniciales
    if (countries === null || !textFilter) return null
    
    //console.log(groupByValue) 
    
    // Filtrado de paises por input text
    let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(textFilter.toLowerCase()));
    
    // lista unica de continetes en el array de paises buscados
    let uniqueContinents = [...new Set(filteredCountries.map(country => country.continent.name))]

    // lista unica de idiomas en el array de paises buscados
    // ... pendiente

    return (
        <>
            {uniqueContinents.map(continent =>                
                <div key={continent}>
                    <h2 key={continent}>{continent}</h2>
                    <div className="cardGroup">
                    {filteredCountries.map(country => 
                        country.continent.name === continent ? 
                        <div key={country.code} className="card">
                            <h4>{country.emoji} {country.name}</h4><br />
                            <div>Continent: {country.continent.name}</div>
                        </div> 
                        : null 
                    )}
                    </div>
                </div>
            )}     
        </>
    )
}