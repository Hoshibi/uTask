import './footer.css'

function Footer() {
    return (
        <footer>
            <div className='link'>
                <p>© Processo de Trainee </p>
                <a href='https://unect.com.br/' target="_blank" rel="noreferrer">Unect Jr.</a> 
                <p>2022.1</p>
            </div>
            <div className='signature'>
                <p>Feito com</p>
                <img src='favorite.png' alt='heart'/>
                <p>por <b>Sayuri</b></p>
            </div>
        </footer>
    )
}

export default Footer