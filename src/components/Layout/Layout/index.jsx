import Navbar from "../Navbar"
import Footer from "../Footer"
import './layout.css'

function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
            <div className="children">{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout