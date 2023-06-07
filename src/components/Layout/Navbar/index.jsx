import './navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return (
        <nav>
            <img src='logo.png' alt='logo' onClick={goToHome}/>
            <h1>uTask 3.0</h1>
            <img src='buttonMode.png' alt="buttonMode"/>
        </nav>
    )
}

export default Navbar