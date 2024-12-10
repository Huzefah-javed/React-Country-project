import { useEffect} from "react"
import { getApi } from "../Api/CountryApi";
import { useState } from "react";
import { NavLink } from "react-router";
import { FcViewDetails } from "react-icons/fc";
import { PiSealCheck } from "react-icons/pi";
import { Search } from "../Componenets/Search"
import { Toggle } from "../Componenets/Toggle"
import { SelectContinent } from "../Componenets/SelectContinent";

export const Country =()=> {
    
    const [countryApiData, setCountryApiData] = useState([]);
    const[search, setSearch] = useState()
    const[filterContinent, setFilterContinent] = useState()
    const[toggle, setToggle] = useState(false)
    const[loading, setLoading] = useState(false)
    
   const gettingApi=async()=> {
        try {
            setLoading(true)
            const res = await getApi();
            setCountryApiData(res.data);
            setLoading(false)
            
            
        } catch (error) {
            setLoading(false)
            return(
                <div className="ul-country">
                    Plz check your internet connection...
                </div>
            )

        }
    }

    useEffect(()=>{
        gettingApi()
    },[])


 
    const searchedData = countryApiData.filter((curCountry)=>{
        return  search? curCountry.name.common.toLowerCase().includes(search.toLowerCase()) : countryApiData;
        
    })
    
    if (toggle) {
        searchedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else {
        searchedData.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }
    
   const filtered =  filterContinent? searchedData.filter((country)=>{
        return country.continents[0].toLowerCase() === filterContinent.toLowerCase()
    }) : searchedData




if (loading) {
    return (
        <div className="loaderPage">
        <div className="loader"></div>
    </div>
    )
}

    return (
        <>
        <section className="sec-main">
            <div className="functions">
                <Search search={search} setSearch={setSearch}/>
                <Toggle toggle={toggle} setToggle={setToggle}/>
                <SelectContinent filterContinent={filterContinent} setFilterContinent={setFilterContinent} />
            </div>

          
            <ul className="ul-country">

        { filtered.map((curCountry, index)=>{
            return <li key={index} className="li-country"  data-aos="zoom-in-right"
            data-aos-offset="200">
            <img src= {curCountry.flags.png} className="country-flag" alt="Country-flag" />
               <h2 className="countryName">{curCountry.name.common}</h2>
               <button className="viewMoreBtn"><NavLink to={`/country/${curCountry.ccn3}`}>View Details<FcViewDetails /></NavLink></button>
            </li>
        })}
            </ul>

        </section>
        </>
    )
}



