import { NavLink, useNavigate, useRouteError } from "react-router"

export const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
   const handlePreviousPage = () => {
      navigate(-1)
   } 

 return (
    <div className="errorMain">
    <img className="errorImg" src="https://img.freepik.com/free-vector/tiny-programmers-working-with-system-error-computer-monitor-internet-flat-vector-illustration-programming-it-digital-technology_74855-8632.jpg?t=st=1731581505~exp=1731585105~hmac=494d7f3e332062e3c1a31c2e65098cc46739db54e7f5372e769118a3d6410f54&w=740" alt="No page found" />
    <h1 className="heading">Ops... No page Found</h1>
    <p>{error.data}</p>
    <div>
    <NavLink className="errorBtn" to="/">back to home page</NavLink>
    <button className="errorBtn" onClick={handlePreviousPage}>Go back to previous page</button>
    </div>
    </div>
 )
}