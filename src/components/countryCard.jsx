import React from "react"

const CountryCard = ({country}, key) => {
   
    return (
        <div key={country.code} className="card">
            <h4 key={key+country.name}>{country.emoji} {country.name}</h4><br />
            {country.capital ? <div key={country.capital}>Capital: {country.capital}</div> : ""}
            <div key={country.currency}>Currency: {country.currency}</div>
            <div key={country.continent.name}>Continent: {country.continent.name}</div>
            <div>Languages:
                <ul key={country.code+"_langs"}> 
                    {country.languages.map((language, index) => <li key={language.name+index}>{language.name}</li>)}
                </ul>
            </div>
        </div>
    )

}

export default CountryCard