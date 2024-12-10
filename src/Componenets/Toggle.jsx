export const Toggle =({toggle, setToggle})=>{
    

    const handleToggleEvent =()=>{
       setToggle(!toggle)
       
        
    }


    return(
        <div className="toggle-container">

        <h6>Ascending & Descending</h6>
    <div className="toggle"
     onClick={handleToggleEvent} 
     style={{ justifyContent: toggle ? 'flex-start' : 'flex-end' }}
    >
        <div className="toggle-btn"></div>
    </div>
</div>
    )
}