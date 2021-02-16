import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<boolean>(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false);
        if (e.charCode === 13) {
            addTask();
        }
    }
    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
            setTitle("");
        } else {
            setError(true);
        }
    }

    return (
        <div>
            <TextField variant={'outlined'}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       helperText={ error ? 'Title is required' : ""}
                       label={"Title"}
                       error={error}
            />
            <IconButton color="primary" onClick={addTask}><AddBox/></IconButton>
            {/*{error && <div className="error-message">{error}</div>}*/}
        </div>
    )
};

export default AddItemForm;