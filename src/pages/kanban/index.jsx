import Column from '../../components/Kanban/Column'
import Layout from '../../components/Layout/Layout'
import Card from '../../components/Kanban/Card'
import './kanban.css'
import { useState } from 'react'

function Kanban() {
    const [toDoList, setToDoList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [finishList, setFinishList] = useState([]);

    const addNewTask = (data) => {
        setToDoList([...toDoList, data])
    }

    const goToProgressList = (data) => {
        setToDoList(toDoList.filter(p => p.id !== data.id))
        setInProgressList([...inProgressList, data])
    }

    const goToFinishList = (data) => {
        setInProgressList(inProgressList.filter(p => p.id !== data.id))
        setFinishList([data, ...finishList])
    }
    
    const backToDoList = (data) => {
        setInProgressList(inProgressList.filter(p => p.id !== data.id))
        setToDoList([...toDoList, data])
    }    

    const backToProgressList = (data) => {
        setFinishList(finishList.filter(p => p.id !== data.id))
        setInProgressList([...inProgressList, data])
    }
    
    const returnToDoList = (data) => {
        setFinishList(finishList.filter(p => p.id !== data.id))
        setToDoList([...toDoList, data])
    }
    
    const deleteTask = (data, type) => {
        type === 'toDo' && setToDoList(toDoList.filter(p => p.id !== data.id))
        type === 'progress' && setInProgressList(inProgressList.filter(p => p.id !== data.id))
        type === 'finish' && setFinishList(finishList.filter(p => p.id !== data.id))
    }

    return (
        <Layout>
            <div className='container'>
                <div className='phrase-container'>
                    <img src='phrase-icon.png' alt='phrase-icon'/>
                    <div className='phrase'>
                        <p className='title'>Frase do dia</p>
                        <p className='text'>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</p>
                    </div>
                </div>

                <div className='kanban'>
                    <Column title='A fazer' type='toDo' addNewTask={addNewTask}>
                        {toDoList.length > 0 
                            ? <>
                            { toDoList.map((task) => (
                                <Card title={task.title} text={task.text} deleteHandler={() => deleteTask(task, 'toDo')}>
                                    <div className='button-box'>
                                        <img src='next-button.png' alt='next' onClick={() => goToProgressList(task)} />
                                    </div>
                                </Card>))
                            }</>
                            : (<p className='msg'>Nenhuma task cadastrada</p>)
                        }
                    </Column>

                    <Column title='Em andamento' type='inProgress'>
                        {inProgressList.length > 0 
                            ? <>
                            { inProgressList.map((task) => (
                                <Card title={task.title} text={task.text} deleteHandler={() => deleteTask(task, 'progress')}>
                                    <div className='button-box'>
                                        <img src='back-button.png' alt='back' onClick={() => backToDoList(task)}/>
                                        <img src='next-button.png' alt='next' onClick={() => goToFinishList(task)}/>
                                    </div>
                                </Card>))
                            }</>
                            : (<p className='msg'>Nenhuma task em andamento</p>)
                        }
                    </Column>

                    <Column title='Feito' type='finish'>
                        {finishList.length > 0 
                            ? <>
                            { finishList.map((task) => (
                                <Card title={task.title} text={task.text} deleteHandler={() => deleteTask(task, 'finish')}>
                                    <div className='button-box'>
                                        <img src='back-button.png' alt='back' onClick={() => {backToProgressList(task)}}/>
                                        <img src='return-button.png' alt='return' onClick={() => {returnToDoList(task)}}/>
                                    </div>
                                </Card>))
                            }</>
                            : (<p className='msg'>Nenhuma task finalizada</p>)
                        }
                    </Column>
                </div>
            </div>
        </Layout> 
    )
}

export default Kanban