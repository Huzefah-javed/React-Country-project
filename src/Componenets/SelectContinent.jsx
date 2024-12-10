export const SelectContinent =({filterContinent, setFilterContinent})=>{


    const handleContinentChange =(e)=>{
        setFilterContinent(e.target.value)
    }

    return(
        <div className="filter">
        <label htmlFor="continent">Choose a Continent:</label>
        <select id="continent" 
        value={filterContinent} onChange={handleContinentChange}
         name="continent">
        <option value="">All</option>
     <option value="asia">Asia</option>
     <option value="europe">Europe</option>
     <option value="africa">Africa</option>
     <option value="oceania">Oceania</option>
     <option value="North America">North America</option>
     <option value="South America">South America</option>
 </select>
         </div>
    )
}