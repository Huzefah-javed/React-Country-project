import CountryData from "../Api/CountryData.json";

export const CountryComponent =()=> {

    return(
        <>
        <section  className="sec-main">

                  <h3  data-aos="flip-up"
    data-aos-offset="200" className="heading">Here are the Interesting Facts
                     we’re proud of</h3>
                <ul className="ul">
                    {
                        CountryData.map((country) => {
                            return (
                                <li key={country.id} className="list" data-aos="zoom-out"
                                data-aos-offset="200">
                                    <h2 className="Name">Name: <span>{country.countryName}</span></h2>
                                    <p className="para">capital: <span>{country.capital}</span></p>
                                    <p className="para">Population: <span>{country.population}</span></p>
                                    <p className="para">Interesting Fact: <span>{country.interestingFact}</span></p>
                                </li>
                            )
                        })
                    }
                </ul>
                    </section>
            </>
    )
}
