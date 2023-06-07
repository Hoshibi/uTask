import './home.css'
import Layout from '../../components/Layout/Layout'
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const goToKanbab = () => {
        navigate('/kanban')
    }

    return (
        <Layout>
            <div className='home'>
                <h1>Inicie seu Kanban</h1>
                <div onClick={goToKanbab}>Entre aqui</div>

                {/* <Link to={'/kanban'}>Entre aqui</Link> */}
            </div>
        </Layout> 
    )
}

export default Home