import './card.css'
import { useState } from 'react'

function Card({children, title, text, deleteHandler}) {
    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isOpenOption, setIsOpenOption] = useState(false)

    return (
        <div className='card'>
            <div className='header'>
                <p>{title}</p>
                <img src='options.png' alt='options' onClick={() => setIsOpenOption(!isOpenOption)}/>
                {isOpenOption && 
                    <div className='options'>
                        <div className='option' onClick={deleteHandler}>
                            <img src='trash.png' alt='trash' />
                            <p>Excluir</p>
                        </div>
                    </div>
                }
            </div>
            
            <div className='body'>
                <div className='open' onClick={() => {setIsOpenDescription(!isOpenDescription)}}>
                    {isOpenDescription 
                        ? (
                            <div>
                                <p>Esconder descrição</p>
                                <img src='arrow.png' alt='close' style={{transform: 'rotate(180deg)'}}/>
                            </div>
                        )
                        : (
                            <div>
                                <p>Ler descrição</p>
                                <img src='arrow.png' alt='open'/>
                            </div>
                        )
                    }
                    {isOpenDescription && <p className='text'>{text}</p>}
                </div>
                {children}
            </div>
        </div>
    )
}

export default Card