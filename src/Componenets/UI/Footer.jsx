import { MdPlace } from "react-icons/md";
import footerData from "../../Api/FooterApi.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footer =()=> {

const handleBackToTop =()=> {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


const FooterIcon ={
    MdPlace : <MdPlace/>,
    IoCallSharp : <IoCallSharp/>,
    TbMailPlus : <TbMailPlus/>,
}
return (
<div className="footer-container">
<div className="footer-contact">
    {footerData.map((item, index) => {
        const icon = item.icon; 
        return (
            <div key={index}>
                <div className="detail">
                    <div className="icon">
                        {FooterIcon[icon]} 
                    </div>
                    <div>
                        <h3 className="title">{item.title}</h3>
                        <p className="detail">{item.details}</p>
                    </div>
                </div>
            </div>
        );
    })}
</div>
<div className="backToBtn">
    <button onClick={handleBackToTop}>Back to Top</button>
</div>
<div className="footer-links">
    <div className="social-media">
        <a href="https://www.facebook.com/Huzefah.javed.775823" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        <a href="https://www.instagram.com/i_m_huzefah_javed?igsh=bWN1MHBndXg3bnQ1 " target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        <a href="https://youtube.com/@dev_by_huzefah?si=dP7gIiHPwbkUzB28" target="_blank" rel="noopener noreferrer" className="social-link">Youtube</a>
    </div>
    <div className="copyright">
        &copy; {new Date().getFullYear()} Huzefah. All rights reserved.
    </div>
</div>
</div>
);
    


}