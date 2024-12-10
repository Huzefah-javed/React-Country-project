import { FaArrowRight } from "react-icons/fa"
import "./Pages.css"
import { CountryComponent } from "../Componenets/CountryData"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router";
export const Home =()=> {



    return(
        <>
         <section className="home-body">
           <div className="intro">
                <div data-aos="fade-left"
    data-aos-offset="200" className="intro-title">Explore the World, One Country at a Time.</div>
                <div  data-aos="fade-right"
    data-aos-offset="200" className="intro-detail">Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</div>
                <NavLink to="./country"><button  data-aos="zoom-out"
    data-aos-offset="200" className="intro-btn"> Start Exploring <FaArrowRight/> </button></NavLink>
            </div>
        <div className="image-div">
           <img data-aos="zoom-out"data-aos-offset="100" className="intro-title" src="/world.png" alt="World image" />
        </div>
    </section>
    <CountryComponent/>


    </>
        
    )
}
AOS.init();
