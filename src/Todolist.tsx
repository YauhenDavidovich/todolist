import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todoListID: string) => void
    removeTodolist: (todoLIstID: string) => void
    changeFilter: (value: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todoLIstID: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, title: string, todoLIstID: string) => void
    changeTodoListTitle: (title: string, todoLIstID: string) => void
}

export function Todolist(props: PropsType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodoListTitle(title, props.id)
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);


    return <div>
        <h3><EditableSpan title={props.title} changeItem={changeTodolistTitle}/>
            <IconButton onClick={() => {
                props.removeTodolist(props.id)
            }}><Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>

        <ul style={{listStyle: 'none', paddingLeft: "0"}}>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
                    }
                    const changeTitle = (title: string) => {
                        props.changeTaskTitle(t.id, title, props.id)
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            color={'secondary'}
                            onChange={onChangeHandler}
                            checked={t.isDone}/>
                        <EditableSpan title={t.title} changeItem={changeTitle}/>
                        <IconButton onClick={onClickHandler}><Delete/></IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            <Button size={'small'}
                    color={props.filter === 'all' ? "primary" : "secondary"}
                    variant={'contained'}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button size={'small'}
                    color={props.filter === 'active' ? "primary" : "secondary"}
                    variant={'contained'}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button size={'small'}
                    color={props.filter === 'completed' ? "primary" : "secondary"}
                    variant={'contained'}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}
