import './modal.css'

function Modal({children, title, closeModalHandler }) {
    return (
        <div className='external-container'>
            <div className='modal'>
                <header>
                    <div className='title'>
                        <h1>{title}</h1>
                        <div />
                    </div>
                    <img src='close.png' alt='close' onClick={closeModalHandler}/>
                </header>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal