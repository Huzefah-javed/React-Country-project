import { useState } from "react"


export const Contact =()=> {
    const [formData, setFormData] = useState(
        {
            Name: "",
            email: "",
            message: ""
        }
    )
    const handleOnChange =(e)=> {
        const name = e.target.name;
        const value = e.target.value 
        setFormData((prev)=>({...prev, [name]: value}))  
    }
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(formData);
        
        setFormData(
            {
                Name: "",
                email: "",
                message: ""
            }
        )

    }
    return(
        <>
            <section className="sec-main">
       
                <h3 data-aos="flip-up"
    data-aos-offset="200" className="heading">Contact us!!</h3>
                <form onSubmit={handleSubmit} data-aos="slide-up"
    data-aos-offset="200" className="form">
                    <div className="input-block">
                      <label htmlFor="Name">Name:</label>
                      <input type="text"
                       name="Name"
                       id="Name" 
                       className="input"
                        placeholder="Name"
                        value={formData.Name}
                        onChange={handleOnChange}
                        required/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="Name">Email:</label>
                      <input type="email"
                       name="email"
                        id="Email"
                         className="input" 
                         placeholder="Email"
                         value={formData.email}
                         onChange={handleOnChange}
                         required/>
                    </div>
                    <div className="input-blockTextArea">
                      <label htmlFor="Name">Message:</label>
                      <textarea name="message" 
                      id="textArea" 
                      className="input" 
                      placeholder="Message..."
                      value={formData.message}
                      onChange={handleOnChange}
                      required></textarea>
                    </div>
                <button className="submit-btn" type="submit">Submit</button>
                </form>
            </section>
        </>
    ) 

}
