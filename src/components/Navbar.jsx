import { Link } from "react-router-dom"
import heading from "../assets/heading.png"

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="nav-left">
                ☰ 
            </div>

            <div className="nav-center">
                <Link to="/">
                   <img className="heading-style" src={heading}/>
                </Link>
            </div>
        

            <div className="nav-right">
                ♡
            </div>
        </div>
    )
}