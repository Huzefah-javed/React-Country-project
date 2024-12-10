export const Search =({search, setSearch})=>{
    

    const handleOnchange =(e)=> {
      setSearch(e.target.value)
    }


    return(
        <div className="search">
        <label htmlFor="search"></label>
        <input type="search"
         className="input" 
         id="search"
          placeholder="Search for a country..."
          onChange={handleOnchange}
          value={search}
          />
    </div> 
    )
}