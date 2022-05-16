import React from "react"

export const PrintCountries = ({countries, textFilter, groupByValue="continen"}) => {
    
    // Validaciones iniciales
    if (countries === null || !textFilter) return null
    //if (countries === null ) return null
        
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
                    {filteredCountries.map(country => 
                        country.continent.name === continent ? 
                        <div key={country.code} className="card">
                            <h4>{country.emoji} {country.name}</h4><br />
                            <div>Continent: {country.continent.name}</div>
                            <div>Languages:
                                <ul key={country.code+"_langs"}> 
                                    {country.languages.map(language => <li key={language.name+"_langs"}>{language.name}</li>)}
                                </ul>
                            </div>
                        </div> 
                        : null 
                    )}
                    </div>
                </div>
            )}     
            </>
        )
    } else {
        return (
            <>  
            {uniqueLanguagesList.map(language =>                
                <div key={language}>
                    <h2 key={"h2_"+language}>{language}</h2>
                    <div className="cardGroup">
                        {filteredCountries.map(country => country.languages.find(lang => lang.name === language) ?
                        <div key={country.code} className="card">
                            <h4>{country.emoji} {country.name}</h4><br />
                            <div>Continent: {country.continent.name}</div>
                            <div>Languages:
                                <ul key={country.code+"_langs"}> 
                                    {country.languages.map(language => <li key={language.name+"_langs"}>{language.name}</li>)}
                                </ul>
                            </div>
                        </div> 
                        : null
                    )}
                    </div>
                </div>
            )}     
            </>
        )
    }
}