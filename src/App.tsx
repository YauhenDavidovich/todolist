import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import AddItemForm from "./AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
    id: string
    title: string
    // isDone: boolean
    filter: FilterValuesType
}

type TaskStateType = {
    [todoListID: string]: Array<TaskType>
}

function App() {

    const todoListID1 = v1()
    const todoListID2 = v1()


    const [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: todoListID1, title: "What to learn", filter: "all"},
        {id: todoListID2, title: "What to by", filter: "all"},
    ])
    const [tasks, setTasks] = useState<TaskStateType>({
            [todoListID1]: [{id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Rest API", isDone: false},
                {id: v1(), title: "GraphQL", isDone: false},],
            [todoListID2]: [{id: v1(), title: "Milk", isDone: true},
                {id: v1(), title: "Bread", isDone: true},
                {id: v1(), title: "Beer", isDone: false},
                {id: v1(), title: "Meat", isDone: false},
                {id: v1(), title: "Water", isDone: false},],
        }
    )


    function removeTask(id: string, todoLIstID: string) {
        const todoListTasks = tasks[todoLIstID]
        tasks[todoLIstID] = todoListTasks.filter(t => t.id !== id)
        setTasks({...tasks});
    }

    function addTask(title: string, todoLIstID: string) {
        let task = {id: v1(), title: title, isDone: false};
        tasks[todoLIstID].push(task)
        setTasks({...tasks});
    }

    function addTodolist(title: string) {
        const newTodolistID = v1()
        const newTodolist: TodolistType = {
            id: newTodolistID, title: title, filter: 'all'
        }
        setTodoLists([newTodolist, ...todoLists])
        setTasks({...tasks, [newTodolistID]: []})
    }

    function changeStatus(taskId: string, isDone: boolean, todoLIstID: string) {
        const todoListTasks = tasks[todoLIstID]
        let task = todoListTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks});
    }

    function changeTaskTitle(taskId: string, title: string, todoLIstID: string) {
        const todoListTasks = tasks[todoLIstID]
        let task = todoListTasks.find(t => t.id === taskId);
        if (task) {
            task.title = title;
        }
        setTasks({...tasks});
    }

    function changeTodoListTitle(title: string, todoLIstID: string) {
        const todoList = todoLists.find(tl => tl.id === todoLIstID)
        if (todoList) {
            todoList.title = title;
            setTodoLists([...todoLists])
        }
        setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType, todoLIstID: string) {
        const todoList = todoLists.find(tl => tl.id === todoLIstID)
        if (todoList) {
            todoList.filter = value
            setTodoLists([...todoLists])
        }
    }

    function removeTodolist(todoLIstID: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== todoLIstID))
        delete tasks[todoLIstID]
        setTasks({...tasks})
    }




    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {
                todoLists.map(tl => {
                    let taskForTodoList = tasks[tl.id]
                    if(tl.filter === 'active'){
                        taskForTodoList = tasks[tl.id].filter(t => !t.isDone)
                    }
                    if(tl.filter === 'completed'){
                        taskForTodoList = tasks[tl.id].filter(t => t.isDone)
                    }

                    return (<Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={taskForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                        changeTaskTitle={changeTaskTitle}
                        changeTodoListTitle={changeTodoListTitle}
                    />)
                })
            }
        </div>
    );
}

export default App;
