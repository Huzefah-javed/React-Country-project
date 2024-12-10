import { LuMapPin } from "react-icons/lu";
import { useLoaderData, NavLink } from "react-router";

export const CountryDetail =()=>{
    const dataLoader = useLoaderData(); 
    
    return(
        <>
        <div className="sec-main">
                <h1 data-aos="zoom-in" data-aos-offset="100">{dataLoader.data[0].name.common}</h1>
                <div className="country">

            <div className="flag-map">
                <div className="flag"></div>
               <img data-aos="flip-down"
    data-aos-offset="200" className="country-flag" src={dataLoader.data[0].flags.png} alt="" />
                <div className="map">
                    <button data-aos="zoom-in"
    data-aos-offset="100" className="viewLocationBtn">
                <a href={dataLoader.data[0].
                maps.openStreetMaps} target="_blank" rel="noopener noreferrer"> 
                   View Location <LuMapPin />
                   </a>
                </button> 
                </div>
            </div>
            <div data-aos="zoom-out"
    data-aos-offset="200" className="country-info">
                <p className="paraCountry">Full Name: <span>{dataLoader.data[0].translations.cym.official}</span></p>
                <p className="paraCountry">Area: <span>{dataLoader.data[0].area} sqKm</span></p>
                <p className="paraCountry">Capital: <span>{dataLoader.data[0].capital[0]}</span></p>
                <p className="paraCountry">Region: <span>{dataLoader.data[0].continents[0]}</span></p>
                <p className="paraCountry">SubRegion: <span>{dataLoader.data[0].subregion}</span></p>
                <p className="paraCountry">Currencies: <span>{dataLoader.data[0].currencies[Object.keys(dataLoader.data[0].currencies)[0]].name}</span></p>
                <p className="paraCountry">Currency symbol: <span>{dataLoader.data[0].currencies[Object.keys(dataLoader.data[0].currencies)[0]].symbol}</span></p>
                <p className="paraCountry">Population: <span>{dataLoader.data[0].population}</span></p>
                <p className="paraCountry">Languages: <span>{Object.values(dataLoader.data[0].languages).join(", ")}</span></p>
                <p className="paraCountry">TimeZone: <span>{dataLoader.data[0].timezones}</span></p>
                <p className="paraCountry">Country domain: <span>{dataLoader.data[0].tld}</span></p>
                <p className="paraCountry">is UN member: <span>{dataLoader.data[0].unMember ? "yes": "No"}</span></p>
                <div className="gov-div">
                Gov Logo: 
                <img className="gov-logo" src={dataLoader.data[0].coatOfArms.png} alt="Armed Logo" />
                </div>
            </div>
                </div>
               <NavLink to="/country"> <button className="submit-btn" style={{ position: 'relative', left: '30%' }}>Back</button></NavLink>
        </div>

        </>
    )
}