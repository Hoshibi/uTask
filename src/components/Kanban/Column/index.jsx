import './column.css'
import { useState } from 'react'
import Modal from '../../Modal'
import Input from '../../Input'

function Column({children, title, type, addNewTask }) {
    const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false)
    const [titleValue, setTitleValue] = useState();
    const [descriptionValue, setDescriptionValue] = useState();

    const addNewTaskHandler = function (e) {
        const data = {
            title: titleValue,
            text: descriptionValue,
            id: `${titleValue}-${Math.random() * 100 }`
        }

        addNewTask(data);
        setTitleValue('')
        setDescriptionValue('')
        setOpenCreateTaskModal(false)
        e.preventDefault();
    }
    
    return (
        <>
            <div className='colunm'>
                <div className='title'>
                    <div>
                        <p>{title}</p>
                    </div>
                    {type === 'toDo' && <img src='add-task.png' alt='add' onClick={() => {setOpenCreateTaskModal(true)}}/>}
                </div>

                <div className='card-box'>
                    <div className='card-list'>
                        {children}
                    </div>
                </div>
            </div>

            {openCreateTaskModal && 
                <Modal title={'Nova Task'} closeModalHandler={() => {setOpenCreateTaskModal(false)}}>
                    <form className='form' onSubmit={addNewTaskHandler}>
                        <Input title={'Título *'} type='text' placeholder={'Título da task'} value={titleValue} onChange={(value) => setTitleValue(value.target.value)}/>
                        <Input title={'Descrição'} type='area' placeholder={'Descrição'} value={descriptionValue} onChange={(value) => setDescriptionValue(value.target.value)}/>
                        <button type='submit'>Criar task</button>
                    </form>
                </Modal>
            }
        </>
    )
}

export default Column