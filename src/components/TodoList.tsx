import React, { useState, useEffect } from 'react';
import db from "../dll/firebase";

type TodoType = {
    todo: string
}
const TodoList = () => {
    const [todoLists, setTodoLists] = useState([] as any);
    useEffect(() => {
        db.collection('todos').onSnapshot((snapshot: { docs: any[]; }) => {
            console.log(snapshot.docs.map(doc => doc.data().todo))

            setTodoLists(snapshot.docs.map(doc => doc.data().todo));
        })
    }, [])


    return (
        <>{todoLists.map((todo: TodoType) => <div>{todo}</div>)}
        </>
    );
}
export default TodoList;
