import axios from "axios";


const Api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
})

export const getApi =()=> {
        return Api.get("/independent?status=true")
}