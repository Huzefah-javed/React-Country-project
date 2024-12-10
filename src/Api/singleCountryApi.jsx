import axios from "axios"


export const singleCountryApi =({params})=> {
    const country = params.CountryDetail
    
    const Api = axios.create({
        baseURL: 'https://restcountries.com/v3.1',
    })
    return Api.get(`/alpha/${country}`)
}