import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

// function TodoForm() {
//     const [value, setValue] = useState("");
//     const createTodo = (e: React.FormEvent<EventTarget>) => {
//         e.preventDefault();
//         const item = {
//             task: value,
//             done: false,
//         };
//
//         todosRef.push(item);
//         setValue("");
//     };
//     return (
//         <form onSubmit={createTodo}>
//             <TextField
//                 style={{ width: "100%" }}
//                 id="outlined-basic"
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//                 label="Add Todo"
//                 variant="outlined"
//             />
//         </form>
//     );
// }


const TodoForm = () => {
    const [title, setTitle] = useState('');
    const handleOnChange = (e: any) => {
        setTitle(e.target.value);
    }
    const createTodo = () => {
        const todo = {
            title,
            complete: false,
        };

        debugger
        setTitle('')
    }
    return (
        <>
            <div className='form'>
                <TextField variant='standard' label='Add Todo' type='text' value={title} onChange={handleOnChange} className='textfield' size='medium'
                />
                <div className='add'>
                    {
                        title === '' ?
                            <Button className='icon'
                            ></Button>
                            :<Button onClick={createTodo} className='icon' variant="contained"
                            >Add
                            </Button>
                    }
                </div>
            </div>
        </>
    );
}

export default TodoForm;
